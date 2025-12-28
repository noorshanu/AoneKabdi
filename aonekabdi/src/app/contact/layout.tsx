import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aone Kabadi (aonekabadi) | Scrap Dealer in Bokaro",
  description: "Contact Aone Kabadi (aonekabadi), your trusted scrap dealer in Bokaro, Jharkhand. Call us for doorstep scrap pickup and fair scrap rates.",
  robots: "index,follow",
  alternates: {
    canonical: "https://www.aonekabadi.com/contact",
    languages: {
      en: "https://www.aonekabadi.com/contact",
      hi: "https://www.aonekabadi.com/contact",
      "x-default": "https://www.aonekabadi.com/contact",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Contact — Aone Kabadi (aonekabadi) | Scrap Dealer in Bokaro",
    description: "Contact Aone Kabadi (aonekabadi), your trusted scrap dealer in Bokaro, Jharkhand. Call us for doorstep scrap pickup and fair scrap rates.",
    url: "https://www.aonekabadi.com/contact",
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
    title: "Contact — Aone Kabadi (aonekabadi) | Scrap Dealer in Bokaro",
    description: "Contact Aone Kabadi (aonekabadi), your trusted scrap dealer in Bokaro, Jharkhand. Call us for doorstep scrap pickup.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

