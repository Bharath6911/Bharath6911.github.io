import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharath's Portfolio - IT Professional & Developer",
  description: "Portfolio of Bharath Mummadi, IT professional building skills across Linux, Cloud, Infrastructure, DevOps, and Enterprise IT Support. Showcasing projects, skills, certificates, and achievements.",
  keywords: "bharath, portfolio, IT professional, developer, Linux, Cloud, DevOps, Next.js, Tailwind CSS, React, projects, certificates, achievements",
  authors: [
    {
      name: "Bharath Mummadi",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Bharath's Portfolio - IT Professional & Developer",
    description: "Portfolio of Bharath Mummadi, IT professional building skills across Linux, Cloud, Infrastructure, DevOps, and Enterprise IT Support.",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bharath Mummadi - Portfolio Preview",
      },
    ],
    siteName: "Bharath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharath's Portfolio - IT Professional & Developer",
    description: "Portfolio of Bharath Mummadi, IT professional building skills across Linux, Cloud, Infrastructure, DevOps, and Enterprise IT Support.",
    images: [
      "/hero-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}