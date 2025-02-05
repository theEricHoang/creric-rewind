import type { Metadata } from "next";
import { Gamja_Flower } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/ui/NavBar";

const gamjaFlower = Gamja_Flower({ weight: "400", subsets: ["latin"], });

export const metadata: Metadata = {
  title: "creric rewind",
  description: "rewinding creric",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gamjaFlower.className} antialiased bg-rose-300`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
