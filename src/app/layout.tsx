import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const jetbrains = localFont({src: "fonts/khInterference.woff"})

export const metadata: Metadata = {
  title: "Hunter Simmons",
  description: "Technologist and creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
