import tw from "tailwind-styled-components"

export const Input = tw.input`

    ${props => props.$primaryinp && 
        'appearance-none bg-white text-gray-700 rounded w-full py-3 px-3 outline-none texto ring-white focus:ring-transparent '
    };

    ${props => props.$borderblueinp && 
        'appearance-none bg-white text-gray-700 border border-borderBlue rounded w-full py-3 px-3 outline-none texto ring-white focus:ring-transparent '
    };

    ${props => props.$disableinp && 
        'appearance-none bg-gray-200 text-gray-700 rounded w-full py-3 px-3 outline-none texto ring-white focus:ring-transparent '
    };

    ${props => props.$alertinp && 
        'appearance-none bg-white text-gray-700 border border-red-500 rounded w-full py-3 px-3 outline-none texto ring-white focus:ring-transparent '
    };

`;