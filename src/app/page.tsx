"use client";
import { ChakraProvider } from "@chakra-ui/react";
import HomeView from "@/app/inicio/page";

export default function Home() {
  return (
    <html lang="es">
      <body style={{ backgroundColor: "#fff" }}>
        <ChakraProvider>
          <div>
            <HomeView />
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
