"use client";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function FAQ() {
  const items = [
    { id: "a", title: "First Item", text: "Some value 1..." },
    { id: "b", title: "Second Item", text: "Some value 2..." },
    { id: "c", title: "Third Item", text: "Some value 3..." },
  ];

  return (
    <Accordion defaultIndex={[1]} allowMultiple>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.text}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
