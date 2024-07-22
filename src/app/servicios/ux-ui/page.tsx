"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import UxUiVista from "@/views/servicios/UxUiVista";
import { ChakraProvider } from "@chakra-ui/react";

export default function UxUiPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <UxUiVista />
        <Footer />
      </ChakraProvider>
    </>
  );
}
