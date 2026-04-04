import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Badge,
  Flex,
  Code,
} from "@chakra-ui/react";
import { Button } from "./components/ui/button"; // Ensure you ran the snippet command above

export default function Hero() {
  return (
    <Box
      bg="black"
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="6xl">
        <Stack gap={8} direction={{ base: "column", md: "row" }} align="center">
          {/* Left Side: The "Pitch" */}
          <Stack gap={6} flex={1}>
            <Box>
              <Badge colorPalette="blue" variant="surface" mb={4}>
                Available for Q2 2026 Projects
              </Badge>
              <Heading size="4xl" fontWeight="extrabold" lineHeight="1.1">
                Fasasi Adigun <br />
                <Text as="span" color="blue.500">
                  Technical Lead.
                </Text>
              </Heading>
            </Box>

            <Text fontSize="xl" color="gray.400" maxW="500px">
              Architecting secure digital solutions and ensuring financial
              regulatory integrity through clean code and investigative
              precision.
            </Text>

            <Flex gap={4}>
              <Button size="xl" colorPalette="blue" variant="solid">
                View Portfolio
              </Button>
              <Button size="xl" variant="outline" color="white">
                Contact Me
              </Button>
            </Flex>
          </Stack>

          {/* Right Side: The "Dev Vibe" */}
          <Box
            flex={1}
            p={8}
            bg="gray.900"
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.800"
            fontFamily="mono"
            boxShadow="0 0 40px rgba(0, 123, 255, 0.2)"
          >
            <Flex gap={2} mb={4}>
              <Box w={3} h={3} borderRadius="full" bg="red.500" />
              <Box w={3} h={3} borderRadius="full" bg="yellow.500" />
              <Box w={3} h={3} borderRadius="full" bg="green.500" />
            </Flex>
            <Stack gap={2} fontSize="sm">
              <Text color="purple.400">const developer = {"{"}</Text>
              <Text ml={4}>
                name:{" "}
                <Text as="span" color="green.300">
                  'Sheriffdeen Fasasi Adigun'
                </Text>
                ,
              </Text>
              <Text ml={4}>
                role:{" "}
                <Text as="span" color="green.300">
                  'Technical Lead'
                </Text>
                ,
              </Text>
              <Text ml={4}>
                expertise: [
                <Text as="span" color="yellow.300">
                  'React', 'Financial Compliance', 'Vercel'
                </Text>
                ],
              </Text>
              <Text ml={4}>
                status:{" "}
                <Text as="span" color="green.300">
                  'Ready to Scale'
                </Text>
              </Text>
              <Text color="purple.400">{"}"}</Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
