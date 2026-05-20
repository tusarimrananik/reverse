import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reverse Goal Workspace",
  description: "A shadcn UI reverse-planning dashboard with current-state comparisons.",
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
