import http from "node:http";

const PORT = Number(process.env.PORT || 3061);
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || "hello@effectx.com.au";
const CONTACT_FROM = process.env.CONTACT_FROM || "EffectX Website <website@effectx.com.au>";
const ALLOWED_ORIGINS = new Set(["https://effectx.com.au", "https://www.effectx.com.au"]);
const attempts = new Map();

if (!RECAPTCHA_SECRET_KEY || !RESEND_API_KEY) {
  throw new Error("RECAPTCHA_SECRET_KEY and RESEND_API_KEY are required");
}

function json(response, status, body) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(body));
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]);
}

function clientIp(request) {
  return clean(request.headers["x-real-ip"], 64) || request.socket.remoteAddress || "unknown";
}

function rateLimited(ip) {
  const windowStart = Date.now() - 60 * 60 * 1000;
  const recent = (attempts.get(ip) || []).filter((time) => time > windowStart);
  recent.push(Date.now());
  attempts.set(ip, recent);
  return recent.length > 5;
}

async function readBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 20_000) throw new Error("BODY_TOO_LARGE");
  }
  return JSON.parse(body);
}

async function verifyRecaptcha(token, ip) {
  const parameters = new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY, response: token });
  if (ip !== "unknown") parameters.set("remoteip", ip);
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: parameters,
    signal: AbortSignal.timeout(8_000),
  });
  const result = await response.json();
  return result.success === true && ["effectx.com.au", "www.effectx.com.au"].includes(result.hostname);
}

async function sendEmail({ name, email, business, phone, subject, message }) {
  const rows = [["Name", name], ["Email", email], ["Business", business || "Not supplied"], ["Phone", phone || "Not supplied"], ["Topic", subject]];
  const htmlRows = rows.map(([label, value]) => `<tr><th align="left" style="padding:6px 14px 6px 0">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`).join("");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `EffectX enquiry: ${subject}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;color:#102a36"><h2>New EffectX website enquiry</h2><table>${htmlRows}</table><h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(message)}</p></div>`,
      text: `${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nMessage:\n${message}`,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    console.error("Resend rejected contact email", response.status);
    throw new Error("EMAIL_FAILED");
  }
}

const server = http.createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/health") return json(response, 200, { ok: true });
  if (request.method !== "POST" || request.url !== "/contact") return json(response, 404, { message: "Not found." });

  const origin = clean(request.headers.origin, 200);
  if (!ALLOWED_ORIGINS.has(origin)) return json(response, 403, { message: "This submission origin is not allowed." });
  if (!String(request.headers["content-type"] || "").startsWith("application/json")) return json(response, 415, { message: "The form format is not supported." });

  const ip = clientIp(request);
  if (rateLimited(ip)) return json(response, 429, { message: "Too many messages have been sent. Please try again later." });

  try {
    const input = await readBody(request);
    const name = clean(input.name, 100);
    const email = clean(input.email, 254).toLowerCase();
    const business = clean(input.business, 120);
    const phone = clean(input.phone, 40);
    const subject = clean(input.subject, 80);
    const message = clean(input.message, 5000);
    const recaptchaToken = clean(input.recaptchaToken, 4096);

    if (clean(input.website, 200)) return json(response, 200, { ok: true });
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !subject || message.length < 20) return json(response, 400, { message: "Please complete all required fields." });
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken, ip))) return json(response, 400, { message: "The reCAPTCHA check failed. Please try again." });

    await sendEmail({ name, email, business, phone, subject, message });
    console.info("Contact enquiry delivered", new Date().toISOString());
    return json(response, 200, { ok: true, message: "Your message has been sent." });
  } catch (error) {
    if (error instanceof SyntaxError) return json(response, 400, { message: "The form data was invalid." });
    if (error instanceof Error && error.message === "BODY_TOO_LARGE") return json(response, 413, { message: "The message was too large." });
    console.error("Contact submission failed", error instanceof Error ? error.message : "unknown error");
    return json(response, 502, { message: "Your message could not be sent. Please try again shortly." });
  }
});

server.listen(PORT, "127.0.0.1", () => console.info(`EffectX contact service listening on 127.0.0.1:${PORT}`));
