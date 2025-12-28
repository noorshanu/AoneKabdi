import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Aone Kabadi (aonekabadi) | Scrap Collection in Bokaro",
  description: "Doorstep scrap collection services in Bokaro by Aone Kabadi (aonekabadi). We deal in iron scrap, plastic scrap, paper, and e-waste recycling with fair prices.",
  alternates: {
    canonical: "https://www.aonekabadi.com/services",
    languages: {
      en: "https://www.aonekabadi.com/services",
      hi: "https://www.aonekabadi.com/services",
      "x-default": "https://www.aonekabadi.com/services",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Services — Aone Kabadi (aonekabadi) | Scrap Collection in Bokaro",
    description: "Doorstep scrap collection in Bokaro. Aone Kabadi (aonekabadi) offers reliable recycling for iron, plastic, paper, and e-waste with fair prices.",
    url: "https://www.aonekabadi.com/services",
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
    title: "Services — Aone Kabadi (aonekabadi) | Scrap Collection in Bokaro",
    description: "Book doorstep scrap collection in Bokaro with Aone Kabadi (aonekabadi). Iron, plastic, paper & e-waste recycling with fair prices.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

