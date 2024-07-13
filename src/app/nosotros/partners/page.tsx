"use client"
import ConstruccionView from "@/components/ConstruccionView";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

export default function PartnersPage(){
    return (
        <>
            <ChakraProvider>
                <Navbar />
                <ConstruccionView />
                <Footer />
            </ChakraProvider>
        </>
    )
}