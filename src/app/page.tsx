'use client'

import Testimonials from 'Components/Testimonials'
import Features from 'Components/Features'
import HeroSection1 from 'Components/HeroSection1'
import { ChakraProvider } from '@chakra-ui/react'
import HeroSec2 from 'Components/HeroSec2'
import Testimonials2 from 'Components/Testi'
import Content from 'Components/Content'

export default function Home(){
  return (
    <>

      <ChakraProvider>
     
      <HeroSec2 />
        <HeroSection1 />
        <Content />
          {/* < Testimonials />
          <Testimonials2 /> */}
          <Features />
          </ChakraProvider>
           
        </>
        )}
              

    

  
    