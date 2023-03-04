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
              standards, and nations. It&apos;s unlike anything else. The metaverse
              should replicate the best qualities of the web - it should just be
              the web. We just have to extend online responsive design from
              mobile to desktop to 3D, Augmented Reality, and Virtual Reality.
              This course will teach you how to build the Open Social Spatial
              Web with WebXR and WebGPU technologies.
            </Text>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  alt={"Metaverse Image"}
                  objectFit={"cover"}
                  width="50%"
                  maxW="100%"
                  height={"auto"}
                  src={
                    "https://i.ibb.co/xFtvf38/Pngtree-virtual-reality-game-console-6979405.png"
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
                Open Metaverse Web Development
              </Text>
              <Link href="https://github.com/panaverse/metaverse-web">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Open Metaverse Learning Repo
                </Text>
              </Link>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={-1}
              >
                Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
                <br />
                <br />
                Blender development is being funded by heavyweights in the
                real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel,
                Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and
                Decentraland. It is expected to become the standard asset
                creation tool for metaverse.
              </Text>
              <Link href="https://www.blender.org/download/">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Blender 3+ Download
                </Text>
              </Link>

              <Link href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Blender 3.0 Beginner Tutorial
                </Text>
              </Link>

              <Link href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Blender 3.0 Hotkey
                </Text>
              </Link>

              <Link href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Blender Projects Textbook: Blender by Example 2nd Edition
                </Text>
              </Link>

              <Link href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Blender Textbook: The Complete Guide to Blender Graphics:
                  Computer Modeling & Animation 7th Edition by John M. Blain
                </Text>
              </Link>

              <Link href="https://www.youtube.com/watch?v=H7T0SzdFHwg">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Best Hardware Performance for Blender Rendering
                </Text>
              </Link>
            </Box>
            <Box>
            <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Assignment 1:
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
                  Build a 3D Donut using Blender 3 as shown in these video tutorials{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
                  >
                    https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
                  </Link>
                  </Text></Box>
              </Box>


              <Box>
            <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Assignment 2:
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
                  Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd Edition{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                  >
                    https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                  </Link>
                  </Text></Box>
              </Box>
              <Box>
            <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Assignment 3:
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
                  Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                  >
                  https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                  </Link>
                  </Text></Box>
                    </Box>
                  <Box>
            <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Assignment 4:
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
                  Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                  >
                  https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                  </Link>
                  </Text></Box>
                  </Box>
                  <Box>
            <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Assignment 5:
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
                  Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
                  >
                  https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                  </Link>
                  </Text></Box>
                  </Box>
                  <Box>
            <Heading
                as="h2"
                size={["lg", "xl"]}
                color={"gray.700"}
                px={[2, 12]}
                mt={10}
              >
                Assignment 6:
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
                  mb={8}
                >
                  Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials{" "}
                  <Link
                    color={"blue.600"}
                    href="https://www.youtube.com/watch?v=bpvh-9H8S1g"
                  >
                  https://www.youtube.com/watch?v=bpvh-9H8S1g
                  </Link>
                  </Text></Box>
                  </Box></Box>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default MetaverseQ5;