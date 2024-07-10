"use client"
import Navbar from "@/components/NavBar";
import HomeView from "@/views/HomeVista";
import { ChakraProvider } from "@chakra-ui/react";
import { Space, Spin } from "antd";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function HomePage() {
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
        <>
          <ChakraProvider>
            <Navbar />
            <HomeView />
          </ChakraProvider>
        </>
      )}
    </>
  );
}
