"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "./head";
import Navbar from "@/components/NavBar";
import HomeView from "@/views/HomeView";

export default function Home() {
  return (
    <html lang="en">
      <Head />
      <body style={{ backgroundColor: "#EDEDED" }}>
        <ChakraProvider>
          <div>
            <Navbar />
            <HomeView />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
