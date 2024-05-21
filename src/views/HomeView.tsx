"use client";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import Space from "@/components/Space";
import ClientSlide from "@/components/ClientSlide";
import styles from "@/styles/HomeView.module.css";

export default function HomeView() {
  const verde = useColorModeValue("#03E100", "#03E100");
  const negro = useColorModeValue("#0A0A0A", "#FAFAFA");
  const blanco = useColorModeValue("#f8f9fa", "#0A0A0A");
  const videoCloudinary = "https://res.cloudinary.com/dq0japns7/video/upload/v1715927295/office1_jxbjfr.mp4";
  return (
    <>
      <Container maxW={"7x1"}  position={"relative"} overflow={"hidden"}>
        <div className={styles.videoBackground}>
          <video autoPlay loop muted playsInline>
            <source src={videoCloudinary} type="video/mp4" />
          </video>
        </div>
         <div
            className="videoOverlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(3, 225, 0, 0.2)" , // Color y opacidad del overlay
              zIndex: 0,
            }}
          >
        </div>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1.5} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              paddingLeft={"10%"}
            >
              <Text
                as={"span"}
                position={"relative"}
                color={blanco}
                fontSize={"6xl"}
                fontFamily={'"Segoe UI", sans-serif'}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: verde,
                  zIndex: -1,
                }}
              >
                Descubriendo defectos,
              </Text>
              <br />
              <Text
                as={"span"}
                color={blanco}
                fontSize={"6xl"}
                fontFamily={'"Segoe UI", sans-serif'}
                position={"relative"}
              >
                construyendo confianza
              </Text>
            </Heading>
            <Text
              position={"relative"}
              color={blanco}
              fontFamily={'"Segoe UI", sans-serif'}
              paddingLeft={"10%"}
              maxW={"4xl"}
              textAlign={"justify"}
            >
              Ayudamos a tu empresa a seguir siendo competitiva ofreciéndote
              servicios tecnológicos flexibles, seguros y fiables, adaptados a
              tus necesidades específicas, que contribuyen a impulsar el
              crecimiento, aumentar la eficacia, reducir los costes y lograr un
              éxito medible.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
              paddingLeft={"10%"}
            >
              <Button
                size={"lg"}
                borderRadius={"none"}
                fontWeight={"bold"}
                fontFamily={'"Segoe UI", sans-serif'}
                bg={"#03E100"}
                _hover={{ color: blanco }}
              >
                ¿Por qué asociarse con Getronics?
              </Button>
            </Stack>
          </Stack>
          
        </Stack>
        <Space />
      </Container>
      <section id="clientesId">
        <ClientSlide />
      </section>
    </>
  );
}
