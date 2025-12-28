import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Aone Kabadi (aonekabadi) — Scrap Dealer in Bokaro, Jharkhand",
  description: "Aone Kabadi (aonekabadi) is a trusted scrap dealer in Bokaro, Jharkhand. We offer doorstep scrap pickup for iron, plastic, paper, and e-waste at fair prices. Call now for fast service!",
  alternates: {
    canonical: "https://www.aonekabadi.com/",
    languages: {
      en: "https://www.aonekabadi.com/",
      hi: "https://www.aonekabadi.com/",
      "x-default": "https://www.aonekabadi.com/",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Aone Kabadi (aonekabadi) — Scrap Dealer in Bokaro, Jharkhand",
    description: "Aone Kabadi (aonekabadi) is a trusted scrap dealer in Bokaro, Jharkhand. We offer doorstep scrap pickup for iron, plastic, paper, and e-waste at fair prices.",
    url: "https://www.aonekabadi.com/",
    images: [
      {
        url: "https://www.aonekabadi.com/assets/og-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aone Kabadi (aonekabadi) — Scrap Dealer in Bokaro",
    description: "Aone Kabadi (aonekabadi) is a trusted scrap dealer in Bokaro, Jharkhand. Doorstep pickup for iron, plastic, paper and e-waste at fair prices.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/the_kabadi_king",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
