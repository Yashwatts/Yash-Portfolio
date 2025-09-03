import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

// Playfair Display
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Source Sans Pro
const sourceSansPro = Source_Sans_Pro({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

// Signature font - Pacifico
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Watts - Portfolio",
  description: "B.Tech CSE Student | AI/ML Developer | Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${sourceSansPro.variable} ${pacifico.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics /> {/* Add Vercel Analytics component */}
        </ThemeProvider>
      </body>
    </html>
  );
}