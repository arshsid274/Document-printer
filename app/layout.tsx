import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Document Printer",
  description: "Generate print-ready business documents with live preview."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
