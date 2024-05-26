"use client";
import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
//import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import Space from "@/components/Space";
import ClientSlide from "@/components/ClientSlide";
import styles from "@/styles/HomeView.module.css";
import {TTexts} from "../utils/textConstants";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";

export default function HomeView() {
  const verde = useColorModeValue("#03E100", "#03E100");
  const negro = useColorModeValue("#0A0A0A", "#FAFAFA");
  const blanco = useColorModeValue("#f8f9fa", "#0A0A0A");
  const videoCloudinary = "https://res.cloudinary.com/dq0japns7/video/upload/v1715927295/office1_jxbjfr.mp4";
  return (
    <>
      <Container maxW={"7x1"}  position={"relative"} overflow={"hidden"}>
        <Box className={styles.videoBackground}>
          <video autoPlay loop muted playsInline>
            <source src={videoCloudinary} type="video/mp4" />
          </video>
        </Box>
         <div className={styles.videoOverlay}></div>
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
                fontFamily={'"Ubuntu", sans-serif'}
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
                {TTexts.mainTitleTop}
              </Text>
              <br />
              <Text
                as={"span"}
                color={blanco}
                fontSize={"6xl"}
                fontFamily={'"Ubuntu", sans-serif'}
                position={"relative"}
              >
                {TTexts.mainTitleBop}
              </Text>
            </Heading>
            <Text
              position={"relative"}
              color={blanco}
              fontSize={"lg"}
              fontWeight={500}
              fontFamily={'"Ubuntu", sans-serif'}
              paddingLeft={"10%"}
              maxW={"4xl"}
              textAlign={"justify"}
            >
              {TTexts.descripcionHomeView}
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
                fontFamily={'"Ubuntu", sans-serif'}
                bg={"#03E100"}
                _hover={{ color: blanco }}
              >
                {TTexts.buttonHomeView}
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Space />
      </Container>
      <section id="clientesId">
        <ClientSlide />
      </section>
      <section id="serviceId">
        <Services />
      </section>
      <section>
      <Testimonials />
      </section>
    </>
  );
}
