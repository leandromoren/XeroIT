import Navbar from "@/components/NavBar";
import HomeView from "@/views/HomeVista";
import { ChakraProvider } from "@chakra-ui/react";

export default function HomePage() {
  //TODO: Falta agregar el footer
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <HomeView />
      </ChakraProvider>
    </>
  );
}
