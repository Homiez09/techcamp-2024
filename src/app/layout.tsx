import type { Metadata } from "next";
import { ibmFont } from "../libs/font";
import "./globals.css";
import Footer from "@/components/Footer";
import AntdStyledComponentsRegistry from "@/components/AntdStyledComponentsRegistry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmFont.className}>
        <AntdStyledComponentsRegistry>
          {children}
        </AntdStyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
