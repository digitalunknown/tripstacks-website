import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import "./globals.css";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
