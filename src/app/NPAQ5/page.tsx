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

const NPAQ5 = () => {
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
              Quarter V (Network Programmability and Automation)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
            NPA-361: Network Programmability and Automation
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
              More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
              <br/>
              <br/>
              Traditional network management techniques can&apos;t be effectively automated and don&apos;t scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.              
            </Text>
            <Box flex={1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                mt={30}
                  alt={"NPA Image"}
                  objectFit={"cover"}
                  width="50%"
                  maxW="100%"
                  height={"auto"}
                  src={"https://i.ibb.co/nDbMLbq/pngwing-com-7.png"}
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
              APIs and SDKs: 
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
               This would cover the different APIs and SDKs used for network programmability, such as REST APIs, NETCONF, and YANG.
              </Text>
              
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
             Network Security Automation:
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
                This would cover the different techniques used for automating network security, including firewall management, intrusion detection, and vulnerability scanning.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Network Analytics: 
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
                This would cover the different techniques used for analyzing network data, including traffic analysis, packet inspection, and flow monitoring.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
           Network Orchestration: 
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
                This would cover the different techniques used for orchestrating network functions, including service chaining, network slicing, and virtual network functions.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
           Network Programmability Project Development: 
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
                This would cover the development of network programmability projects from the ideation phase to the deployment phase, including design, implementation, testing, and maintenance.
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
            <Link href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3">
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
                 https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3
                </Text>
              </Link>
            </Box></Box>                  
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default NPAQ5;