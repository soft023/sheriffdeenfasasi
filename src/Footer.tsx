import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Separator,
  Flex,
} from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      id="contact"
      bg="black"
      pt={20}
      pb={10}
      borderTop="1px solid"
      borderColor="gray.900"
    >
      {/* maxW="6xl" to match the alignment of your Nav and Projects */}
      <Container maxW="6xl">
        <Stack gap={12} align="center">
          <Stack gap={4} textAlign="center">
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              letterSpacing="tight"
            >
              Designing Web Apps with Purpose, and Managing Compliance with Care
            </Text>
            <Text color="gray.500" fontSize="md">
              Available for Web Development, Compliance Roles, and Strategic
              Consultations.
            </Text>
          </Stack>

          {/* Primary Contact & Socials */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 10 }}
            align="center"
            justify="center"
            wrap="wrap"
          >
            <SocialLink
              href="mailto:fasasisheriffdeen@gmail.com"
              icon={FaEnvelope}
              label="fasasisheriffdeen@gmail.com"
            />
            <SocialLink
              href="tel:+2347031370611" // Replace with your actual digits
              icon={FaPhoneAlt}
              label="+234 703 137 0611"
            />
            <HStack gap={8} pt={{ base: 4, md: 0 }}>
              <Link
                href="https://www.linkedin.com/in/sheriffdeen-fasasi-cfe-dcp-244500158/"
                target="_blank"
                color="gray.400"
                _hover={{ color: "blue.500" }}
              >
                <Icon as={FaLinkedin as any} boxSize={5} />
              </Link>
              <Link
                href="https://github.com/soft023"
                target="_blank"
                color="gray.400"
                _hover={{ color: "blue.500" }}
              >
                <Icon as={FaGithub as any} boxSize={5} />
              </Link>
            </HStack>
          </Flex>

          <Separator borderColor="gray.900" />

          <Stack
            direction={{ base: "column", md: "row" }}
            w="full"
            color="gray.600"
            fontSize="xs"
            align="center" // Centers vertically/cross-axis
            justify="center" // Centers horizontally/main-axis
          >
            <Text textAlign="center">
              © 2026 Sheriffdeen Fasasi Adigun. Built with React & Integrity.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <Link
      href={href}
      color="gray.400"
      _hover={{ color: "blue.500", textDecoration: "none" }}
      transition="all 0.2s"
    >
      <HStack gap={3}>
        <Box p={2} bg="gray.900" borderRadius="lg">
          <Icon as={icon} boxSize={4} color="blue.500" />
        </Box>
        <Text fontWeight="medium" fontSize="sm">
          {label}
        </Text>
      </HStack>
    </Link>
  );
}
