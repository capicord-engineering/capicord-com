import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Matches lendcord-ui's font choice exactly — only 400/500/700 are loaded there (600 is
// deliberately skipped so font-semibold's 500 override in globals.css resolves to a real
// loaded weight, not a synthesized faux-bold).
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2240",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://capicord.com"),
  title: {
    default: "Capicord — Building India's Credit Infrastructure",
    template: "%s | Capicord",
  },
  description:
    "Capicord Technologies Pvt Ltd is a technology holding company building regulated fintech brands for India. Lendcord, its flagship Lending Service Provider (LSP), connects borrowers, DSA agents, and NBFC partners through a transparent, RBI-compliant platform.",
  keywords: [
    "Capicord",
    "Capicord Technologies",
    "fintech holding company India",
    "Lendcord",
    "lending service provider",
    "LSP India",
    "digital lending infrastructure",
    "RBI compliant lending",
    "fintech India",
    "NBFC technology partner",
  ],
  authors: [{ name: "Capicord Technologies Pvt Ltd" }],
  creator: "Capicord Technologies Pvt Ltd",
  publisher: "Capicord Technologies Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://capicord.com",
  },
  openGraph: {
    type: "website",
    url: "https://capicord.com",
    siteName: "Capicord",
    title: "Capicord — Building India's Credit Infrastructure",
    description:
      "Capicord Technologies Pvt Ltd builds regulated fintech brands for India. Lendcord, its flagship LSP, connects borrowers, agents, and NBFC partners through a transparent, RBI-compliant platform.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@capi_cord",
    creator: "@capi_cord",
    title: "Capicord — Building India's Credit Infrastructure",
    description:
      "Capicord Technologies Pvt Ltd builds regulated fintech brands for India, starting with Lendcord — its flagship Lending Service Provider.",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Capicord",
    legalName: "Capicord Technologies Pvt Ltd",
    url: "https://capicord.com",
    description:
      "Capicord Technologies Pvt Ltd is a technology holding company building regulated fintech brands for India — starting with Lendcord, its Lending Service Provider (LSP) connecting borrowers, DSA agents, and NBFC lending partners.",
    slogan: "Credit, Connected.",
    foundingDate: "2025",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    brand: {
      "@type": "Brand",
      name: "Lendcord",
      url: "https://lendcord.in",
      description: "Lendcord is Capicord's flagship Lending Service Provider (LSP), connecting borrowers, agents, and NBFC partners.",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "admin@capicord.com",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://twitter.com/capi_cord",
      "https://instagram.com/capi.cord",
    ],
  };

  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
              .replace(/</g, "\\u003c")
              .replace(/>/g, "\\u003e")
              .replace(/\//g, "\\u002f"),
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
