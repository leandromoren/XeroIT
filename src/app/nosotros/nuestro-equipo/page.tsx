"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Space, Spin } from "antd";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import ErrorBoundary from "@/components/ErrorBoundary";

const Footer = lazy(() => import("@/components/Footer"));
const Navbar = lazy(() => import("@/components/NavBar"));
const NuestroEquipoVista = lazy(() => import("@/views/NuestroEquipoVista"));

export default function NuestroEquipoPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Space>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </Space>
        </div>
      ) : (
        <ChakraProvider>
          <ErrorBoundary>
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <Space>
                    <Spin indicator={<LoadingOutlined spin />} size="large" />
                  </Space>
                </div>
              }
            >
              <Navbar />
              <NuestroEquipoVista />
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </ChakraProvider>
      )}
    </>
  );
}
