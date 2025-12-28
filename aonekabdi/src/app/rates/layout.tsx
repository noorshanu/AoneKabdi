import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Rates — Aone Kabadi (aonekabadi) | Bokaro",
  description: "Check today's scrap rates in Bokaro with Aone Kabadi (aonekabadi). We offer fair prices for iron, steel, plastic, paper, and electronic waste with doorstep pickup service.",
  alternates: {
    canonical: "https://www.aonekabadi.com/rates",
    languages: {
      en: "https://www.aonekabadi.com/rates",
      hi: "https://www.aonekabadi.com/rates",
      "x-default": "https://www.aonekabadi.com/rates",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Scrap Rates — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Check today's scrap rates in Bokaro. Fair prices for iron, steel, plastic, paper, and e-waste with doorstep pickup.",
    url: "https://www.aonekabadi.com/rates",
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
    title: "Scrap Rates — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Check today's scrap rates in Bokaro. Fair prices for iron, steel, plastic, paper, and e-waste with doorstep pickup.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi/",
  },
};

export default function RatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

