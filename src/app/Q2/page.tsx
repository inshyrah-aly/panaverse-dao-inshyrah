"use client";
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
  Stack,
  Flex,
  useBreakpointValue
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Q2 = () => {
  return (
    <><Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={'https://i.ibb.co/b7jQhWH/9c89339c8e28528431bd62386c803d1a.png'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
        <Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"gray.800"}
              px={[2, 12, 12]}
              mt={8}
              mb={3}
            >
              Quarter II (Core)
            </Heading>
            <Heading as="h3" size={["lg", "xl"]} color={"yellow.300"} px={[2, 12]}>
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
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
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </Text>
          <Box flex={1}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                alt={"Q2 Page Image"}
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
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
            Next.js 13 Web Development
          </Heading>
          <Box>
            <Link href="https://beta.nextjs.org/docs">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Latest Learn React Official Website
              </Text>
            </Link>
            <Link href="https://beta.reactjs.org/learn">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Next 13 Official Documentation
              </Text>
            </Link>
            <Link href="https://github.com/panaverse/learn-nextjs">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Learn Next.js 13 Learning Repo
              </Text>
            </Link>
          </Box>
          <Heading
            as="h2"
            size={["lg", "xl"]}
            color={"gray.700"}
            px={[2, 12]}
            mt={8}
            mb={4}
          >
            Next.js 13 using Chakra UI (Remote Zoom Class)
          </Heading>
          <Box>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              Chakra UI Docs{" "}
              <Link
                color={"blue.600"}
                href="https://chakra-ui.com/getting-started"
              >
                https://chakra-ui.com/getting-started
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mt={-1}
            >
              CSS Flexbox Explained – Complete Guide to Flexible Containers and
              Flex Items{" "}
              <Link
                color={"blue.600"}
                href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
              >
                https://www.freecodecamp.org/news/css-flexbox-complete-guide/
              </Link>
            </Text>
          </Box>
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
            UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
            Class)
          </Heading>
          <Box>
            <Link href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Designing and Prototyping Interfaces with Figma: Learn essential
                UX/UI design principles by creating interactive prototypes for
                mobile, tablet, and desktop by Fabio Staiano
              </Text>
            </Link>
            <Link href="https://www.figma.com/community/file/768809027799962739">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Figma Design Kit for TailwindCSS
              </Text>
            </Link>
            <Link href="https://www.figma.com/community/file/971408767069651759">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Chakra UI Figma Kit
              </Text>
            </Link>
          </Box>
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
            API Routes with Next.js
          </Heading>
          <Box>
            <Link href="https://nextjs.org/docs/api-routes/introduction">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                API Routes
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
              APIs with Next.js and tRPC
            </Text>
            <Link href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Build a tRPC CRUD API Example with Next.js
              </Text>
            </Link>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mt={-1}
            >
              Stop building REST APIs for your Next.js apps, use tRPC instead{" "}
              <Link
                color={"blue.600"}
                href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
              >
                https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/https://www.learningtypescript.com/
              </Link>
            </Text>
          </Box>
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
            SQL and Prisma
          </Heading>
          <Box>
            <Link href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Start from scratch with relational databases
              </Text>
            </Link>
            <Link href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                SQL For Beginners Video Tutorial
              </Text>
            </Link>
            <Link href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Database Management Systems and SQL – Tutorial for Beginners
              </Text>
            </Link>
          </Box>
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
            Next.js 13 using TailwindCSS (Remote Zoom Class)
          </Heading>
          <Link href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition//">
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              color="blue.600"
              mt={-1}
            >
              Modern CSS with Tailwind, Second Edition by Noel Rappin
            </Text>
          </Link>
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
            AWS Application Composer (Remote Zoom Class)
          </Heading>
          <Box>
            <Link href="https://www.youtube.com/watch?v=BujE_tik5r8">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                What is AWS Application Composer?
              </Text>
            </Link>
            <Link href="https://www.youtube.com/watch?v=p411uh363jQ">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Event-driven apps with AWS Application Composer
              </Text>
            </Link>
            <Link href="https://aws.amazon.com/application-composer/">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                Visually design and build serverless applications quickly
              </Text>
            </Link>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={5}
              >
                Must Have: Create Free AWS Account
              </Text>
              <Link href="https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={-1}
              >
                AWS Free Tier
              </Text>
            </Link>
            <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="gray.800"
                mt={5}
              >
               Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.
               <br/>
               <br/>
               Now you can create a virtual VISA Debit card through the NayaPay app{' '}(<Link href="https://www.nayapay.com/" color="blue.600">https://www.nayapay.com/</Link>){' '}which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.
               <br/>
               <br/>
               You can also get a $300 credit{' '}<Link href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html" color="blue.600">https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html</Link>
              </Text>
          </Box>
          <Heading as="h2" size={["lg", "xl"]} color={"gray.700"} px={[2, 12]}>
          Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)
          </Heading>
          <Box>
          <Link href="https://github.com/panaverse/learn-multicloud-api-development">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
               Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps
              </Text>
            </Link>
          </Box>
          <Heading
            as="h1"
            size={["xl", "2xl", "3xl"]}
            color={"green.700"}
            px={[2, 12, 12]}
            mt={8}
            mb={3}
          >
            Web 2.0 Projects
          </Heading>
          <Box>
          <Link href="https://github.com/panaverse/nextjs-projects">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
               Next.js Projects
              </Text>
            </Link>
          <Link href="https://github.com/panaverse/styling-nextjs-projects">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={'-1'}
              >
               Styling Next.js Projects using TailwindCSS and Chakra UI
              </Text>
            </Link>
          <Link href="https://github.com/ogzhanolguncu/min-todo">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={'-1'}
              >
               Todo Full-Stack App
              </Text>
            </Link>
          <Link href="https://www.youtube.com/watch?v=nzJsYJPCc80">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
                mt={'-1'}
                mb={8}
              >
               Build a Twitter Clone
              </Text>
            </Link>
          </Box>
          </Box>
        </VStack>
      </Box>
    </Stack></>
  );
};

export default Q2;
