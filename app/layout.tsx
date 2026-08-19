import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import "./globals.css";

const GA_ID = "G-2ZYZZ8MWGW";

export const metadata: Metadata = {
  metadataBase: new URL("https://tripstacks.app"),
  title: {
    default: `${SITE_NAME} - Trip Organizer App`,
    template: `${SITE_NAME} - %s`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} - Trip Organizer App`,
    description: SITE_DESCRIPTION,
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Trip Organizer App`,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
