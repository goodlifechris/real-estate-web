'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import PDFViewer from './PDFVIewer'
import Link from 'next/link';

export default function Property() {
  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      // Only open the link if `window` is available (i.e., on the client-side)
      window.open('https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/BK_Elevations3.pdf', '_blank');
    }
  };
  return (
    <>
       <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It&apos;s
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Link href="https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/BK_Elevations3.pdf">
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
            View plans
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/house_images/houseplan2.jpeg'
          }
        />
      </Flex>
    </Stack>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/house_images/houseplan1.jpeg'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It&apos;s
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Link href="https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/BK_Elevations3.pdf">
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              View plan
            </Button>
         </Link>
          </Stack>
        </Stack>
      </Flex>

    </Stack>
    </>
 
  )
}