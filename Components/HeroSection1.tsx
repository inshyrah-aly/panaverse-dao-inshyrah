'use client'
import {
    Container,
    Heading,
    Img,
    Stack  } from '@chakra-ui/react';


  export default function HeroSection1() {
    return (
      <><main>
  <Container maxW={'6xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        color={'green.600'}>
        <Heading
          fontWeight={500}
          fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }}
          lineHeight={{ base: '120%', md: '130%', lg: '140%' }}>
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technologies globally. It is a community of Web 3.0 and Metaverse developers, designers, trainers, startup founders and service providers.
        </Heading>         
        <Img src="/logo.png" alt='Logo' width={{ base: '200', md: '400', lg: '500' }} height={{ base: '40', md: '70', lg: '80' }} />
      </Stack>
    </Container>
    </main></>

    );
        }
        