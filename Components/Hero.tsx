'use client'
import Link from 'next/link';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue
  } from '@chakra-ui/react';
  import Image from 'next/image';
  
  export default function HeroSec2(): JSX.Element {
    return (
      <Flex
        w={'full'}
        h={'90vh'}
        backgroundImage={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fhigh-tech&psig=AOvVaw1IGySxetPlRlGweW5vtDms&ust=1677395310229000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCygdKOsP0CFQAAAAAdAAAAABAv`
        }
        backgroundSize={'full'}
        backgroundPosition={'left'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Certified Web 3.0 And Metaverse Developer:{' '}
              <Text as={'span'} color={'green.500'}>
                A Nationwide Program in{' '}
              </Text><Text as={'span'} color={'black.500'}>
                Karachi, Lahore, Islamabad and Peshawar
              </Text> 
        </Text>
        <Text
        color={'white'}
        fontWeight={500}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
        Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
        
        </Text>
          
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
                bg={'green.400'}
                _hover={{ bg: 'green.700' }}>
                <Link href="Components\blog1.tsx">
            Learn More
                </Link>
              </Button>
            </Stack>
            </Stack>
    </VStack>
      </Flex>
    );
  }