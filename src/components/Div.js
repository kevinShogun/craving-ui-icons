import tw from "tailwind-styled-components"

export const Div = tw.div`
    ${props => props.$containerprymari &&
        'bg-greyLight w-screen h-screen flex justify-center items-center'
    };

    ${props => props.$containerlogin &&
        'bg-white w-100 h-auto pr-20 pl-20 pt-36 pb-36 rounded z-10 mobile:w-full tablet:w-100 mobile:pr-10 tablet:pr-20 mobile:pl-10 tablet:pl-20'
    };

    ${props => props.$containeregister &&
        'bg-white w-100 h-110 pr-20 pl-20 pt-20 pb-20 overflow-y-auto rounded z-10 mobile:w-full tablet:w-100 mobile:pr-10 tablet:pr-20 mobile:pl-10 tablet:pl-20'
    };

    ${props => props.$containerrecoverpassword &&
        'bg-white w-100 h-auto pr-20 pl-20 pt-20 pb-10 overflow-y-auto rounded z-10 mobile:w-full tablet:w-100 mobile:pr-10 tablet:pr-20 mobile:pl-10 tablet:pl-20'
    };
`