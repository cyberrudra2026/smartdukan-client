import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMART DUKAN | Premium Smartphone Store",
  description: "Experience the future of smartphone shopping with SMART DUKAN. 3D animated, fast, and secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
