import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alkhidmat Raazi Hospital Rawalpindi — Quality Healthcare for All",
  description:
    "Alkhidmat Raazi Hospital Rawalpindi is one of the best and affordable 250-bed hospitals providing 24/7 healthcare facilities with 130+ consultants across 17+ specialties. A project of Alkhidmat Foundation Pakistan.",
  keywords: [
    "Alkhidmat Raazi Hospital",
    "Rawalpindi Hospital",
    "Affordable Healthcare",
    "Alkhidmat Foundation",
    "Hospital Rawalpindi",
    "Best Hospital Rawalpindi",
  ],
  openGraph: {
    title: "Alkhidmat Raazi Hospital Rawalpindi",
    description:
      "One of the Best and Affordable Hospitals in Rawalpindi providing 24/7 healthcare facilities for over a decade.",
    type: "website",
    locale: "en_PK",
    url: "https://alkhidmatraazi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
