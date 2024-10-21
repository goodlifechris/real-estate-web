import React from 'react';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import { navigationLinks } from '@/features/common/modules/Navigation/NavigationConsts';
import { Image } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import path from 'path';
import LogoPath from '../../../LogoPath';

const NavigationDesktop = () => {
  return (
    <Box
      color="purple.600"
      paddingY="2rem"
      paddingX="3rem"
      backgroundColor="#feff00"
      display={{ base: 'none', md: 'block' }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            {/* <Box display="flex" gap="2" alignItems="center"> */}
              {/* <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                ARMADA APARTMENT HOMES{' '}
              </Text> */}
                      <LogoPath w="600px" h="100px"/>
                          {/* </Box> */}
          </Link>
          <Flex gap='12' alignItems='center' fontWeight='medium'>
            {navigationLinks.map((item) => (
              <NavigationLinks
                key={item.title}
                link={item.link}
                title={item.title}
                icon={<item.icon />}
              />
            ))}
              <Link href="/">
            <Button
            backgroundColor='purple.700'
              padding="1.5rem"
              colorScheme="twitter"
              fontSize="0.8rem"
              fontWeight="medium"
            >
              RESERVE NOW
            </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLinks = ({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon: JSX.Element;
}) => {
  return (
    <Link href={link}>
      <Flex align="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
