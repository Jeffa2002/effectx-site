import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { navLinks } from "./data";

export const metadata: Metadata = {
  title: {
    default: "EffectX | Technology Consulting & Bespoke Applications",
    template: "%s | EffectX",
  },
  description:
    "EffectX works with businesses to build bespoke applications, websites and technology systems that solve real operational problems.",
  metadataBase: new URL("https://effectx.com.au"),
  openGraph: {
    title: "EffectX | Technology Consulting & Bespoke Applications",
    description:
      "Bespoke applications, websites, integrations and technology problem solving for modern businesses.",
    url: "https://effectx.com.au",
    siteName: "EffectX",
    images: ["/images/effectx-logo.png"],
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
              width={450}
              height={99}
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
            <Image src="/images/effectx-logo.png" alt="EffectX" width={450} height={99} />
            <p>
              Bespoke software, websites and technology problem solving for
              businesses that need practical systems.
            </p>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:hello@effectx.com.au">hello@effectx.com.au</a>
            <a href="https://effectx.com.au">effectx.com.au</a>
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
