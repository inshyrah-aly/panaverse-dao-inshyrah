'use client'
import { Box, chakra, Container, Img, Link, Stack, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

  const Logo = () => {
    return (
        
        <nav className="navbar navbar-light bg-light"> <div className="container"><Link><Img src="/logo.png" alt="Logo" width="100" height="58" /></Link></div></nav>
        
         );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('green.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'/'}>Home</Link>
            <Link href={'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit'}>Google Docs</Link>
            <Link href={'https://www.facebook.com/piaic/photos/a.2205018386426834/3347484085513586/?type=3'}>Alumni</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2023 Panaverse DAO.  All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Facebook'} href={'https://www.facebook.com/panaverse.dao'}>
                <FaFacebook/>
                </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/Panaverse_edu'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/@panaverse'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/piaicofficial/?hl=en'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'GitHub'} href={'https://github.com/panaverse'}>
                <FaGithub/>
                </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }