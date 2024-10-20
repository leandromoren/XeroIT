"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PoliticasDePrivacidadVista from "@/views/PoliticasDePrivacidadVista";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <PoliticasDePrivacidadVista />
        <Footer />
      </ChakraProvider>
    </>
  );
}
