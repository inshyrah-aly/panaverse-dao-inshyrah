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

const GBQ4 = () => {
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
              Quarter IV (Genomics and Bioinformatics)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
            Bio-351: Python for Biologists
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
              Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.
              <br/>
              <br/>
              This course will focus on learning the basics of the Python programming language through genomics examples.              
            </Text>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                mt={36}
                mb={36}
                  alt={"GB Image"}
                  objectFit={"cover"}
                  width="50%"
                  maxW="100%"
                  height={"auto"}
                  src={"https://i.ibb.co/KxPW4Bm/pngwing-com-6.png"}
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
              Introduction to Genomics:
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
               This would include an overview of genomics, the study of the genome, and its applications in various industries.
              </Text>
              
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              DNA Sequencing: 
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
                This would cover the different types of DNA sequencing techniques, such as Sanger sequencing, Illumina sequencing, and nanopore sequencing.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Genome Assembly:
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
                This would cover the process of assembling the sequence data obtained from DNA sequencing into a complete genome.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
            Genome Annotation: 
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
                This would cover the process of identifying the functional elements in a genome, such as genes, promoters, and regulatory regions.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
            Gene Expression Analysis:
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
                This would cover the different techniques used for analyzing gene expression, such as microarrays and RNA sequencing.
              </Text>
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Textbook:
            </Heading>
            <Box>
            <Link href="https://www.pythonforbiologists.org/">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                  mb={8}
                >
                   https://www.pythonforbiologists.org/
                </Text>
              </Link>
            </Box></Box>                   
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default GBQ4;