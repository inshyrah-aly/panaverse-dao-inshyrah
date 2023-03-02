import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroSec2() {
  return (
    <Stack
      backgroundColor={"green.100"}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex flex={1}>
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box flex={1}>
            <Image
              alt={"Cover Image"}
              objectFit={"cover"}
              width="100%"
              height={"auto"}
              src={
                "https://i.ibb.co/7t9cfqQ/Pngtree-metaverse-character-illustration-boy-in-7523280.png"
              }
            />
          </Box>
          <Flex
            p={{ base: 4, md: 8 }}
            flex={1}
            align={"center"}
            justify={"center"}
          >
            <Stack spacing={{ base: 4, md: 6 }} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({
                      base: "10%",
                      md: "20%",
                      lg: "30%",
                    }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Certified Web 3.0 And Metaverse Developer:
                </Text>
                <Text as={"span"} color={"green.600"}>
                  {" "}
                  A Nationwide Program in{" "}
                </Text>
                <Text as={"span"} color={"yellow.600"}>
                  Karachi, Lahore, Islamabad and Peshawar
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Getting Ready for the Next Generation and Future of the Internet
                - Join a 13 Trillion Dollar Industry with 5 Billion Users
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 2, md: 4 }}
              >
                <Button
                  rounded={"full"}
                  px={{ base: 4, md: 6 }}
                  fontSize={{ base: "md", md: "lg" }}
                  colorScheme={"green"}
                  bg={"green.500"}
                  _hover={{ bg: "green.700" }}
                >
                  <Link href="https://portal.piaic.org/signup">
                    Get Enrolled
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}
