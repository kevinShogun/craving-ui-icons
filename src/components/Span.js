import tw from "tailwind-styled-components"

export const Span = tw.span`
${props => props.$span_sidebar &&
    "mx-3 font-medium text-gray-500"
}
`;