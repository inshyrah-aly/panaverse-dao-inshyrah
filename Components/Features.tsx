'use client'
import { Box, Button, chakra, Flex, Grid, GridItem, Link, VStack } from '@chakra-ui/react';
import {} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

  
  
  export default function Features() {
    return (
      <Box as={Container} maxW="4xl" mt={20} p={8}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
              The Outcome for Participants of the Program
              </chakra.h2>
              <Button colorScheme="green" size="sm">
                
                <Link href="https://kpmg.com/xx/en/home/insights/2022/04/the-future-of-the-metaverse.html">Future Of Metaverse</Link>
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>                
                The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
              </chakra.p>

            </Flex>
          </GridItem>
        </Grid>
          
  </Box>
      
    );
  }