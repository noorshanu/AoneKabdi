import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Calculator — Aone Kabadi (aonekabadi) | Bokaro",
  description: "Use the Scrap Price Calculator by Aone Kabadi (aonekabadi) in Bokaro, Jharkhand. Instantly calculate scrap value with live rates and save results with screenshot function for easy reference.",
  alternates: {
    canonical: "https://www.aonekabadi.com/scrap-calculator",
    languages: {
      en: "https://www.aonekabadi.com/scrap-calculator",
      hi: "https://www.aonekabadi.com/scrap-calculator",
      "x-default": "https://www.aonekabadi.com/scrap-calculator",
    },
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Scrap Calculator — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Use the Scrap Price Calculator by Aone Kabadi (aonekabadi) in Bokaro, Jharkhand. Instantly calculate scrap value with live rates.",
    url: "https://www.aonekabadi.com/scrap-calculator",
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
    title: "Scrap Calculator — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Live scrap rates calculator for Bokaro. Aone Kabadi (aonekabadi) offers doorstep pickup & recycling services.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi",
  },
};

export default function ScrapCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}


