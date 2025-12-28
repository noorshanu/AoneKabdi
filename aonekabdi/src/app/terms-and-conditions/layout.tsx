import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Aone Kabadi (aonekabadi) | Bokaro",
  description: "Terms and Conditions for Aone Kabadi (aonekabadi). Read our terms of service and conditions for using our scrap pickup and recycling services.",
  alternates: {
    canonical: "https://www.aonekabadi.com/terms-and-conditions",
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Terms & Conditions — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Terms and Conditions for Aone Kabadi (aonekabadi). Read our terms of service and conditions for using our scrap pickup and recycling services.",
    url: "https://www.aonekabadi.com/terms-and-conditions",
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
    title: "Terms & Conditions — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Terms and Conditions for Aone Kabadi (aonekabadi). Read our terms of service and conditions for using our scrap pickup and recycling services.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
};

export default function TermsAndConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

