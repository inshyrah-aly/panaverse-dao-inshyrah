"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const AiQ4 = () => {
  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "https://i.ibb.co/b7jQhWH/9c89339c8e28528431bd62386c803d1a.png"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"gray.800"}
              px={[2, 12, 12]}
              mt={8}
              mb={3}
            >
              Quarter IV (Artificial Intelligence)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
              AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Stack
        backgroundColor={"green.100"}
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Box bg={"green.100"} p={[2, 4]}>
          <VStack align="stretch" spacing={4}>
            <Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"green.700"}
              px={[2, 12, 12]}
              mt={8}
              mb={3}
            >
              Detailed Course Syllabus:
            </Heading>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mb={-96}
            >
              Duration: 13 Weeks
              <br />
              <br />
              Course Description:
              <br />
              <br />
              We&apos;ll conclude the course by learning about basic programming
              concepts using Python, such as lists, dictionaries, classes,
              functions, and loops, and practice writing clean and readable code
              with exercises for each topic. We&apos;ll also learn how to make your
              programs interactive and how to test your code safely before
              adding it to a project. It is a fast-paced, thorough introduction
              to programming with Python 3.10+ that will have you writing
              programs, solving problems, and making things that work in no
              time. In this quarter we will also learn Git, the distributed
              version control system. We will also review Git-based GitHub
              services.
            </Text>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  alt={"Ai Image"}
                  objectFit={"cover"}
                  width="50%"
                  maxW="100%"
                  height={"auto"}
                  src={"https://i.ibb.co/tqgM7x7/pngwing-com-2.png"}
                />
              </div>
            </Box>
            <Box w={'100%'} h={'auto'} bg={'teal.100'} border={'1px'} borderColor={'green.100'} borderRadius={'26'} boxShadow={'lg'} mt={20}>
              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={"green.700"}
                px={[2, 12]}
                mt={8}
                mb={4}
              >
                Course Outline:
              </Heading>

              <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
              >
                
                Introduction To Ai
              </Heading>
           
            <Box>
            <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                This section would cover the basics of AI, including what it is, how it works, and why it&apos;s important.
              </Text>
              <Link href="https://www.pdfdrive.com/introduction-to-artificial-intelligence-e187753532.html">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Introduction to Artificial Intelligence
                </Text>

              </Link>
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
            Machine Learning:
            </Heading>
            <Box>
            
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="gray.800"
                  mt={-1}
                >
                  This section would cover the fundamentals of machine learning, including supervised and unsupervised learning, classification, regression, clustering, and deep learning.
                </Text>
            
              <Link href="https://alex.smola.org/drafts/thebook.pdf">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Introduction to Machine Learning
                </Text>
              </Link>
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Natural Language Processing (NLP):
            </Heading>
            <Box>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                This section would cover the basics of NLP, including text
                processing, sentiment analysis, and language modeling.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Computer Vision:
            </Heading>
            <Box>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                This section would cover the basics of computer vision,
                including image classification, object detection, and face
                recognition.modeling.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Reinforcement Learning:
            </Heading>
            <Box>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                This section would cover the basics of reinforcement learning,
                including the concepts of agents, states, actions, and rewards.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Ethics in AI:
            </Heading>
            <Box>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                This section should cover the ethical considerations surrounding
                AI, including privacy, bias, transparency, and accountability.
              </Text>
            </Box>

            <Box>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                AI for Everyone Quiz in Week 3
                <br />
                <br />
                Total Questions: 60, Total Time: 75 minutes
                <br />
                Building Next-Gen Intelligent Apps with OpenAI&apos;s Powerful
                Models
                <br />
                We will cover GPT-4, ChatGPT, etc. and Next.js 13
              </Text>

              <Link
                href="https://openai.com/api/"
              >
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  https://openai.com/api/
                </Text>
              </Link>
              <Link
                href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
              >
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
                </Text>
              </Link>
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Python Crash Course for TypeScript Developers
            </Heading>
            <Box>
              <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              color="blue.600"
              mt={-1}
              mb={8}>
              Python Crash Course, 2nd Edition{" "}
                  <Link color={"blue.600"} href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5">
                  A Hands-On, Project-Based Introduction to Programming 2nd Edition
                  </Link>
              </Text>
            </Box></Box>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default AiQ4;
