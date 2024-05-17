'use client';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#EDEDED", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              color={"#03E100"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              fontFamily={'"Heebo", sans-serif'}
              cursor={"pointer"}
              id="inicio"
            >
              QAVALA
            </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            href="/signup"
            bg={"#0A0A0A"}
            _hover={{
              bg: "#03E100",
            }}
          >
            Cont{"\u00E1"}ctanos
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("#0A0A0A", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={"bold"}
                fontFamily={'"Heebo", sans-serif'}
                color={linkColor}
                borderBottom="2px solid #EDEDED"
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  borderBottom: "2px solid #03E100",
                  transition: "all 0.3s ease 0s",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("green.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box backdropBlur={"10px"} backdropFilter={"blur(10px)"}>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#03E100" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#03E100"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={"bold"}
          color={useColorModeValue("Black.600", "gray.200")}
          fontFamily={'"Heebo", sans-serif'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          backdropBlur={"blur"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link 
                key={child.label} 
                py={2} 
                href={child.href} 
                fontFamily={'"Heebo", sans-serif'} 
                color={"gray.600"}
                fontSize={"sm"}
                >
                - {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Servicios",
    children: [
      {
        label: "Servicios de QA",
        subLabel: "Mejora de la experiencia del cliente",
        href: "#",
      },
      {
        label: "Servicios de Reclutamiento",
        subLabel: "Te ofrecemos el mejor talento",
        href: "#",
      },
    ],
  },
  {
    label: "Nosotros",
    children: [
      {
        label: "Nuestro equipo",
        subLabel: "Conoce a quienes hacen posible este proyecto",
        href: "#",
      },
      {
        label: "Nuestra historia",
        subLabel: "Un poco de nuestra experiencia",
        href: "#",
      },
      {
        label: "Nuestros valores",
        subLabel: "Nuestra misi\u00F3n y visi\u00F3n",
        href: "#",
      },
    ],
  },
  {
    label: "Clientes",
    href: "#",
  },
  {
    label: "Publicaciones",
    children: [
      {
        label: "Historia de clientes",
        subLabel: "Nuestros art\u00EDculos",
        href: "#",
      },
      {
        label: "Caso de est\u00E1ndar",
      },
    ],
  },
  {
    label: "Empleo",
    href: "#",
  },
];
