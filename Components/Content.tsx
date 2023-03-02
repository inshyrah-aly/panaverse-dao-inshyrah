import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "./Testimonial.module.css";
import Q1 from "@/app/Q1/page";
import Q2 from "@/app/Q2/page";
import Q3 from "@/app/Q3/page";

interface TestimonialProps {
  children: ReactNode;
}

const Testimonial = ({ children }: TestimonialProps) => {
  return <Box mb={12} className={styles.testimonial}>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  const [, setColor] = useState("blue");
  useEffect(() => setColor("red"), []);
  return (
    <>
      <Stack
        className={styles["testimonial-content"]}
        bg={useColorModeValue("green.200", "gray.800")}
        boxShadow={"lg"}
        p={8}
        rounded={"3xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 5,
          h: 5,
          borderTopColor: useColorModeValue("white", "gray.800"),
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Stack>
    </>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h4"} textAlign={{ base: "center", md: "left" }} color={'gray.700'} fontSize={"2xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.700", "gray.700")}
      fontSize={"lg"}
    >
      {children}
    </Text>
  );
};

const Content = () => {
  return (
    <Box p={16} bg={"green.100"}>
      <VStack>
        <Box>
          <Heading bg={"green.100"} as="h1" p={"12"} color={"green.700"}>
            Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
          </Heading>

          <Text
            bg={"green.100"}
            as="p"
            p={"12"}
            pt="0.1"
            fontWeight={"medium"}
            fontSize="lg"
          >
            The internet is without a doubt the most important technological
            development in human history. Web3 and metaverse technologies expand
            the internet as we know it by introducing novel features and
            advancements. Metaverse will make use of all aspects of modern
            technology, including 3D, VR, AR, AI, blockchain, cloud computing,
            voice computing, ambient computing, and more.
            <br />
            <br />
            Citi is the latest Wall Street business to give a positive prognosis
            for Web 3.0 and the Metaverse, terms used to depict a future
            internet vision centred on decentralised technologies and virtual
            worlds. Citi stated in a March 2022 research paper that the
            metaverse economy might have a total addressable market of up to $13
            trillion and five billion people by 2030.
          </Text>

          <Heading bg={"green.100"} as="h1" p={"12"} color={"green.700"}>
            The Program in a Nutshell: Earn While You Learn
          </Heading>

          <Text
            bg={"green.100"}
            as="p"
            p={"12"}
            pt="0.1"
            fontWeight={"medium"}
            fontSize="lg"
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program&apos;s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              alt={"Main Page Image"}
              objectFit={"cover"}
              width="50%"
              maxW="100%"
              height={"auto"}
              src={"https://i.ibb.co/0KV6K6m/pngwing-com.png"}
            />
          </div>

          <Heading bg={"green.100"} as="h1" p={"12"} color={"green.700"}>
            Program of Studies
          </Heading>
          <Text
            bg={"green.100"}
            as="p"
            p={"12"}
            pt="0.1"
            fontWeight={"medium"}
            fontSize="lg"
          >
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first two quarters are shared by
            all specialities and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a year-long hybrid programme that includes both onsite
            and online classes and is divided into four quarters of 13 weeks
            each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>

          <Heading bg={"green.100"} as="h1" p={"12"} color={"green.700"}>
            Core Courses (Common in All Specializations)
          </Heading>
          <Text
            bg={"green.100"}
            as="p"
            p={"12"}
            pt="0.1"
            fontWeight={"medium"}
            fontSize="lg"
          >
            Every participant of the program will start by completing the
            following two core courses:
          </Text>
        </Box>
      </VStack>
      <Box bg={useColorModeValue("green.100", "black.900")} mt={["-16", "-32"]}>
        <Container maxW={"2xl"} py={[20, 40]} as={Stack} spacing={[6, 10]}>
          <Stack spacing={[4, 5]} align={"center"}>
            <Heading
              fontSize={["3xl", "4xl"]}
              color={"blackAlpha.900"}
              textAlign={"center"}
              textDecoration={"underline"}
            >
              Common Quarters:
            </Heading>
          </Stack>

          <VStack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 12, lg: 12 }}
          ><Box>
            <Testimonial>
              <Link href="/Q1">
                <TestimonialContent>
                  <TestimonialHeading>
                    Quarter I (Core) CS-101:
                  </TestimonialHeading>
                  <TestimonialText>
                    Object-Oriented Programming using TypeScript
                  </TestimonialText>
                </TestimonialContent>
              </Link>
            </Testimonial>
            <Testimonial>
              <Link href="/Q2">
                <TestimonialContent>
                  <TestimonialHeading>
                    Quarter II (Core) W2-201:
                  </TestimonialHeading>
                  <TestimonialText>
                    Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
                    and APIs using Next.js 13 and Cloud Development Kit (CDK)
                    for Terraform
                  </TestimonialText>
                </TestimonialContent>
              </Link>
            </Testimonial>
            <Testimonial>
              <Link href="/Q3">
                <TestimonialContent>
                  <TestimonialHeading>
                    Quarter III (Core) CS-301:
                  </TestimonialHeading>
                  <TestimonialText>
                    Dollar Making Bootcamp - Full-Stack Template and API Product
                    Development
                  </TestimonialText>
                </TestimonialContent>
              </Link>
            </Testimonial></Box>
          </VStack>
        </Container>
        <Heading
          as="h1"
          size={["xl", "2xl", "3xl"]}
          color={"gray.800"}
          px={[2, 12, 12]}
          mt={8}
          mb={3}
        >
          Specialized Track
        </Heading>
        <Text
          as="p"
          fontSize={["md", "lg"]}
          fontWeight={"medium"}
          px={[2, 12]}
          pt={4}
          color="gray.800"
          mb={12}
        >
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
        <Heading as="h3" size={["lg", "xl"]} color={"yellow.600"} px={[2, 12]}>
          Web 3.0 (Blockchain) and Metaverse Specialization
        </Heading>
        <Text
          as="p"
          fontSize={["md", "lg"]}
          fontWeight={"medium"}
          px={[2, 12]}
          pt={4}
          color="gray.800"
          mb={12}
        >
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </Text>
      </Box>
      <Box>
        <Container>
          <VStack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 10, lg: 12 }}
            mt={20}
          >
            <Testimonial>
              <Link href="/MetaverseQ4">
                <TestimonialContent>
                  <TestimonialHeading>
                  Quarter IV W3-351:
                  </TestimonialHeading>
                  <TestimonialText>
                  Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                  </TestimonialText>
                </TestimonialContent>
              </Link>
            </Testimonial>
            <Testimonial>
              <Link href="/MetaverseQ5">
                <TestimonialContent>
                  <TestimonialHeading>
                  Quarter V MV-361:
                  </TestimonialHeading>
                  <TestimonialText>
                  Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                  </TestimonialText>
                </TestimonialContent>
              </Link>
            </Testimonial>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Content;
