import tw from "tailwind-styled-components"

export const H1 = tw.h1`
    ${props => props.$primary && 
        'text-4xl text-center text-gray-600 mb-10'
    };
`