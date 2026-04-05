import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Badge,
  Flex,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  LuExternalLink,
  LuLock,
  LuRadio,
  LuCoins,
  LuUserCheck,
  LuLayoutDashboard,
} from "react-icons/lu";

export default function Projects() {
  const ExternalIcon = LuExternalLink as any;
  const projects = [
    {
      title: "Daily Contribution Engine",
      category: "Banking Ops",
      icon: LuLock,
      description:
        "Responsive field-banking system with customer segmentation 'buckets', instant account opening, and real-time back-office reconciliation for street-level business owners.",
      tags: ["Responsive Web", "Field Ops", "Real-time Sync"],
    },
    {
      title: "Radio Station Management",
      category: "Media ERP",
      icon: LuRadio,
      description:
        "Comprehensive ERP handling program bookings, staff creation, and full financial reporting including P&L and Asset Registers for media houses.",
      tags: ["Business Intelligence", "Laravel", "Reporting"],
    },
    {
      title: "Loan Application Portal",
      category: "Fintech",
      icon: LuCoins,
      description:
        "Secure end-to-end portal for microfinance banks, allowing civil servants to apply for and receive disbursed loans remotely with automated workflow.",
      tags: ["PHP", "Automation", "Financial Services"],
    },
    {
      title: "Xpress Janitorial Systems",
      category: "Commercial Web",
      icon: LuExternalLink,
      description:
        "High-performance digital platform for a US-based firm, featuring service architecture and dynamic booking flows for commercial cleaning.",
      tags: ["React", "Chakra UI", "Vercel"],
      link: "https://www.xpressjanitorial.com/",
    },
    {
      title: "Staff Appraisal System",
      category: "HR-Tech",
      icon: LuUserCheck,
      description:
        "Multi-level automation of manual appraisal flows, routing through Supervisors, Financial Controllers, HR, and the MD for annual reviews.",
      tags: ["Process Automation", "Workflow Engine"],
    },
    {
      title: "Retail Banking Calculator",
      category: "Financial Tool",
      icon: LuLayoutDashboard,
      description:
        "Mobile utility for bank staff to calculate Fixed Deposits and Loans with built-in KYC requirement guides for instant customer service.",
      tags: ["Android", "Financial Logic", "Banking Tool"],
    },
  ];

  return (
    <Box id="projects" bg="gray.950" py={24}>
      {/* maxW="6xl" matches the Navbar container for perfect alignment */}
      <Container maxW="6xl">
        <Stack gap={12}>
          <Stack gap={2} align="center">
            <Badge colorPalette="blue" variant="outline" px={3}>
              Portfolio
            </Badge>
            <Heading size="3xl" fontWeight="black" letterSpacing="tighter">
              Featured Systems
            </Heading>
          </Stack>

          {/* 2 Column Grid for Desktop, 1 Column for Mobile */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            {projects.map((project, index) => (
              <Box
                key={index}
                bg="black"
                border="1px solid"
                borderColor="gray.900"
                borderRadius="3xl"
                p={8}
                display="flex"
                flexDirection="column"
                _hover={{ borderColor: "blue.500", bg: "gray.900/30" }}
                transition="all 0.4s ease"
              >
                <Flex justify="space-between" align="start" mb={6}>
                  <Box
                    p={3}
                    bg="blue.500/10"
                    borderRadius="xl"
                    color="blue.500"
                  >
                    <Icon as={project.icon as any} boxSize={6} />
                  </Box>
                  <Badge
                    variant="outline"
                    colorPalette="blue"
                    size="md"
                    textTransform="uppercase"
                  >
                    {project.category}
                  </Badge>
                </Flex>

                <Box mb={6}>
                  <Heading size="lg" mb={3} color="white">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        _hover={{ color: "blue.400" }}
                      >
                        {project.title} <ExternalIcon size={18} />
                      </Link>
                    ) : (
                      project.title
                    )}
                  </Heading>
                  <Text color="gray.400" fontSize="md" lineHeight="tall">
                    {project.description}
                  </Text>
                </Box>

                <Flex gap={2} flexWrap="wrap" mt="auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      size="sm"
                      variant="surface"
                      colorPalette="gray"
                      textTransform="none"
                      px={2}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
