import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "poietai.ai — Your Team of Doers",
    template: "%s | poietai.ai",
  },
  description:
    "A virtual engineering organization powered by AI agents. Makers direct. Doers ship. Build software with a team of AI specialists that feels like a real company.",
  metadataBase: new URL("https://poietai.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://poietai.ai",
    siteName: "poietai.ai",
    title: "poietai.ai — Your Team of Doers",
    description:
      "A virtual engineering organization powered by AI agents. Makers direct. Doers ship.",
  },
  twitter: {
    card: "summary_large_image",
    title: "poietai.ai — Your Team of Doers",
    description:
      "A virtual engineering organization powered by AI agents. Makers direct. Doers ship.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
