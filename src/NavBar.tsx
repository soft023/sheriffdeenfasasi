import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Button,
  Container,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex="1000"
      bg="black/80"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="gray.900"
    >
      <Container maxW="6xl">
        <Flex h="70px" align="center" justify="space-between">
          {/* Logo / Brand */}
          <Link href="#home" _hover={{ textDecoration: "none" }} role="group">
            <HStack gap={3} align="center">
              {/* Geometric Icon Base */}
              <Flex
                position="relative"
                align="center"
                justify="center"
                bg="blue.600"
                w="38px"
                h="38px"
                borderRadius="xl"
                overflow="hidden"
                _groupHover={{ bg: "blue.500" }}
                transition="background 0.3s"
              >
                <Text
                  fontSize="sm"
                  fontWeight="black"
                  color="white"
                  letterSpacing="tight"
                >
                  FAS
                </Text>
                {/* Subtle "Light Sweep" effect */}
                <Box
                  position="absolute"
                  top="0"
                  left="-100%"
                  w="100%"
                  h="100%"
                  bg="white/20"
                  transform="skewX(-20deg)"
                  _groupHover={{ left: "100%" }}
                  transition="all 0.6s ease"
                />
              </Flex>

              {/* Vertical Separator */}
              <Box h="20px" w="1px" bg="gray.800" />

              {/* The Technical "Dot" Label */}
              <HStack gap={1}>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.500"
                  letterSpacing="widest"
                  textTransform="uppercase"
                >
                  Solutions
                </Text>
                <Box w="4px" h="4px" bg="blue.500" borderRadius="full" />
              </HStack>
            </HStack>
          </Link>
          {/* Desktop Navigation */}
          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Project</NavLink>
          </HStack>

          {/* Action Button */}
          <Button
            asChild
            size="sm"
            colorPalette="blue"
            variant="subtle"
            borderRadius="full"
            px={6}
          >
            <a href="mailto:fasasisheriffdeen@gmail.com?subject=Strategic Inquiry">
              Hire Me
            </a>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

// Helper component for clean Nav links
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      fontSize="sm"
      fontWeight="medium"
      color="gray.400"
      _hover={{ color: "blue.400", textDecoration: "none" }}
      transition="0.2s"
    >
      {children}
    </Link>
  );
}
