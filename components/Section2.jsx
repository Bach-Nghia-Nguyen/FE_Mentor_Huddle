import { Box } from '@chakra-ui/react'
import growTogether from 'assets/images/illustration-grow-together.svg'
import flowingConversation from 'assets/images/illustration-flowing-conversation.svg'
import yourUsers from 'assets/images/illustration-your-users.svg'
import Card from './Card'
import Heading from './Heading'
import Button from './Button'

const data = [
  {
    id: 1,
    heading: 'Grow Together',
    description:
      'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
    imageSrc: growTogether,
    flexDirection: { base: 'column', w960: 'row-reverse' },
  },
  {
    id: 2,
    heading: 'Flowing Conversations',
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    imageSrc: flowingConversation,
    flexDirection: { base: 'column', w960: 'row' },
  },
  {
    id: 3,
    heading: 'Your Users',
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    imageSrc: yourUsers,
    flexDirection: { base: 'column', w960: 'row-reverse' },
  },
]

function Section2() {
  return (
    <Box
      as="section"
      padding={{ base: '60px 10px 180px', w960: '100px 10px 180px' }}
      position="relative"
    >
      {data.map((item) => (
        <Card
          key={item.id}
          imageSrc={item.imageSrc}
          heading={item.heading}
          description={item.description}
          flexDirection={item.flexDirection}
        />
      ))}

      <Box
        borderRadius="15px"
        boxShadow="0px 0px 10px -5px #000000"
        bgColor="white"
        w={{ base: '95%', w500: '480px', w960: '620px' }}
        // maxW="480px"
        padding={{ base: '35px 0', w1080: '45px 0' }}
        margin="0 auto"
        textAlign="center"
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        transform="translate(0, 40%)"
      >
        <Heading
          fontSize={{ base: '18px', w500: '22px', w1080: '26px' }}
          as="h3"
          marginBottom="15px"
          color="neutral.veryDarkCyan"
        >
          Ready To Build Your Community?
        </Heading>
        <Button
          w={{ base: '200px', w500: '270px', w1080: '320px' }}
          fontSize={{ base: '12px', w500: '14px', w1080: '16px' }}
          padding={{ base: '11px 0', w960: '15px 0' }}
          color="white"
          bgColor="primary.pink"
          boxShadow="0px 0px 10px -5px #000000"
          _hover={{
            bgColor: 'hover.pink',
          }}
        >
          Get Started For Free
        </Button>
      </Box>
    </Box>
  )
}

export default Section2
