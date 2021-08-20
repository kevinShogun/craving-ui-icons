import React, { useState } from "react";
import styled from "styled-components";
import Pantone from "../../assets/Pantone.svg";
import Delete from "../../assets/Delete.svg";
import { DivModal, InputModal, ButtonModal } from "../../components/Modal";
import { ModalColor } from "./ModalColor";

export const LabelsTest = ({ id, content, color }) => {

  const [changeColor, setChangeColor] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <DivModal $container_rounded>
        <div className="flex py-3">
        <BlockColor color={color} />
          <InputModal
            $label_modal_input
            type="text"
            id={id}
            name="txtLabel"
            value={content}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex py-3">
          <ButtonModal $icon_button_pantone>
            <img
              src={Pantone}
              alt="New Label"
              onClick={() => setChangeColor(!changeColor)}
            />
          </ButtonModal>
          <ButtonModal $icon_button_delete>
            <img src={Delete} alt="Delete" />
          </ButtonModal>

          <ModalColor
            changeColorState={changeColor}
            setChangeColorState={setChangeColor}
          />

        </div>
      </DivModal>
    </>
  );
};

export const BlockColor = styled.div`
  width: 24px;
  height: 24px;
  margin: 5px;
  margin-left: 10px;
  border-radius: 5px;
  background: ${(props) => (props.color ? `${props.color}` : "#409FFF")};
`;
