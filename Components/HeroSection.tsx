import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Link,
  } from '@chakra-ui/react';
  
  export const Illustration = (props: IconProps) => {
  };
  export default function HeroSection() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={800}
            fontSize={{ base: '1xl', sm: '4xl', md: '6xl' }}
            lineHeight={'140%'}>
            Certified Web 3.0 And Metaverse Developer:{' '}
            <Text as={'span'} color={'green.600'}>
              A Nationwide Program in{' '}
            </Text><Text as={'span'} color={'green.600'}>
              Karachi, Lahore, Islamabad and Peshawar
            </Text>
          </Heading>
          <Text color={'gray.700'} maxW={'7xl'}>
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technologies globally. It is a community of Web 3.0 and Metaverse developers, designers, trainers, startup founders and service providers.
          </Text>
        return (
        <img src="/logo.png" />
        );
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'green'}
              bg={'green.500'}
              _hover={{ bg: 'green.700' }}>
              <Link href="https://portal.piaic.org/signup">
                Get Enrolled
              </Link>

            </Button>
            <Button rounded={'full'} px={6}
              colorScheme={'green'}
              bg={'green.500'}
              _hover={{ bg: 'green.700' }}>
            <Link href="./blog">
                Learn More
            </Link>
            </Button>
            </Stack>
      </Stack>
    </Container>
    );
        }