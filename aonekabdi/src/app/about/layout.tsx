import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aone Kabadi (aonekabadi) | Scrap Dealer in Bokaro, Jharkhand",
  description: "Learn about Aone Kabadi (aonekabadi), a trusted scrap dealer in Bokaro, Jharkhand, offering eco-friendly recycling and fair scrap prices for iron, plastic, paper, and e-waste.",
  openGraph: {
    title: "About — Aone Kabadi (aonekabadi) | Scrap Dealer in Bokaro",
    description: "Learn about Aone Kabadi (aonekabadi), a trusted scrap dealer in Bokaro, Jharkhand, offering eco-friendly recycling and fair scrap prices.",
    url: "https://www.aonekabadi.com/about",
    siteName: "Aone Kabadi",
    images: [
      {
        url: "https://www.aonekabadi.com/assets/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Aone Kabadi About",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Aone Kabadi (aonekabadi) | Scrap Dealer in Bokaro",
    description: "Learn about Aone Kabadi (aonekabadi), a trusted scrap dealer in Bokaro, Jharkhand, offering eco-friendly recycling and fair scrap prices.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  alternates: {
    canonical: "https://www.aonekabadi.com/about",
    languages: {
      en: "https://www.aonekabadi.com/about",
      hi: "https://www.aonekabadi.com/about",
      "x-default": "https://www.aonekabadi.com/about",
    },
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

