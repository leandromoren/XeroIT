'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar"
import Contact from "@/views/ContactVista"
import { ChakraProvider } from "@chakra-ui/react";
export default function ContactPage() {
    return (
        <>
        <ChakraProvider>
            <Navbar />
            <Contact />
            <Footer />
        </ChakraProvider>
        </>
    )
}