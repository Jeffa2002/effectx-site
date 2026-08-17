"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const RECAPTCHA_SITE_KEY = "6LdDXostAAAAACZVIAg0yJ1GHRcRV7V_pcmjdXZr";

declare global {
  interface Window {
    grecaptcha?: { getResponse: () => string; reset: () => void };
  }
}

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "sending" | "success" | "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const recaptchaToken = window.grecaptcha?.getResponse() ?? "";

    if (!recaptchaToken) {
      setStatus({ type: "error", message: "Please complete the reCAPTCHA check." });
      return;
    }

    const formData = new FormData(form);
    setStatus({ type: "sending", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          business: formData.get("business"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
          recaptchaToken,
        }),
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your message could not be sent.");

      form.reset();
      window.grecaptcha?.reset();
      setStatus({ type: "success", message: "Thanks—your message has been sent. We’ll be in touch soon." });
    } catch (error) {
      window.grecaptcha?.reset();
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Your message could not be sent. Please try again.",
      });
    }
  }

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <form className="contact-form" onSubmit={submitForm}>
        <div className="contact-form-row">
          <label>Name<input name="name" autoComplete="name" maxLength={100} required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        </div>
        <div className="contact-form-row">
          <label>Business <span>(optional)</span><input name="business" autoComplete="organization" maxLength={120} /></label>
          <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        </div>
        <label>
          What can we help with?
          <select name="subject" defaultValue="" required>
            <option value="" disabled>Choose a topic</option>
            <option>Custom software</option>
            <option>Website</option>
            <option>Integration or automation</option>
            <option>Dashboard or reporting</option>
            <option>Technology support</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows={7} minLength={20} maxLength={5000} placeholder="Tell us about the problem, what you want to achieve and any important timing." required />
        </label>
        <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} />
        <button className="primary-button" type="submit" disabled={status.type === "sending"}>
          {status.type === "sending" ? "Sending…" : "Send message"}
        </button>
        {status.type !== "idle" && (
          <p className={`contact-form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>
        )}
      </form>
    </>
  );
}
