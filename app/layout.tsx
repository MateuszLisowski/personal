import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mateusz Lisowski - Psychoterapeuta, Psycholog, Frontend Developer, Wolontariusz",
  description:
    "Strona wizytówka psychoterapeuty Mateusza Lisowskiego. Oferuję konsultacje indywidualne i warsztaty rozwojowe online. Zapraszam do kontaktu!",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="getresponse"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(m,o,n,t,e,r,_){m['__GetResponseAnalyticsObject']=e;m[e]=m[e]||function(){(m[e].q=m[e].q||[]).push(arguments)};r=o.createElement(n);_ = o.getElementsByTagName(n)[0];r.async=1;r.src=t;r.setAttribute('crossorigin','use-credentials');_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://an.gr-wcon.com/script/1255ad3d-46d3-4d82-8d63-34387f4a8b30/ga.js','GrTracking');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}

        <nav className={styles.nav}>
          <Link href="/" className={styles.brand}>
            Mateusz Lisowski
          </Link>

          <input
            type="checkbox"
            id="menu-toggle"
            className={styles.menuToggle}
          />
          <label htmlFor="menu-toggle" className={styles.hamburger}>
            ☰
          </label>

          <div>
            <label htmlFor="menu-toggle" className={styles.closeBtn}>
              ✕
            </label>
            <Link href="/o-mnie" className={styles.link}>
              O mnie
            </Link>
            <Link href="/oferta" className={styles.link}>
              Oferta
            </Link>
            <Link href="/blog" className={styles.link}>
              Blog
            </Link>
            <Link href="/kontakt" className={styles.link}>
              Kontakt
            </Link>
          </div>
        </nav>

        <div className={styles.socialLinks}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.8a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zM12 9a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24">
              <path d="M13 22v-8h3l1-4h-4V7c0-1.2.3-2 2-2h2V1.5C16.5 1.2 15.2 1 14 1c-3 0-5 1.8-5 5v3H6v4h3v8h4z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path d="M6 9H2v12h4V9zM4 2a2 2 0 100 4 2 2 0 000-4zm6 7h4v2h.1c.6-1 2-2 4-2 4 0 5 2.5 5 5.8V21h-4v-5c0-1.2 0-2.8-2-2.8s-2.3 1.6-2.3 2.7V21h-4V9z" />
            </svg>
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19.6 6.7c-1.4-.1-2.7-.8-3.6-1.9-.5-.6-.9-1.4-1-2.2h-3v13.2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.3 0 .6.1.9.2V10c-.3 0-.6-.1-.9-.1-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5V9.5c1.1.8 2.4 1.3 3.8 1.4V6.7z" />
            </svg>
          </a>
        </div>

        <footer className="w-full mt-5 h-12 flex items-center justify-center border-t">
          Copyright © 2026 Mateusz Lisowski. Wszelkie prawa zastrzeżone.
        </footer>
      </body>
    </html>
  );
}
