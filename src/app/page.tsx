"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "./head";
import HomeView from "@/app/inicio/page";
import ClientTestimonialJS from "@/scripts/clientTestimonial.module";

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
