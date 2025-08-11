import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CodeCraft - Software Development Agency",
  description: "Crafting Digital Solutions for Tomorrow's Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased min-h-screen font-sans`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
