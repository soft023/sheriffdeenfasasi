import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Badge,
  Circle,
  Spacer,
} from "@chakra-ui/react";

export default function Experience() {
  const jobs = [
    {
      company: "Fidelity Bank Plc",
      role: "Team Lead Cluster Compliance (Lagos & SW)",
      duration: "Sept 2024 - Present",
      description:
        "Leading investigative reviews and enforcing KYC/AML procedures across regional branches. Training staff on emerging compliance trends and managing LEA escalations.",
    },
    {
      company: "Fidelity Bank",
      role: "Transaction Monitoring Officer",
      duration: "Feb 2022 - Sept 2024",
      description:
        "Analyzed transaction alerts and prepared Suspicious Transaction Reports (STR). Performed Enhanced Due Diligence (EDD) for high-risk accounts and PEPs.",
    },
    {
      company: "Balogun Gambari Microfinance Bank",
      role: "Software Engineer | IT Officer",
      duration: "Aug 2019 - Feb 2022",
      description:
        "Architected core web applications and automated business processes to support banking investments and digital branding.",
    },
    {
      company: "Usability Consulting Limited",
      role: "Web Developer | Studio Manager",
      duration: "March 2018 - July 2019",
      description:
        "Planned and implemented full-stack web applications while managing staff recruitment and operational ethics.",
    },
  ];

  return (
    <Box id="experience" bg="black" py={24} scrollMarginTop="100px">
      {/* maxW="6xl" now matches your Projects and Navbar alignment */}
      <Container maxW="6xl">
        <Stack gap={16}>
          <Box textAlign={{ base: "center", md: "center" }}>
            <Badge colorPalette="blue" variant="outline" px={3}>
              Professional Journey
            </Badge>
            <Heading size="3xl" letterSpacing="tighter" fontWeight="black">
              Career Milestones
            </Heading>
          </Box>

          <Stack gap={0} position="relative">
            {/* The Vertical Line */}
            <Box
              position="absolute"
              left="4px"
              top="2"
              bottom="2"
              w="1px"
              bg="gray.800"
            />

            {jobs.map((job, index) => (
              <Flex key={index} gap={8} pb={14} position="relative">
                <Circle
                  size="10px"
                  bg="blue.500"
                  mt="2.5"
                  zIndex={1}
                  boxShadow="0 0 15px rgba(49, 130, 206, 0.5)"
                />

                <Stack gap={1} w="full">
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "start", md: "center" }}
                    justify="space-between"
                    w="full"
                  >
                    <Heading size="lg" color="white">
                      {job.role}
                    </Heading>
                    <Text
                      color="blue.500"
                      fontWeight="bold"
                      fontSize="sm"
                      fontFamily="mono"
                      mt={{ base: 1, md: 0 }}
                    >
                      {job.duration}
                    </Text>
                  </Flex>

                  <Text fontWeight="semibold" color="gray.300" fontSize="md">
                    {job.company}
                  </Text>

                  <Text
                    color="gray.500"
                    fontSize="lg"
                    maxW="4xl"
                    mt={3}
                    lineHeight="relaxed"
                  >
                    {job.description}
                  </Text>
                </Stack>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
