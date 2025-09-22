"use client"

import { Manrope } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from "next/navigation";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Note: metadata export moved to separate metadata.ts file to support client component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin321')

  return (
    <html lang="en">
      <head>
        <title>CodeCraft - Software Development Agency</title>
        <meta name="description" content="Crafting Digital Solutions for Tomorrow's Challenges" />
      </head>
      <body
        className={`${manrope.variable} antialiased min-h-screen font-sans`}
        style={{ paddingTop: isAdminRoute ? '0' : '80px' }}
      >
        {!isAdminRoute && <Header />}
        <main>
          {children}
        </main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
