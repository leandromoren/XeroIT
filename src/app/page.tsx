"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "./head";
import Navbar from "@/components/NavBar";
import HomeView from "@/app/inicio/page";

export default function Home() {
  return (
    <html lang="en">
      <Head />
      <body style={{ backgroundColor: "#EDEDED" }}>
        <ChakraProvider>
          <div>
            <HomeView />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
