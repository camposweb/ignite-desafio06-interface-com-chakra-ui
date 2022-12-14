import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "700": "#47585B",
            "500": "#999999",
            "400": "#DADADA",
            "300": "#F5F8FA",
            "100": "#FFFFFF",
        },
        yellow: {
            "400": "#FFBA08",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.700'
            }
        }
    }
})