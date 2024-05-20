"use client"
import Head from "./head"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body style={{ backgroundColor: "#EDEDED" }}>
            {children}
      </body>
    </html>
  );
}