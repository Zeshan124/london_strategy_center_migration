import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo";

const metropolis = localFont({
  src: [
    { path: "../public/fonts/metropolis/Metropolis-Thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-metropolis",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "London Strategy Centre | Building Intelligent Organisations for an AI-Driven World",
    template: "%s | London Strategy Centre",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "London Strategy Centre",
    "AI capability transformation",
    "agentic AI",
    "cyber security advisory",
    "strategic advisory",
    "digital twin",
    "cybernetic organisation design",
    "AI strategy consulting",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "London Strategy Centre | Building Intelligent Organisations for an AI-Driven World",
    description: SITE.description,
    locale: SITE.locale,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "London Strategy Centre",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FontAwesome icons (used by video section) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L2TQZVBC96"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L2TQZVBC96');
      `}</Script>
      <body className={`${metropolis.variable} antialiased`} suppressHydrationWarning>
        {/* Structured data: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        {children}
      </body>
    </html>
  );
}
