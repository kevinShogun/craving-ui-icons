import React from "react";
import styled from "styled-components";
import { labels } from "../data/data";
import { LabelDone } from "./LabelDone";
import { Labels } from "./Labels";
import { NewLabel } from "./NewLabel";

export const ModalLabels = ({modalState, setModalState}) => {

    
	return (
		<>
        {modalState && 
			<Overlay>
				<div className="container bg-white shadow-lg border-2 w-97 m-5 rounded-md overflow-x-hidden relative">
					<p className="text-2xl font-bold m-3 text-gray-700">Add New Label</p>
                    <button
                        className='bg-gray-100 hover:bg-gray-200 p-2 absolute top-7 right-7 transition-all duration-300 ease'
                        onClick={() => setModalState(false)}
                    >
                        <img src={`./assets/X.svg`}
                        alt='icon-x'
                        />
                    </button>
					{labels.map((label) => (
						<Labels key={label.id} {...label} />
					))}
					<NewLabel />
					<LabelDone />
				</div>
			</Overlay>
        }
		</>
	);
};

const Overlay = styled.div`

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0,.5);

    display: flex;
    align-items: center;
    justify-content: center;

`;