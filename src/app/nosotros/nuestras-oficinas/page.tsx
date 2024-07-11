"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"
import NuestrasOficinasVista from "@/views/NuestrasOficinasVista"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"


export default function NuestrasOficiasPage() {
    return (
        <>
            <ChakraProvider>
                <Navbar />
                <NuestrasOficinasVista />
                <Footer />
            </ChakraProvider>
        </>
    )
}