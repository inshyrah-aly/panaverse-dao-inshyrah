"use client";
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
  Stack,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const MetaverseQ5 = () => {
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
              Quarter V (Web3 and Metaverse)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
              MV-361: Developing Planet-Scale Open Virtual and Augmented
              Metaverse Experiences
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
              The Web is the Metaverse. The metaverse requires an infrastructure
              that connects all of the metaverses so that we can travel between
              them. This is only achievable with open web-based metaverses. The
              internet and its browsers are magical. Federated but linked
              experiences connect pages, people, technology, businesses,
              standards, and nations. It's unlike anything else. The metaverse
              should replicate the best qualities of the web - it should just be
              the web. We just have to extend online responsive design from
              mobile to desktop to 3D, Augmented Reality, and Virtual Reality.
              This course will teach you how to build the Open Social Spatial
              Web with WebXR and WebGPU technologies.
            </Text>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  alt={"Q1 Page Image"}
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
            <Box>
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
              </Box>
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
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default MetaverseQ5;
