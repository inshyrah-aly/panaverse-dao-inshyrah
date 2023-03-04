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

const Q3 = () => {
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
              Quarter III (Core)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Product Development
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
              In this course, you will be tasked with building APIs and a
              template to be sold on the Panaverse DAO Marketplace and Theme
              Forest. The Panaverse DAO will receive 25% of the sale for
              platform management and an additional 15% for marketing purposes.
              60% of the revenues will be distributed to the developer as
              Panaverse tokens.
            </Text>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  alt={"Q3 Page Image"}
                  objectFit={"cover"}
                  width="50%"
                  maxW="100%"
                  height={"auto"}
                  src={
                    "https://i.ibb.co/2nvHgV1/Pngtree-illustration-works-as-a-programmer-5980063.png"
                  }
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
                mt={10}
                mb={5}
              >
                Earn While You Learn Projects
              </Heading>
              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={"green.700"}
                px={[2, 12]}
                mt={8}
                mb={4}
              >
                Build Full-Stack Next.js 13 Jamstack Templates
              </Heading>
            
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              color="gray.800"
              mt={5}
            >
              You will be assigned to build a template which we will sell on
              Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will
              receive 25% share on the sale of the template which will be used
              to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the Panaverse DAO in the form of Panaverse
              tokens.
            </Text>
            <Link href="https://github.com/panaverse/panaverse-template-standard">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                The Panaverse Full-Stack Template Standard
              </Text>
            </Link>
            <Box>
              <Heading
                as="h1"
                size={["xl", "2xl"]}
                color={"green.700"}
                px={[2, 12]}
                mt={8}
                mb={4}
              >
                Build QraphQL APIs
              </Heading>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={5}
                mb={8}
              >
                You will be assigned to build APIs for which you will sell
                subscriptions on the Panaverse DAO Marketplace. The Panaverse
                DAO will receive 25% share on the sale of the template which
                will be used to manage the platform. An additional 15% will be
                spent on marketing the template. 60% of the revenues will be
                distributed to the developer through the Panaverse DAO in the
                form of Panaverse tokens.
              </Text>
            </Box></Box>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default Q3;
