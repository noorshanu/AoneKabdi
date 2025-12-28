import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives — Aone Kabadi (aonekabadi) | Recycling & Sustainability in Bokaro",
  description: "Explore Aone Kabadi (aonekabadi) initiatives in Bokaro, Jharkhand. We promote recycling awareness, eco-friendly scrap collection, and sustainable waste management practices.",
  alternates: {
    canonical: "https://www.aonekabadi.com/initiatives",
    languages: {
      en: "https://www.aonekabadi.com/initiatives",
      hi: "https://www.aonekabadi.com/initiatives",
      "x-default": "https://www.aonekabadi.com/initiatives",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Initiatives — Aone Kabadi (aonekabadi) | Sustainability & Recycling in Bokaro",
    description: "Learn how Aone Kabadi (aonekabadi) promotes recycling awareness, eco-friendly scrap collection, and sustainable waste management practices in Bokaro.",
    url: "https://www.aonekabadi.com/initiatives",
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
    title: "Initiatives — Aone Kabadi (aonekabadi) | Recycling & Sustainability in Bokaro",
    description: "Recycling awareness, eco-friendly scrap collection, and sustainable waste management by Aone Kabadi (aonekabadi) in Bokaro.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi",
  },
};

export default function InitiativesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

