import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Adjust path as necessary

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Web Developer Trial",
  description: "A trial project for web developers",
};

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${openSans.variable}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
