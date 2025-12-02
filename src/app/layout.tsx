import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Clockwork Brazilian Jiu-Jitsu | Premier BJJ Academy NYC",
  description: "Elite Brazilian Jiu-Jitsu training in NYC. World-class instructors, beginner-friendly classes, and competitive training. Located in Manhattan at 650 Broadway.",
  keywords: [
    "brazilian jiu jitsu nyc",
    "bjj classes manhattan", 
    "martial arts new york",
    "jiu jitsu gym nyc",
    "bjj training manhattan",
    "clockwork bjj",
    "grappling classes nyc",
    "self defense nyc"
  ],
  authors: [{ name: "Clockwork Brazilian Jiu-Jitsu" }],
  creator: "Clockwork BJJ",
  publisher: "Clockwork Brazilian Jiu-Jitsu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Clockwork Brazilian Jiu-Jitsu | Elite BJJ Training NYC",
    description: "NYC's premier Brazilian Jiu-Jitsu academy offering world-class instruction for all levels. Located in Manhattan.",
    url: "https://www.clockworkbjj.com",
    siteName: "Clockwork Brazilian Jiu-Jitsu",
    images: [
      {
        url: "/images/clockwork-logo.png",
        width: 1200,
        height: 630,
        alt: "Clockwork BJJ Academy NYC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clockwork BJJ | Premier Brazilian Jiu-Jitsu NYC",
    description: "Elite BJJ training in Manhattan. World-class instructors, all skill levels welcome.",
    images: ["/images/clockwork-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "your-google-verification-code", // Replace with actual Google verification code
  },
  alternates: {
    canonical: "https://www.clockworkbjj.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bebas.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H32JL363QS"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H32JL363QS');
          `}
        </Script>

        {/* Zen Planner External Tracking */}
        <Script
          src="https://eng.zenplanner.com/js/external-tracking.js"
          data-tracking-id="tk_42bfc83760b5468da88a55c5733cca15"
          strategy="afterInteractive"
        />

        {/* Structured Data: Match existing live schema (three separate scripts) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": "https://www.clockworkbjj.com",
              "name": "Clockwork Jiu Jitsu",
              "description": "",
              "image": "https://www.clockworkbjj.com/images/clockwork-logo.png"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "legalName": "Clockwork BJJ",
              "address": "650 Broadway, 2nd Floor\nNew York City, NY 10012\nUSA",
              "email": "clockwork@clockworkbjj.com",
              "telephone": "212-675-0300",
              "sameAs": []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "address": "650 Broadway, 2nd Floor\nNew York City, NY 10012\nUSA",
              "image": "https://www.clockworkbjj.com/images/gym-building.jpg",
              "name": "Clockwork BJJ",
              "openingHours": "Mo 07:00-21:00, Tu 07:00-21:00, We 07:00-21:00, Th 07:00-21:00, Fr 07:00-21:00, Sa 11:00-15:00, Su 10:00-14:00"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
