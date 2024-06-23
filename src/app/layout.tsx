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
          src={`https://www.google.com/recaptcha/api.js?onload=loadCaptcha&render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        ></script>
        <Head />
        {children}
      </body>
    </html>
  );
}
