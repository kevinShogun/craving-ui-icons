import tw from "tailwind-styled-components"

export const Label = tw.label`
    ${props => props.$primarylab &&
       'text-gray-500' 
    };
`