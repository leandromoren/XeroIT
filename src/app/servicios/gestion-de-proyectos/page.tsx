"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import GestionDeProyectosVista from "@/views/servicios/GestionDeProyectosVista";
import { ChakraProvider } from "@chakra-ui/react";

export default function GestionDeProyectosPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <GestionDeProyectosVista />
        <Footer />
      </ChakraProvider>
    </>
  );
}
