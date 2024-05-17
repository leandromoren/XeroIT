"use client"
import { ChakraProvider } from "@chakra-ui/react"

import Head from "./head"
import Navbar from "@/components/NavBar"
import HomeView from "@/app/inicio/page";

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