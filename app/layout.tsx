import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anand Ambhore - Career Pathways Guide",
  description: "Comprehensive career guidance for B.Tech AI/ML graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
