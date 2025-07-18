import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelbrooke.com"),
  title: "Samuel Brooke | Freelance Web Designer & Developer",
  description:
    "The profile page for Samuel Brooke, a freelance web designer and developer.",
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/web-dev-background.svg"
          type="image/svg+xml"
        />
      </head>
      <body className="bg-black-sabath antialiased">{children}</body>
    </html>
  );
}
