import Footer from "@/components/footer/page";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import { Inter } from "next/font/google";

const inter = Inter({ weight: '300' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
