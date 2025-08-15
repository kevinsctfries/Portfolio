import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kevin Fries",
  description: "Kevin Fries' Developer Portfolio",
};

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#010409" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
