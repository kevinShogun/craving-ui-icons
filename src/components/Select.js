import tw from "tailwind-styled-components"

export const Select = tw.select`

    ${props => props.$primaryselect && 
        'bg-white text-gray-700 rounded w-full py-2 px-3 focus:outline-none'
    };

    ${props => props.$borderblueselect && 
        'bg-white text-gray-700 rounded border border-borderBlue w-full py-2 px-3 focus:outline-none'
    };

    ${props => props.$disableinpsel && 
        'bg-gray-200 text-gray-700 rounded w-full py-3 px-3 focus:outline-none'
    };
    
`;