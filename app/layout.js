import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

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
          integrity="sha512-..." // optionally you can include integrity
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
        {children}
      </body>
    </html>
  );
}
