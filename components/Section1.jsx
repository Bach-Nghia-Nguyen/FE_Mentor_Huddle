import Image from 'next/image'
import { Box, Text, Flex } from '@chakra-ui/react'
import logo from 'assets/images/logo.svg'
import mockups from 'assets/images/illustration-mockups.svg'
import Button from './Button'
import Heading from './Heading'
import heroMobileBg from 'assets/images/bg-hero-mobile.svg'

function Section1() {
  return (
    <Box
      as="section"
      bgColor="neutral.veryPaleCyan"
      padding={{ base: '20px 10px', w1080: '20px 25px', w1200: '20px 45px' }}
      bgImage={{ base: `url(${heroMobileBg.src})` }}
      bgRepeat="no-repeat"
    >
      <Flex justifyContent="space-between">
        <Flex alignItems="center" width={{ base: '110px', w500: '150px', w960: '190px' }}>
          <Image src={logo} alt="logo" />
        </Flex>
        <Button
          padding={{ base: '5px 25px', w960: '10px 50px' }}
          boxShadow="0px 3px 8px -5px #000000"
          fontSize={{ base: '12px', w500: '14px' }}
          bgColor="white"
          color="neutral.veryDarkCyan"
          _hover={{
            color: 'hover.veryDarkCyan',
          }}
        >
          Try It Free
        </Button>
      </Flex>
      <Flex
        direction={{ base: 'column', w960: 'row' }}
        justifyContent={{ base: 'flex-start', w1080: 'space-between' }}
        paddingTop={{ base: '80px' }}
        alignItems={{ base: 'flex-start', w1200: 'center' }}
      >
        <Box
          padding={{ base: '0 15px', w1080: '0' }}
          marginBottom={{ base: '50px' }}
          textAlign={{ base: 'center', w500: 'left' }}
          w={{ base: '100%', w960: '480px' }}
        >
          <Heading
            fontSize={{ base: '26px', w500: '30px', w768: '32px', w960: '36px' }}
            marginBottom={{ base: '20px' }}
            color="neutral.veryDarkCyan"
          >
            Build The Community Your Fans Will Love
          </Heading>
          <Text marginBottom={{ base: '25px' }} color="neutral.veryDarkCyan">
            Huddle re-imagines the way we build communities. You have a voice, but so does your
            audience. Create connections with your users as you engage in genuine discussion.
          </Text>

          <Button
            w={{ base: '250px' }}
            fontSize={{ base: '14px', w500: '16px' }}
            padding={{ base: '11px 0' }}
            color="white"
            bgColor="primary.pink"
            _hover={{
              bgColor: 'hover.pink',
            }}
          >
            Get Started For Free
          </Button>
        </Box>
        <Box
          padding={{ base: '0 15px', w1080: '0' }}
          margin={{ base: '0 auto', w1080: '0' }}
          w={{ base: '100%', w500: '480px', w1080: '620px', w1350: '750px' }}
        >
          <Image src={mockups} alt="mock up" />
        </Box>
      </Flex>
    </Box>
  )
}

export default Section1
