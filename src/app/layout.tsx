import type { Metadata } from "next";
import { ibmFont } from "../libs/font";
import "./globals.css";
import AntdStyledComponentsRegistry from "@/components/AntdStyledComponentsRegistry";

export const metadata: Metadata = {
  title: "TechCamp #2 | 2024",
  description: "Tech Camp #2 Website",
  icons: "/assets/logo/KUTechBlack.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmFont.className + " overscroll-none"}>
        <AntdStyledComponentsRegistry>
          {children}
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
