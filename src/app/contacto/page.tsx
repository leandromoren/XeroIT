"use client";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { LoadingOutlined } from "@ant-design/icons";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Space, Spin } from "antd";

const Footer = lazy(() => import("@/components/Footer"));
const Navbar = lazy(() => import("@/components/NavBar"));
const ContactVista = lazy(() => import("@/views/ContactVista"));

export default function ContactPage() {
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
              <ContactVista />
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </ChakraProvider>
      )}
    </>
  );
}
