"use client";
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
import NextLink from "next/link";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const rojo = useColorModeValue("#ED2939", "#03E100");
  const azul = useColorModeValue("#002654", "#FAFAFA");
  const blanco = useColorModeValue("#ffffff", "#0A0A0A");

  const fuenteLetraGeistMono: string = 'Geist Mono';

  return (
    <Box>
      <Flex
        bg={azul}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 20, lg: 32 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={azul}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            backgroundColor={blanco}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={azul} />
              ) : (
                <HamburgerIcon w={5} h={5} color={azul} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            color={rojo}
            fontSize={"2xl"}
            fontWeight={"bold"}
            fontFamily={fuenteLetraGeistMono}
            cursor={"pointer"}
            id="inicio"
          >
            <NextLink href="/">QAVALA</NextLink>
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
            fontFamily={fuenteLetraGeistMono}
            color={blanco}
            href="/contacto"
            bg={azul}
            border={"2px solid #ffffff"}
            _hover={{
              bg: "#ED2939",
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
  const azul = useColorModeValue("#002654", "white");
  const blanco = useColorModeValue("#ffffff", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={"sm"}
                fontWeight={"bold"}
                fontFamily={'"Heebo", sans-serif'}
                color={blanco}
                borderBottom="2px solid #002654"
                _hover={{
                  textDecoration: "none",
                  color: blanco,
                  borderBottom: "2px solid #fff",
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
                bg={azul}
                p={4}
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
  const azul = useColorModeValue("#002654", "#FAFAFA");
  const blanco = useColorModeValue("#ffffff", "#0A0A0A");
  const gris = useColorModeValue("#1F1F1F", "#1F1F1F");
  return (
    <Link
      bg={azul}
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: gris }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box backdropBlur={"10px"} backdropFilter={"blur(10px)"}>
          <Text
            transition={"all .3s ease"}
            color={blanco}
            _groupHover={{ color: blanco }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} color={blanco}>
            {subLabel}
          </Text>
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
          <Icon color={blanco} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const azul = useColorModeValue("#002654", "#FAFAFA");
  const blanco = useColorModeValue("#ffffff", "#0A0A0A");
  return (
    <Stack bg={azul} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        w={"full"}
        as={"a"}
        fontSize={"sm"}
        fontWeight={600}
        color={blanco}
        href="/contacto"
        bg={azul}
        border={"2px solid #1F1F1F"}
        _active={{
          bg: "#1F1F1F",
        }}
      >
        Cont{"\u00E1"}ctanos
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const blanco = useColorModeValue("#ffffff", "#0A0A0A");
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
          color={blanco}
          fontFamily={'"Heebo", sans-serif'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={blanco}
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
          borderColor={blanco}
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
                color={blanco}
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
  id?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Servicios",
    children: [
      {
        label: "Software testing",
        subLabel: "Mejora de la experiencia del cliente",
        href: "/servicios/software-testing",
      },
      {
        label: "Reclutamiento IT",
        subLabel: "Te ofrecemos el mejor talento",
        href: "/servicios/reclutamiento-it",
      },
      {
        label: "Gestion de proyectos",
        subLabel: "Tenemos los mejores Project managers",
        href: "/servicios/gestion-de-proyectos",
      },
      {
        label: "Diseño UX / UI",
        subLabel: "Te ofrecemos el mejor talento",
        href: "/servicios/ux-ui",
      },
      {
        label: "Desarrollo de software",
        subLabel: "Un gran equipo de profesionales de la programacion",
        href: "/servicios/desarrollo-software",
      },
    ],
  },
  {
    label: "Nosotros",
    children: [
      {
        label: "Nuestro equipo",
        subLabel: "Conoce a quienes hacen posible este proyecto",
        href: "/nosotros/nuestro-equipo",
      },
      {
        label: "Nuestra historia",
        subLabel: "Un poco de nuestra experiencia",
        href: "/nosotros/nuestra-historia",
      },
      {
        label: "Nuestros valores",
        subLabel: "Nuestra misi\u00F3n y visi\u00F3n",
        href: "/nosotros/nuestros-valores",
      },
      {
        label: "Nuestras oficinas",
        subLabel: "Oficinas de Qavala",
        href: "/nosotros/nuestras-oficinas",
      },
      {
        label: "Partners",
        href: "/nosotros/partners",
      },
    ],
  },
  {
    label: "Publicaciones",
    children: [
      {
        label: "Historia de clientes",
        subLabel: "Nuestros art\u00EDculos",
        href: "/publicaciones/historia-de-clientes",
      },
      {
        label: "Eventos",
        subLabel: "Enterate de los proximos eventos",
        href: "/publicaciones/eventos",
      },
    ],
  },
  {
    label: "Empleo",
    children: [
      {
        label: "Programa de practicas",
        href: "/empleo/programa-de-practicas",
      },
      {
        label: "Puestos vacantes",
        href: "/empleo/vacantes",
      },
      {
        label: "Trabaja con nosotros",
        href: "/empleo/trabaja-con-nosotros"
      },
      {
        label: "Sube tu CV",
        href: "/empleo/subir-curriculum"
      }
    ],
  },
];
