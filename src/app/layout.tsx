import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "poietai.ai — A SaaS Company at Your Fingertips",
    template: "%s | poietai.ai",
  },
  description:
    "A virtual engineering organization powered by AI agents. Build software with a team of AI specialists — designers, engineers, QA, and more — that feels like a real company.",
  metadataBase: new URL("https://poietai.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://poietai.ai",
    siteName: "poietai.ai",
    title: "poietai.ai — A SaaS Company at Your Fingertips",
    description:
      "A virtual engineering organization powered by AI agents. Build software with a team of AI specialists that feels like a real company.",
  },
  twitter: {
    card: "summary_large_image",
    title: "poietai.ai — A SaaS Company at Your Fingertips",
    description:
      "A virtual engineering organization powered by AI agents. Build software with a team of AI specialists that feels like a real company.",
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
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
