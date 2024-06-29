"use client";
import Head from "./head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Head />
        {children}
      </body>
    </html>
  );
}
