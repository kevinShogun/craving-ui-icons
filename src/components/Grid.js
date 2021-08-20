import tw from "tailwind-styled-components";

export const Grid = tw.div`
${(props) => props.$grid_primary_container &&
	 "rounded-lg bg-white m-3 pb-8 shadow-md"}

${(props) =>
	props.$grid_items && "grid grid-cols-5 gap-4 py-3 w-auto px-5 text-sm"}

${(props) =>
	props.$grid_items_container &&
	"mx-10 my-5 bg-white rounded-2xl border-2 border-gray-200"}

${(props) =>
	props.$grid_search_bar &&
	"flex justify-around bg-gray-100 rounded-lg m-8 py-2 w-4/5"}


`;

export const GridText = tw.p`
${(props) =>
	props.$grid_title && "text-2xl text-gray-700 font-semibold mt-10 ml-5"}
	
${(props) => props.$grid_items_header && "text-gray-400 font-bold uppercase"}

${(props) => props.$grid_items_subtitle && "text-gray-400 font-bold"}

${(props) => props.$grid_items_title && "text-gray-600 text-sm font-medium"}
`;

export const GridInput = tw.button`
    ${(props) =>
			props.$grid_btn_action &&
			"bg-gray-100 mr-10 py-4 px-7 rounded-lg text-xs flex justify-between items-center"}
    
`;

