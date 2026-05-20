import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realistic Reverse Goal Map",
  description: "Reverse goal map with current-state comparisons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
