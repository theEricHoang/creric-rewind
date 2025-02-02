import type { Metadata } from "next";
import { Gamja_Flower } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginButton from "@/app/components/ui/LoginButton";

const gamjaFlower = Gamja_Flower({ weight: "400" });

export const metadata: Metadata = {
  title: "creric rewind",
  description: "rewinding creric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gamjaFlower.className} antialiased bg-rose-300`}
      >
        {/* navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md p-2 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link className="font-bold text-5xl" href="/">
              creric rewind ♥
            </Link>
            
            <LoginButton />
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
