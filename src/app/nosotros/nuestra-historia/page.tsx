"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"
import NuestrHistoriaVista from "@/views/NuestraHistoriaVista"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export default function NuestraHistoriaPage() {
    return (
        <>
            <ChakraProvider>
                <Navbar />
                <NuestrHistoriaVista />
                <Footer />
            </ChakraProvider>
        </>
    )
}