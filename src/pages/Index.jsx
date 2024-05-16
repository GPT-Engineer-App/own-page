import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" mt={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTU4NjQ3NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            I am a passionate full stack developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks to enhance my skills and deliver high-quality software solutions.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project One
              </Heading>
              <Text mt={2} color="gray.600">
                A brief description of the project goes here. It highlights the main features and technologies used.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project Two
              </Heading>
              <Text mt={2} color="gray.600">
                A brief description of the project goes here. It highlights the main features and technologies used.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" color="gray.700" mb={4}>
            Feel free to reach out to me via email at john.doe@example.com or connect with me on social media.
          </Text>
          <HStack spacing={4} justify="center">
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://twitter.com/johndoe" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
