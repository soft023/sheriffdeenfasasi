import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Badge,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Button } from "./components/ui/button";
import { LuShieldCheck, LuCode, LuArrowRight } from "react-icons/lu";

export default function Hero() {
  const ArrowIcon = LuArrowRight as any;
  const ShieldIcon = LuShieldCheck as any;
  const CodeIcon = LuCode as any;
  return (
    <Box
      id="home"
      bg="black"
      color="white"
      minH={{ base: "auto", lg: "100dvh" }} // Dynamic viewport height for mobile
      py={{ base: "120px", lg: "0" }} // Extra padding for mobile navbar clearance
      w="100%"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      pt={{ base: "80px", lg: "0" }} // Specific safety offset for the fixed navbar
    >
      {/* Background Architectural Glow */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="600px"
        h="600px"
        bg="blue.600"
        filter="blur(160px)"
        opacity="0.12"
        zIndex={0}
      />

      <Container maxW="6xl" zIndex={1} px={{ base: 6, md: 8 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12, lg: 16 }}
          align="center"
        >
          {/* Left Side: Identity & Mission */}
          <Stack
            gap={8}
            flex="1.2"
            align={{ base: "center", lg: "start" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Stack gap={2} align={{ base: "center", lg: "start" }}>
              <Badge
                variant="outline"
                colorPalette="blue"
                size="lg"
                px={4}
                borderRadius="full"
                w="fit-content"
              >
                Full-Stack Developer | Compliance Officer | CFE
              </Badge>
              <Heading
                size={{ base: "4xl", md: "5xl" }}
                fontWeight="black"
                lineHeight="0.9"
                letterSpacing="tighter"
              >
                Sheriffdeen <br />
                <Text as="span" color="blue.500">
                  Adigun Fasasi
                </Text>
              </Heading>
            </Stack>

            <Stack gap={4}>
              <Text
                fontSize={{ base: "xl", md: "3xl" }}
                fontWeight="bold"
                color="blue.500"
                fontFamily="mono"
              >
                Web Apps with Purpose, Compliance with Care
              </Text>
              <Text
                fontSize="lg"
                color="gray.400"
                lineHeight="relaxed"
                maxW="2xl"
              >
                Cluster Compliance Team Lead at a leading Nigerian commercial
                bank and a seasoned Web Developer, recognized for enforcing
                rigorous global standards, with professional qualifications in
                DCP and CFE.
              </Text>
            </Stack>

            <Flex
              gap={4}
              direction={{ base: "column", sm: "row" }}
              w={{ base: "full", sm: "auto" }}
            >
              <Button
                asChild
                size="xl"
                colorPalette="blue"
                px={10}
                borderRadius="full"
              >
                <a href="#projects">
                  View Case Studies
                  <ArrowIcon />
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                borderColor="gray.800"
                px={10}
                borderRadius="full"
                _hover={{ bg: "gray.900" }}
              >
                <a href="mailto:fasasisheriffdeen@gmail.com">Contact Me</a>
              </Button>
            </Flex>
          </Stack>

          {/* Right Side: Credential Vault Card */}
          <Box
            flex="0.8"
            w="full"
            p={{ base: 6, md: 8 }}
            bg="gray.900/30"
            borderRadius="3xl"
            border="1px solid"
            borderColor="gray.800"
            backdropFilter="blur(10px)"
          >
            <Stack gap={8}>
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="blue.500"
                  mb={4}
                  letterSpacing="widest"
                >
                  PROFESSIONAL CREDENTIALS
                </Text>
                <HStack gap={2} flexWrap="wrap">
                  {["B.TECH (HONS)", "MBA", "DCP", "CFE"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="solid"
                      colorPalette="blue"
                      px={3}
                      color="white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              <Stack gap={6}>
                <HStack gap={4} align="start">
                  <Box
                    p={2.5}
                    bg="blue.500/10"
                    borderRadius="xl"
                    color="blue.500"
                  >
                    <ShieldIcon size={24} />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="sm">
                      Investigative Reviews
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      Enforcing Global Compliance Standards
                    </Text>
                  </Box>
                </HStack>

                <HStack gap={4} align="start">
                  <Box
                    p={2.5}
                    bg="blue.500/10"
                    borderRadius="xl"
                    color="blue.500"
                  >
                    <CodeIcon size={24} />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="sm">
                      Systems Management
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      Financial & Media Process Automation
                    </Text>
                  </Box>
                </HStack>
              </Stack>

              <Box pt={4} borderTop="1px solid" borderColor="gray.800">
                <HStack gap={2} flexWrap="wrap">
                  <Badge variant="subtle" colorPalette="blue" size="sm">
                    Process Automation
                  </Badge>
                  <Badge variant="subtle" colorPalette="blue" size="sm">
                    Compliance
                  </Badge>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
