import { chakra } from '@chakra-ui/react'

function Button({ children, fontWeight = '700', borderRadius = '50px', ...rest }) {
  return (
    <chakra.button fontWeight={fontWeight} borderRadius={borderRadius} {...rest}>
      {children}
    </chakra.button>
  )
}

export default Button
