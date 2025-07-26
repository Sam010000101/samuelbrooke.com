import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelbrooke.com"),
  title: "Samuel Brooke | Freelance Web Engineer",
  description: "The profile page for Samuel Brooke, a freelance web engineer.",
  alternates: {
    canonical: "https://samuelbrooke.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cyberpunk" className="h-full max-w-screen">
      <body className="bg-black-sabath antialiased">{children}</body>
    </html>
  );
}
