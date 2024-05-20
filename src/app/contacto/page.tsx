'use client'
import Navbar from "@/components/NavBar"
import Contact from "@/views/ContactView"
import { ChakraProvider } from "@chakra-ui/react";
export default function ContactView() {
    //TODO: Falta agregar el footer
    return (
        <>
        <ChakraProvider>
            <Navbar />
            <Contact />
        </ChakraProvider>
        </>
    )
}