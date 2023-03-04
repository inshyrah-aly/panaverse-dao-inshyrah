'use client'

import Features from 'Components/Features'
import HeroSection1 from 'Components/HeroSection1'
import { ChakraProvider } from '@chakra-ui/react'
import HeroSec2 from 'Components/HeroSec2'
import Content from 'Components/Content'

export default function Home(){
  return (
    <>
      <ChakraProvider>
      <HeroSec2 />
        <HeroSection1 />
        <Content />
          <Features />
          </ChakraProvider>          
        </>
        )}
              

    

  
    