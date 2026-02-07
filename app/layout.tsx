import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Finnovation Medical Billing | Offshore RCM Services",
  description: "Trusted medical billing outsourcing for US healthcare providers. HIPAA compliant RCM solutions to boost revenue and reduce denials.",
  openGraph: {
    title: "Grace Finnovation Medical Billing | Offshore RCM Services",
    description: "Trusted medical billing outsourcing for US healthcare providers. HIPAA compliant RCM solutions to boost revenue and reduce denials.",
    url: "https://gracefinnovation.com",
    siteName: "Grace Finnovation",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Grace Finnovation Medical Billing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
