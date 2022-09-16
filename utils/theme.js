import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    primary: {
      pink: 'hsl(322, 100%, 66%)',
    },
    hover: {
      pink: '#F19ADA',
      veryDarkCyan: 'rgba(0, 37, 46, 0.6)',
    },
    neutral: {
      veryPaleCyan: 'hsl(193, 100%, 96%)',
      veryDarkCyan: 'hsl(192, 100%, 9%)',
      grayishBlue: 'hsl(208, 11%, 55%)',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '18px',
      },
      // button: {
      //   fontFamily: 'Open Sans, sans-serif',
      // },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
  breakpoints: {
    w320: '320px',
    w375: '375px',
    w500: '500px',
    w768: '768px',
    w960: '960px',
    w1080: '1080px',
    w1200: '1200px',
    w1350: '1350px',
    w1440: '1440px',
    '2xl': '1536px',
  },
}

export const theme = extendTheme(customTheme)
