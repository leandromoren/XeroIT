"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar"
import DesarrolloDeSoftwareVista from "@/views/servicios/DesarrolloDeSoftwareVista"
import { ChakraProvider } from "@chakra-ui/react"

export default function DesarrolloDeSoftwarePage(){
    return (
        <>
            <ChakraProvider>
                <Navbar />
                <DesarrolloDeSoftwareVista />
                <Footer />
            </ChakraProvider>
        </>
    )
}