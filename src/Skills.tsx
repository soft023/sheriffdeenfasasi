import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Badge,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { LuCode, LuShieldCheck, LuZap, LuSearch } from "react-icons/lu";

export default function Skills() {
  const skillSets = [
    {
      title: "Systems Engineering",
      icon: LuCode,
      description:
        "Building automated business solutions and high-performance web applications.",
      tags: ["PHP / Laravel", "React.js", "Chakra UI", "MySQL", "REST APIs"],
    },
    {
      title: "Regulatory Compliance",
      icon: LuShieldCheck,
      description:
        "Enforcing AML/CFT/CPF standards and managing regional cluster oversight.",
      tags: [
        "KYC / CDD",
        "Enhanced Due Diligence (EDD)",
        "Regulatory Reporting",
        "AML / CFT / PF Training & Facilitation",
        "LEA Liaison",
        "Policy Enforcement",
      ],
    },
    {
      title: "Investigative Review",
      icon: LuSearch,
      description:
        "Utilizing CFE methodology to detect fraud and conduct forensic transaction monitoring.",
      tags: [
        "Fraud Detection & Investigation",
        "STR",
        "LEA Liaison",
        "Customer & Transaction Risk Rating",
        "Transaction Monitoring",
      ],
    },
    {
      title: "Process Automation",
      icon: LuZap,
      description:
        "Architecting digital workflows to replace manual banking and media operations.",
      tags: [
        "Loan Management Portals",
        "Appraisal & Valuation Systems",
        "Media & Content Management",
        "Accounting Software",
        "Mobile Tools for Financial Calculations",
      ],
    },
  ];

  return (
    <Box id="skills" bg="black" py={24}>
      <Container maxW="6xl">
        <Stack gap={12}>
          <VStack gap={2} textAlign="center">
            <Badge colorPalette="blue" variant="outline" px={3}>
              Competencies
            </Badge>
            <Heading size="3xl" fontWeight="black">
              Dual-Core Expertise
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {skillSets.map((set, index) => (
              <Box
                key={index}
                p={8}
                bg="gray.900/50"
                borderRadius="2xl"
                border="1px solid"
                borderColor="gray.800"
                _hover={{ borderColor: "blue.500/50", bg: "gray.900" }}
                transition="all 0.3s"
              >
                <Stack gap={4}>
                  <Icon as={set.icon as any} boxSize={8} color="blue.500" />
                  <Box>
                    <Heading size="md" mb={2}>
                      {set.title}
                    </Heading>
                    <Text color="gray.400" fontSize="sm">
                      {set.description}
                    </Text>
                  </Box>
                  <Flex gap={2} flexWrap="wrap">
                    {set.tags.map((tag) => (
                      <Badge
                        key={tag}
                        size="sm"
                        variant="surface"
                        colorPalette="gray"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
