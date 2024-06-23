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
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        ></script>
        <Head />
        {children}
      </body>
    </html>
  );
}
