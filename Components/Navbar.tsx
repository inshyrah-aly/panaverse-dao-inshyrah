'use client'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';




export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
    <Box>
      <Flex
        bg={useColorModeValue('green.200', 'black.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={3} /> : <HamburgerIcon w={4} h={5} />
            }
            variant={'solid'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
           
           textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
              
              <Button>
              <nav className="navbar navbar-light bg-light"> <div className="container">< Img src="/logo.png" alt="Logo" width="50" height="38" /></div></nav>
              </Button></Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={90}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={700}
                color={'black.900'}
                _hover={{
                  textDecoration: 'underline',
                  color: 'green.400',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'black.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'green.300'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('black', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={6}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.900')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'PIAIC',
    href: 'https://www.piaic.org/',
  },
  {
    label: 'Panacloud',
    children: [
      {
        label: 'Panacloud',
        href: 'src/app/Docs/index'
      },
      {
        label: 'Panacloud Pvt Ltd - LinkedIn',
        href: 'https://www.linkedin.com/company/panacloud-pvt-ltd/'
      },
      {
        label: 'Panacloud Pvt Ltd - Facebook',
        href: 'https://www.facebook.com/panacloud/'
      },
      {
        label: 'Panacloud - GitHub',
        href: 'https://github.com/panacloud'
      },
      {
        label: 'Panacloud - Upwork',
        href: 'https://www.upwork.com/o/companies/~01afd48c958243148c/'
      }
  ]
  },
  {
    label: "Alumni",
    children: [
      {
        label: "Zia's Alumni",
        href: 'https://www.facebook.com/piaic/photos/a.2205018386426834/3347484085513586/?type=3'
      },
    ],
  },
  {
    label: 'Programs Offered',
    children: [
      {
        label: 'Certified Web 3.0 and Metaverse Developer',
        href: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
      },
      {
        label: 'AI Learning and Deep Learning Specialization',
        href: './SyllabusAI/ai-page'
      },
      {
        label: 'Blockchain Specialization',
        href: 'https://www.piaic.org/block-chain'
      },
      {
        label: 'Cloud-Native Computing Specialization',
        href: 'https://www.piaic.org/cloud-native'
      },
      {
        label: 'Ambient Computing and IoT Specialization',
        href: 'https://www.piaic.org/iot'
      },
      
    ]
  }
];