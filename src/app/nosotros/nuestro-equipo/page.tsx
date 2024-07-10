"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import NuestroEquipoVista from "@/views/NuestroEquipoVista";
import { ChakraProvider } from "@chakra-ui/react";
import { Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

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
            <Space>
              <Spin
                indicator={<LoadingOutlined spin />}
                size="large"
              />
            </Space>
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
