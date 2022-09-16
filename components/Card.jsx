import Image from 'next/image'
import { Flex, Box, Text } from '@chakra-ui/react'
import Heading from './Heading'

function Card({ imageSrc, flexDirection, heading, description }) {
  return (
    <Flex
      direction={flexDirection}
      borderRadius="15px"
      boxShadow="0px 0px 10px -5px #000000"
      w={{ base: '90%', w500: '450px', w960: '850px', w1200: '1100px' }}
      padding={{ base: '25px', w1200: '45px 25px 45px 85px' }}
      margin={{ base: '0 auto 25px', w1200: '0 auto 35px' }}
      justifyContent={{ base: 'flex-start', w960: 'space-between' }}
      alignItems={{ base: 'flex-start', w960: 'center' }}
    >
      <Box
        margin={{ base: '0 auto 40px', w960: '0' }}
        w={{ base: '100%', w500: '400px', w960: '300px', w1200: '400px' }}
      >
        <Image src={imageSrc} alt={heading} />
      </Box>
      <Box
        margin={{ base: '0' }}
        textAlign={{ base: 'center', w960: 'left' }}
        w={{ base: 'auto', w960: '400px', w1200: '500px' }}
      >
        <Heading
          fontSize={{ base: '22px', w1200: '30px' }}
          color="neutral.veryDarkCyan"
          as="h3"
          marginBottom="15px"
        >
          {heading}
        </Heading>
        <Text fontSize={{ base: '14px', w1200: '18px' }} color="neutral.grayishBlue">
          {description}
        </Text>
      </Box>
    </Flex>
  )
}

export default Card
