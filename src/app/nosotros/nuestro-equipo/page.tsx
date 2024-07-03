"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import NuestroEquipoVista from "@/views/NuestroEquipoVista";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function NuestroEquipoPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <NuestroEquipoVista />
        <Footer />
      </ChakraProvider>
    </>
  );
}
