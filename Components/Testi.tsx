'use client'
import { ReactNode } from 'react';
import { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import Link from 'next/link';
import styles from './Testimonial.module.css';


interface TestimonialProps {
  children: ReactNode;
}

const Testimonial = ({ children }: TestimonialProps) => {
  return <Box className={styles.testimonial}>{children}</Box>;
};


const TestimonialContent = ({ children }: { children: ReactNode }) => {
  const [, setColor] = useState('blue')
  useEffect(() => setColor('red'), [])
  return (
    <><Stack
      className={styles['testimonial-content']}
      bg={useColorModeValue('green.200', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'3xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 5,
        h: 5,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
        
      }}>
      {children}
    </Stack></>
  );
};


const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h4'} fontSize={'2xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.700', 'gray.700')}
      fontSize={'lg'}>
      {children}
    </Text>
  );
};


export default function Testimonials2() {

  return (
    <><Box bg={useColorModeValue('green.100', 'black.900')}>
        <Container maxW={'2xl'} py={40} as={Stack} spacing={10}>

          <Stack spacing={5} align={'center'}>
            <Heading fontSize={['4xl', '4xl']} color={'blackAlpha.900'} textAlign={'center'} textDecoration={'underline'}>Programs Offered:</Heading>
            <Text fontSize={['2xl', '2xl']} textAlign={'center'}>(Specialized Tracks)</Text>
          </Stack>

          <Stack
            direction={{ base: 'column', md: 'column' }}
            spacing={{ base: 10, md: 8, lg: 10 }}>
            <Link href='/Metaverse'>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Web 3.0 (Blockchain) and Metaverse Specialization
                  </TestimonialHeading>
                  <TestimonialText>
                    This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                  </TestimonialText>
                </TestimonialContent>
              </Testimonial>
            </Link>

            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Artificial Intelligence (AI) and Deep Learning Specialization</TestimonialHeading>
                <TestimonialText>
                  The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using Open AI models and building custom Deep Learning Tensorflow models.
              </TestimonialText>
            </TestimonialContent>

          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Ambient Computing and IoT Specialization</TestimonialHeading>
              <TestimonialText>
                The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Cloud-Native Computing Specialization</TestimonialHeading>
              <TestimonialText>
                The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Network Programmability and Automation Specialization</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Genomics and Bioinformatics Specialization</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box></>
  );
}