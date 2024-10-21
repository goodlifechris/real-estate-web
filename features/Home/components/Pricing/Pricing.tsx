'use client'

import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

const options = [
  { id: 1, desc: '1 lorem ipsum' },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' },
]
interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  checked?: boolean
}
const PackageTier = ({ title, options, typePlan, checked = false }: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'white'
  const bgColorLight = checked ? 'purple.400' : 'purple.400'

  const colorTextDark = checked ? 'white' : 'white'
  const bgColorDark = checked ? 'purple.400' : 'purple.400'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'}>{title}</Heading>
      {/* <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List> */}
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
      <Link href="https://ardama.nyc3.cdn.digitaloceanspaces.com/plans/BK_Elevations3.pdf">

        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
          View plan
        </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
const Pricing = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
             <Text color="purple.400">Top floor</Text>
            </Heading>
          </Stack>
          {/* <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in
              iure vero. Facilis magnam, sed officiis commodi labore odit.
            </Text>
          </Stack> */}
        </Stack>
        <Divider />
        <PackageTier title={'12  (2 Bedroom)'} typePlan="Kes 4m" options={options} />
        <Divider />
        <PackageTier
          title={'8 (1 Bedroom)'}
          checked={true}
          typePlan="kes 2.5m"
          options={options}
        />
        <Divider />
      </Stack>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              <Text color="purple.400">Ground floor</Text>
            </Heading>
          </Stack>
          {/* <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in
              iure vero. Facilis magnam, sed officiis commodi labore odit.
            </Text>
          </Stack> */}
        </Stack>
        <Divider />
        <PackageTier title={'Ground floor 2 units (2 Bedroom) '} typePlan="Kes 4m" options={options} />
        <Divider />
        <PackageTier title={'Ground floor 1 units (1 Bedroom) '} typePlan="Kes 2.5m" options={options} />
      </Stack>
    </Box>
  )
}

export default Pricing