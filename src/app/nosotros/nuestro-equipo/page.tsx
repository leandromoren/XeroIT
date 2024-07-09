"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import NuestroEquipoVista from "@/views/NuestroEquipoVista";
import { ChakraProvider } from "@chakra-ui/react";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";

export default function NuestroEquipoPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
            }}
          >
            <Spin size="large" />
          </div>
        </>
      ) : (
        <ChakraProvider>
          <Navbar />
          <NuestroEquipoVista />
          <Footer />
        </ChakraProvider>
      )}
    </>
  );
}
