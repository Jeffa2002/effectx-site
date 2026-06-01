import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { navLinks } from "./data";

export const metadata: Metadata = {
  title: {
    default: "EffectX | Custom Software & Websites",
    template: "%s | EffectX",
  },
  description:
    "EffectX is a Perth technology consulting business building custom software, websites and connected systems.",
  metadataBase: new URL("https://effectx.com.au"),
  openGraph: {
    title: "EffectX | Custom Software & Websites",
    description:
      "Custom software, websites, integrations and practical technology support from Perth, Western Australia.",
    url: "https://effectx.com.au",
    siteName: "EffectX",
    images: ["/images/effectx-logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="EffectX home">
            <Image
              src="/images/effectx-logo.png"
              alt="EffectX"
              width={900}
              height={300}
              priority
            />
          </Link>
          <nav aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link className="header-cta" href="/contact">
            Start a conversation
          </Link>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <Image
              className="footer-logo"
              src="/images/effectx-logo-transparent.png"
              alt="EffectX"
              width={432}
              height={383}
            />
            <p>
              Custom software, websites and practical technology support from
              Perth, Western Australia.
            </p>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:hello@effectx.com.au">hello@effectx.com.au</a>
            <a href="https://effectx.com.au">effectx.com.au</a>
            <span>Perth, Western Australia</span>
          </div>
          <div>
            <strong>Navigate</strong>
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
