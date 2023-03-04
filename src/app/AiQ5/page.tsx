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

const AiQ5 = () => {
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
              Quarter V (Artificial Intelligence)
            </Heading>
            <Heading
              as="h3"
              size={["lg", "xl"]}
              color={"yellow.300"}
              px={[2, 12]}
            >
             AI-361: Deep Learning and MLOps
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
              This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.
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
              AI Applications:
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
               This section should cover some of the popular AI applications, including chatbots, recommendation systems, fraud detection, and autonomous vehicles.
              </Text>
              
            </Box>
            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              AI Tools and Technologies:
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
                This section should cover some of the popular AI tools and technologies, including Python, TensorFlow, Keras, and PyTorch.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              AI Implementation:
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
                This section should cover the practical aspects of implementing AI, including data preparation, model training, deployment, and evaluation.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              AI Future:
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
                This section should cover the future of AI, including emerging trends, opportunities, and challenges.
              </Text>
            </Box>

            <Heading
              as="h2"
              size={["lg", "xl"]}
              color={"gray.700"}
              px={[2, 12]}
              mt={10}
            >
              Deep Learning with Tensorflow
            </Heading>
            <Box>
            <Link href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  Deep Learning with Python, Second Edition 2nd Edition
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
              Machine Learning Engineering for Production (MLOps) using Terraform for CDK
            </Heading>
            <Box>
            <Link href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351">
                <Text
                  as="p"
                  fontSize={["md", "lg"]}
                  fontWeight={"medium"}
                  px={[2, 12]}
                  pt={4}
                  color="blue.600"
                  mt={-1}
                >
                  A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
                </Text>
              </Link> 

              <Link href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce">
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
                MLOps leveraging AWS SageMaker and Terraform
                </Text>
              </Link>            
            </Box></Box>
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default AiQ5;
