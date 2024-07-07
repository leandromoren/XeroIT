"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ServicesVista from "@/views/ServicesVista";
import { ChakraProvider } from "@chakra-ui/react";

export default function ServiciosView() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <ServicesVista />
        <Footer />
      </ChakraProvider>
    </>
  );
}
