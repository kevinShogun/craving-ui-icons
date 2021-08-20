import tw from "tailwind-styled-components"

export const Title = tw.p`

    ${props => props.$modaltitle && 
        'text-2xl font-bold m-3 text-gray-700 top-7 right-7'
    };
`;