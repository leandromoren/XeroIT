"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  useColorModeValue,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { TTexts } from "@/utils/textConstants";

export default function Contact() {
  const verde = useColorModeValue("#03E100", "#03E100");
  const negro = useColorModeValue("#0A0A0A", "#FAFAFA");
  const blanco = useColorModeValue("#EDEDED", "#0A0A0A");
  const gris = useColorModeValue("#1F1F1F", "#1F1F1F");
  
  return (
    <>
      <Box bg={negro} w="auto" minH="screen">
        <Flex
          justify="around"
          align="center"
          mx={[5, 10, 20]}
          direction={["column", "column", "row"]}
        >
          <Box w={["full", "full", "1/2"]} p={[20, 30, 40]} my={[10, 0, 0]}>
            <Heading size={["3xl", "4xl"]} fontWeight="semibold" color={verde}>
             {TTexts.titleContactView}
            </Heading>
            <Text
              color={useColorModeValue("gray.300", "gray.500")}
              fontWeight="semibold"
              fontSize="sm"
              my={5}
            >
              {TTexts.textExplication1}
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize="md"
              mb={8}
            >
              {TTexts.textExplication2}
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize="md"
              mb={8}
            >
              {TTexts.textExplication3}
            </Text>
          </Box>
          {/* Contact form */}
          <Box
            bg={blanco}
            p={[6, 8, 12]}
            boxShadow={"3x2"}
            w={["full", "full", "1/2"]}
          >
            <Stack spacing={4}>
              <form >
                <Flex
                  justify="space-between"
                  mb={5}
                  direction={["column", "column", "row"]}
                >
                  <Input
                    type="text"
                    name="nombre"
                    id="nombre"
                    focusBorderColor={negro}
                    placeholder="Nombre"
                    errorBorderColor="crimson"
                    mr={[0, 0, 5]}
                    mb={[5, 5, 0]}
                    isRequired
                  />
                  <Input
                    type="text"
                    name="apellido"
                    id="apellido"
                    focusBorderColor={negro}
                    color={negro}
                    colorScheme={negro}
                    placeholder="Apellido"
                    errorBorderColor="crimson"
                    isRequired
                  />
                </Flex>
                <Input
                  type="email"
                  name="email"
                  focusBorderColor={negro}
                  mb={5}
                  placeholder="Email"
                  errorBorderColor="crimson"
                  isRequired
                />
                <Input
                  type="text"
                  name="asunto"
                  focusBorderColor={negro}
                  mb={5}
                  placeholder="Asunto"
                  errorBorderColor="crimson"
                  isRequired
                />
                <InputGroup>
                  <InputLeftAddon>+54</InputLeftAddon>
                  <Input
                    type="tel"
                    name="tel"
                    errorBorderColor="crimson"
                    focusBorderColor={negro}
                    placeholder="Numero de telefono"
                  />
                </InputGroup>
                <br />
                <Textarea
                  name="mensaje"
                  mb={5}
                  placeholder="Escribe tu mensaje"
                  focusBorderColor={negro}
                  errorBorderColor="crimson"
                  rows={3}
                  isRequired
                />
                <Button
                  type="submit"
                  bg={gris}
                  color={blanco}
                  w="full"
                  _hover={{ bg: verde, color: negro }}
                >
                  {TTexts.textoButtonSubmit}
                </Button>
              </form>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}