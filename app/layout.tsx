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
  title: "Medical Billing Services in USA | Grace Finnovation | Offshore RCM Experts",
  description: "Top-rated medical billing services in USA. Outsource your Revenue Cycle Management (RCM) to Grace Finnovation for cost-effective, HIPAA-compliant offshore solutions. Maximize revenue and reduce denials.",
  keywords: [
    "Medical Billing Services in USA",
    "Offshore RCM Experts",
    "Revenue Cycle Management Outsourcing",
    "Medical Coding Services",
    "HIPAA Compliant Billing Solutions",
    "Denial Management USA",
    "AR Follow-up Services",
    "Behavioral Health Billing",
    "Grace Finnovation",
    "Healthcare Outsourcing"
  ],
  openGraph: {
    title: "Medical Billing Services in USA | Grace Finnovation | Offshore RCM Experts",
    description: "Expert offshore RCM solutions for US healthcare providers. Reduce costs and optimize your revenue cycle with Grace Finnovation.",
    url: "https://gracefinnovation.com",
    siteName: "Grace Finnovation",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Grace Finnovation Medical Billing Services",
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
