import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise — Aone Kabadi (aonekabadi) | Join Bokaro's Leading Scrap Dealer Network",
  description: "Partner with Aone Kabadi (aonekabadi) in Bokaro, Jharkhand. Become a franchise and join our trusted scrap collection and recycling network with high growth potential.",
  alternates: {
    canonical: "https://www.aonekabadi.com/franchise",
    languages: {
      en: "https://www.aonekabadi.com/franchise",
      hi: "https://www.aonekabadi.com/franchise",
      "x-default": "https://www.aonekabadi.com/franchise",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Franchise — Aone Kabadi (aonekabadi) | Join Bokaro's Leading Scrap Dealer Network",
    description: "Partner with Aone Kabadi (aonekabadi) in Bokaro, Jharkhand. Become a franchise and join our trusted scrap collection and recycling network.",
    url: "https://www.aonekabadi.com/franchise",
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
    title: "Franchise — Aone Kabadi (aonekabadi) | Join Bokaro's Leading Scrap Dealer Network",
    description: "Partner with Aone Kabadi (aonekabadi) in Bokaro, Jharkhand. Become a franchise and join our trusted scrap collection and recycling network.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi",
  },
};

export default function FranchiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

