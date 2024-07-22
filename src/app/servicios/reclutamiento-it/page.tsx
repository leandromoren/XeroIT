"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ReclutamientoITVista from "@/views/servicios/ReclutamientoItVista";
import { ChakraProvider } from "@chakra-ui/react";

export default function ReclutamientoItPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <ReclutamientoITVista />
        <Footer />
      </ChakraProvider>
    </>
  );
}
