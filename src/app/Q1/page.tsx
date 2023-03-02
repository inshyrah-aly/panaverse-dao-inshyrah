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
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Q1 = () => {
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
              Quarter I (Core)
            </Heading>
            <Heading as="h3" size={["lg", "xl"]} color={"yellow.300"} px={[2, 12]}>
            CS-101: Object-Oriented Programming using TypeScript
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
            We will start the program by learning the fundamentals of
            Object-Oriented programming using JavaScript and TypeScript. We will
            also understand the latest Web trends i.e. Web 3.0 and Metaverse
            concepts and try to understand their working from the perspective of
            the users.
          </Text>
          <Box flex={1}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                alt={"Q1 Page Image"}
                objectFit={"cover"}
                width="50%"
                maxW="100%"
                height={"auto"}
                src={"https://i.ibb.co/2nvHgV1/Pngtree-illustration-works-as-a-programmer-5980063.png"}
              />
            </div>
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
              HTML and CSS (Homework)
            </Heading>
            <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Learn HTML by Hira Khan (Watch Recorded Videos)
              </Text>
            </Link>
            <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              </Text>
            </Link>
            <Heading
              as="h2"
              size={["2xl", "2xl"]}
              color={"green.700"}
              px={[2, 12]}
              mt={8}
            >
              Web 3.0 and Metaverse Theory
            </Heading>
            <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Introduction to Panaverse DAO
              </Text>
            </Link>
            <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.g14c544a439c_87_130">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Web 3.0 User Guide
              </Text>
            </Link>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              color="gray.800"
            >
              Complete Web 3 Assignments included in the Web 3 User Guide
            </Text>
            <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit#slide=id.p">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Virtual and Augmented Metaverse User Guide
              </Text>
            </Link>
            <Heading
              as="h2"
              size={["2xl", "2xl"]}
              color={"green.700"}
              px={[2, 12]}
              mt={8}
              mb={12}
            >
              Fundamentals of JavaScript (ECMAScript 2022 Language
              Specification)
            </Heading>
            <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
              </Text>
            </Link>
            <Link href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Chapters 2-6, 13 of JavaScript from Beginner to Professional:
                Learn JavaScript quickly by building fun, interactive, and
                dynamic web apps, games, and pages
              </Text>
            </Link>
            <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                JavaScript Book Code
              </Text>
            </Link>
            <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
              <Text
                as="p"
                fontSize={["md", "lg"]}
                fontWeight={"medium"}
                px={[2, 12]}
                pt={4}
                color="blue.600"
              >
                Getting Started Exercises with JavaScript and Node.js
              </Text>
            </Link>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mt={8}
              color="gray.800"
            >
              Fundamentals of JavaScript and Node.js Quiz
              <br />
              <br />
              Topics Covered in the Quiz:
              <br />
              <br />
              Background of JavaScript and How to use JavaScript in Browser
              Variables, Primitive data types Analyzing and modifying data
              types, and Operators (Chapter 2 of JavaScript from Beginner to
              Professional)
            </Text>
            <Box px={[2, 4, 6, 8]} py={[4, 8, 12, 16]}>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>1. </b>Intro to Node.js, .mjs files, Modules, NPM, import,
                  export, and using external modules with npm:{" "}
                  <Link
                    color="blue.600"
                    href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                  >
                    https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                  </Link>
                  <br />
                  <br />
                  How to accept user input in your Node.js JavaScript programs,
                  this will allow us to create interactive Node.js console
                  programs using prompt-sync library. The last example in this
                  presentation shows you how to use prompt-sync library in your
                  Node.js programs:{" "}
                  <Link
                    color="blue.600"
                    href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                  >
                    https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                  </Link>
                  <br />
                  <br />
                  Note: After this point, we will do all our class work and
                  exercises using Node.js in .mjs files. We will also be able to
                  develop interactive Node.js console programs which will
                  greatly help the students to learn.
                </ListItem>
              </List>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>2. </b> Using Arrays and Objects in Node.js Programs
                  (chapter 3 of JavaScript from Beginner to Professional)
                </ListItem>
              </List>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>3. </b>Using if and if else statements, else if statements,
                  Conditional ternary operators, and switch statements in
                  Node.js programs (chapter 4 of JavaScript from Beginner to
                  Professional)
                </ListItem>
              </List>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>4. </b>Using while loop, do while loop, for loop, for in,
                  and for of loop in Node.js (chapter 5 of JavaScript from
                  Beginner to Professional)
                </ListItem>
              </List>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>5. </b>Using Basic functions, Function arguments, Return,
                  Variable scope in functions, Recursive functions, Nested
                  functions, Anonymous functions, and Function callbacks in
                  Node.js (chapter 6 of JavaScript from Beginner to
                  Professional)
                </ListItem>
              </List>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>6. </b>Using Concurrency, Callbacks, Promises, async /
                  await, and Event loop (chapter 13 of JavaScript from Beginner
                  to Professional)
                </ListItem>
              </List>
              <List paddingLeft="4" mb={7}>
                <ListItem>
                  <b>7. </b>JavaScript promises, mastering the asynchronous
                </ListItem>
              </List>
            </Box>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color="blue.600"
                href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
              >
                https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
              </Link>
            </Text>

            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              New JavaScript Features in ECMAScript 2022 and 2021{" "}
              <Link
                color="blue.600"
                href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
              >
                https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg
              </Link>
            </Text>
            <Heading
              as="h1"
              size={["xl", "2xl"]}
              color={"green.700"}
              px={[2, 12]}
              mt={8}
              mb={4}
            >
              Object-Oriented Programming with TypeScript
            </Heading>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
              Skills Using Type-Safe JavaScript{" "}
              <Link
                color={"blue.600"}
                href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
              >
                https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              Learning Repository{" "}
              <Link
                color={"blue.600"}
                href="https://github.com/panaverse/learn-typescript"
              >
                https://github.com/panaverse/learn-typescript
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              In Class Companion projects and articles for Learning TypeScript{" "}
              <Link
                color={"blue.600"}
                href="https://www.learningtypescript.com/"
              >
                https://www.learningtypescript.com/
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mb={1}
            >
              Homework Project
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="https://github.com/panaverse/typescript-node-projects"
              >
                https://github.com/panaverse/typescript-node-projects
              </Link>
            </Text>
            <Heading
              as="h1"
              size={["xl", "2xl"]}
              color={"green.700"}
              px={[2, 12]}
              mt={8}
              mb={4}
            >
              TypeScript Quizzes
            </Heading>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              Fundamentals of TypeScript Quiz
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              TypeScript Professional Proficiency Quiz
            </Text>
            <Heading
              as="h1"
              size={["xl", "2xl"]}
              color={"green.700"}
              px={[2, 12]}
              mt={8}
              mb={4}
            >
              TypeScript For React
            </Heading>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="https://profy.dev/article/react-typescript"
              >
                Minimal TypeScript Crash Course For React With Interactive Code
                Exercise
              </Link>
            </Text>
            <Heading
              as="h1"
              size={["xl", "2xl"]}
              color={"green.700"}
              px={[2, 12]}
              mt={8}
              mb={4}
            >
              Fundamentals of Version Control with Git (Recorded Videos)
            </Heading>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
              >
                Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
                Recorded Videos)
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
              step-by-step course for the complete beginner by Tobias Günther
            </Text>

            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              We will also cover these readings:
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="https://help.github.com/articles/markdown-basics/"
              >
                https://help.github.com/articles/markdown-basics/
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences"
              >
                http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github
                http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
              >
                https://git-scm.com/book/en/v2/Git-Branching-Rebasing
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
              >
                http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              For Practice:{" "}
              <Link
                color={"blue.600"}
                href="https://try.github.io/levels/1/challenges/1"
              >
                https://try.github.io/levels/1/challenges/1
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mb={1}
            >
              Homework:
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              <Link
                color={"blue.600"}
                href="https://www.datacamp.com/courses/introduction-to-git-for-data-science"
              >
                https://www.datacamp.com/courses/introduction-to-git-for-data-science
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
            >
              Git Cheatsheet:{" "}
              <Link
                color={"blue.600"}
                href=" https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
              >
                {" "}
                https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html
              </Link>
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mb={1}
            >
              Git Quiz before the start of Quarter 2
            </Text>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              fontWeight={"medium"}
              px={[2, 12]}
              pt={4}
              mb={1}
            >
              Total Questions: 60, Total Time: 75 minutes
            </Text>
          </Box>
        </VStack>
      </Box>
    </Stack></>
  );
};

export default Q1;
