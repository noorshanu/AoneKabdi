import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Aone Kabadi (aonekabadi) | Bokaro",
  description: "Privacy Policy for Aone Kabadi (aonekabadi). Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.aonekabadi.com/privacy-policy",
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi",
    title: "Privacy Policy — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Privacy Policy for Aone Kabadi (aonekabadi). Learn how we collect, use, and protect your personal information.",
    url: "https://www.aonekabadi.com/privacy-policy",
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
    title: "Privacy Policy — Aone Kabadi (aonekabadi) | Bokaro",
    description: "Privacy Policy for Aone Kabadi (aonekabadi). Learn how we collect, use, and protect your personal information.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

