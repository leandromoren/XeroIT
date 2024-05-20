"use client";
import Timeline from "@/components/Timeline";
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
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function HomeView() {
  const verde = useColorModeValue("#03E100", "#03E100");
  const negro = useColorModeValue("#0A0A0A", "#FAFAFA");
  const blanco = useColorModeValue("#EDEDED", "#0A0A0A");
  const videoCloudinary = "https://res.cloudinary.com/dq0japns7/video/upload/v1715927295/office1_jxbjfr.mp4";
  return (
    <Container maxW={"7xl"}>
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
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              color={negro}
              fontSize={"5xl"}
              fontFamily={'"DM Mono", sans-serif'}
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
              color={verde}
              fontSize={"5xl"}
              fontFamily={'"DM Mono", sans-serif'}
              >
              construyendo confianza
            </Text>
          </Heading>
          <Text 
            color={"gray.500"}
            fontFamily={'"DM Mono", sans-serif'}
          >
            Ayudamos a tu empresa a seguir siendo competitiva ofreciéndote
            servicios tecnológicos flexibles, seguros y fiables, adaptados a tus
            necesidades específicas, que contribuyen a impulsar el crecimiento,
            aumentar la eficacia, reducir los costes y lograr un éxito medible.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              size={"lg"}
              borderRadius={"none"}
              fontWeight={"normal"}
              fontFamily={'"DM Mono", sans-serif'}
              bg={"#03E100"}
              _hover={{ color: blanco }}
            >
              ¿Por qué asociarse con Getronics?
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          h={"auto"}
        >
          <Box
            position={"relative"}
            height={"auto"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <CldVideoPlayer
              id="video-presentacion"
              width="1920"
              height="1080"
              src={videoCloudinary}
            />
          </Box>
        </Flex>
      </Stack>
      <section id="serviciosId">
        <Timeline />
      </section>
    </Container>
  );
}