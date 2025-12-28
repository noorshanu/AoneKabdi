import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Aone Kabadi    — Join Our Team in Bokaro",
  description: "Explore career opportunities at Aone Kabadi    in Bokaro, Jharkhand. Join our team to build a greener future with scrap collection, recycling, and waste management services.",
  alternates: {
    canonical: "https://www.aonekabadi.com/career",
  },
  openGraph: {
    locale: "en_IN",
    type: "website",
    siteName: "Aone Kabadi ",
    title: "Careers at Aone Kabadi  — Join Our Team in Bokaro",
    description: "Join Aone Kabadi    in Bokaro, Jharkhand. Career opportunities in scrap collection, recycling, and waste management services.",
    url: "https://www.aonekabadi.com/career",
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
    title: "Careers at Aone Kabadi  — Join Our Team in Bokaro",
    description: "Work with Aone Kabadi    in Bokaro, Jharkhand. Explore jobs in scrap collection and recycling.",
    images: ["https://www.aonekabadi.com/assets/og-home.jpg"],
  },
  other: {
    "me": "https://www.instagram.com/aonekabadi/",
  },
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}


