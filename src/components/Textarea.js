import tw from "tailwind-styled-components"

export const Textarea = tw.textarea`

    ${props => props.$primarytext && 
        'appearance-none bg-white text-gray-700 rounded w-full h-32 py-2 px-3 focus:outline-none'
    };

`;