import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Text } from '@chakra-ui/react'
import logo from 'assets/images/white-logo.svg'
import email from 'assets/icons/icon-email.svg'
import location from 'assets/icons/icon-location.svg'
import phone from 'assets/icons/icon-phone.svg'

function Footer() {
  return (
    <Box
      as="footer"
      color="white"
      bgColor="neutral.veryDarkCyan"
      padding={{ base: '150px 15px 60px', w960: '150px 40px 60px', w1200: '150px 40px 60px 70px' }}
    >
      <Box width={{ base: '170px', w960: '220px' }} marginBottom={{ base: '25px' }}>
        <Image src={logo} alt="white huddle" />
      </Box>
      <Flex
        direction={{ base: 'column', w960: 'row' }}
        justifyContent={{ base: 'flex-start', w960: 'space-between' }}
        height={{ base: '100%', w960: '250px' }}
      >
        <Box
          marginBottom={{ base: '60px', w960: '0' }}
          fontSize={{ base: '16px' }}
          w={{ base: '100%', w500: '450px', w960: '390px' }}
        >
          <Flex marginBottom={{ base: '25px' }}>
            <Box>
              <Image src={location} alt="email" layout="fixed" />
            </Box>
            <Text paddingLeft={{ base: '25px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </Text>
          </Flex>
          <Flex marginBottom={{ base: '25px' }}>
            <Box>
              <Image src={phone} alt="phone" layout="fixed" />
            </Box>
            <Text paddingLeft={{ base: '20px' }}>+1-543-123-4567</Text>
          </Flex>
          <Flex>
            <Box>
              <Image src={email} alt="email" layout="fixed" />
            </Box>
            <Text paddingLeft={{ base: '20px' }}>example@huddle.com</Text>
          </Flex>
        </Box>

        <Box>
          <Link href="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              marginBottom={{ base: '15px' }}
            >
              About Us
            </Text>
          </Link>
          <Link href="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              marginBottom={{ base: '15px' }}
            >
              What We Do
            </Text>
          </Link>
          <Link href="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              marginBottom={{ base: '15px' }}
            >
              FAQ
            </Text>
          </Link>
        </Box>

        <Box>
          <Link href="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              marginBottom={{ base: '15px' }}
            >
              Career
            </Text>
          </Link>
          <Link href="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              marginBottom={{ base: '15px' }}
            >
              Blog
            </Text>
          </Link>
          <Link href="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: 'underline' }}
              marginBottom={{ base: '15px' }}
            >
              Contact Us
            </Text>
          </Link>
        </Box>

        <Flex direction="column" justifyContent={{ base: 'flex-start', w960: 'space-between' }}>
          <Flex
            justifyContent={{ base: 'center', W960: 'flex-start' }}
            marginTop={{ base: '50px', w960: '0' }}
          >
            <Flex
              _hover={{
                borderColor: 'primary.pink',
                color: 'primary.pink',
              }}
              cursor="pointer"
              border="1px solid white"
              width={{ base: '30px' }}
              height={{ base: '30px' }}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Flex>
            <Flex
              _hover={{
                borderColor: 'primary.pink',
                color: 'primary.pink',
              }}
              cursor="pointer"
              border="1px solid white"
              width={{ base: '30px' }}
              height={{ base: '30px' }}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              margin={{ base: '0 10px' }}
            >
              <i className="fa-brands fa-twitter"></i>
            </Flex>
            <Flex
              _hover={{
                borderColor: 'primary.pink',
                color: 'primary.pink',
              }}
              cursor="pointer"
              border="1px solid white"
              width={{ base: '30px' }}
              height={{ base: '30px' }}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <i className="fa-brands fa-instagram"></i>
            </Flex>
          </Flex>
          <Box marginTop={{ base: '25px' }}>
            <Text fontSize={{ base: '12px' }} textAlign={{ base: 'center' }}>
              &copy; Copyright 2022 Huddle. All rights reserved.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
