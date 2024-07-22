"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"
import SoftwareTestingVista from "@/views/servicios/SoftwareTestingVista"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export default function SoftwareTestingPage(){
    return (
        <>
            <ChakraProvider>
                <Navbar />
                <SoftwareTestingVista />
                <Footer />
            </ChakraProvider>
        </>
    )
}