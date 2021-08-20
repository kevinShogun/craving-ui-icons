import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Div } from "../../components/Div";
import { ModalTest } from "./modalTest";

export const TestViewModal = () => {
	const [ModalView, setModalView] = useState(false);

	return (
		<>
			<Div $containerprymari>
			
				<Button $primary onClick={() => setModalView(!ModalView)}>
					Abrir Modal
				</Button>

				<ModalTest modalState={ModalView} setModalState={setModalView} />
			</Div>
		</>
	);
};
