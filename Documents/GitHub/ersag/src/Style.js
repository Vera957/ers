
import { extendTheme } from '@chakra-ui/react'


/*export const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: 'red',
                //lineHeight: 'tall',
            },
            a: {
                color: 'teal.500',
            },
        },
    },
    /*styles: {
        colors: {
            brand: {
                '100': 'red',//'#F7F7F7',
                '200': '#F2E7D5',
                '300': '#6D9886',
                '400': '#393E46',
            }
        },*/
        /*global: (props) => ({
            'html, body': {
                fontSize: ['sm', 'md', 'lg'],
                gap: [2, 3, 5],
                //color: props.colorMode === 'dark' ? 'white' : 'gray.600',
                lineHeight: 'tall',
                bg: 'whiteAlpha.200',

            },
            a: {
                mr: 5,
                _hover:{ color: 'teal.400' },
                
                //color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',

            },
           
            
            layerStyles: {
                bg: '#F7F7F7',
                color: '#393E46',
            }
        }),*/
   // },
//})*/

export const newTheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: 'brand.300',
                bg: 'brand.100',
            },
           /* a: {
                color: 'brand.400',
            },*/
        },
    },
    colors: {
        brand: {
            100: '#EED6D3', //bg
            200: '#EED6D3', //cream
            300: '#A49393', //darkGreen
            400: '#67595E', //text
        },
    },
    textStyles: {
        p: {
            fontSize: ['14px', '20px'],
            fontWeight: 'normal',
            //lineHeight: '110%',
            //letterSpacing: '-2%',
        },
    }
})