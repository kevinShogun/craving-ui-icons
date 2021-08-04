import React from "react";

export const ModalColor = ({ changeColorState, setChangeColorState }) => {
	const handleCheck = (color) => {
		switch (color) {
			case "rojo":
				console.log("sirve");
				setChangeColorState(false);

				break;
			case "azul":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "verde":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "naraja":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "amarillo":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "celeste":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "lima":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "violeta":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "rosa":
				console.log("sirve");
				setChangeColorState(false);
				break;
			case "gris":
				console.log("sirve");
				setChangeColorState(false);
				break;
			default:
				break;
		}
	};

	return (
		<>
			{changeColorState && (
				<div className="container absolute bg-white -right-2 top-auto mt-7 shadow-lg border-2 w-64 m-5 rounded-md overflow-x-hidden">
					<p className="mx-2 text-gray-700 font-medium">Change Color</p>
					<div className="mx-3 grid grid-cols-5 gap-4 my-2 rounded-full">
						<input
							type="radio"
							checked
							className="form-radio h-6 w-6 text-rojo"
						/>

						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-naranja"
						/>

						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-amarillo"
						/>

						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-azul"
						/>

						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-celeste"
						/>
						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-verde"
						/>

						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-lima"
						/>
						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-violeta"
						/>
						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-rosa"
						/>
						<input
						type="radio"
						checked
						className="form-radio h-6 w-6 text-gris"
						/>
					</div>
				</div>
			)}
		</>
	);
};
