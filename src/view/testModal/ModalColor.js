import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { DivModal, InputModal, TitleModal } from "../../components/Modal";

export const ModalColor = ({ changeColorState, setChangeColorState }) => {
  const [blockColor, setBlockColor] = useState("#409FFF");

  const handleColorChange = async (e) => {
    setBlockColor(e.target.value);
    setChangeColorState(false);
  };

  return (
    <>
      {changeColorState && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setChangeColorState(false);
          }}
        >
          <DivModal $color_modal>
            <TitleModal $title_color_modal>Change Color</TitleModal>
            <DivModal $color_modal_grid>
              <InputModal
                type="radio"
                $btn_radio_red
                value="#FD7972"
                checked
                readOnly
                onClick={handleColorChange}
              />

              <InputModal
                type="radio"
                value="#FE9F5E"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_orange
              />

              <InputModal
                type="radio"
                value="#FFD454"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_yellow
              />

              <InputModal
                type="radio"
                value="#409FFF"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_blue
              />

              <InputModal
                type="radio"
                value="#22CCE2"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_skyblue
              />
              <InputModal
                type="radio"
                value="#3DCC79"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_green
              />

              <InputModal
                type="radio"
                value="#AEE553"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_ligthgreen
              />
              <InputModal
                type="radio"
                value="#B656EB"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_purple
              />
              <InputModal
                type="radio"
                value="#FD72DE"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_pink
              />
              <InputModal
                type="radio"
                value="#7A7A7A"
                checked
                readOnly
                onClick={handleColorChange}
                $btn_radio_gray
              />
            </DivModal>
            <p>{blockColor}</p>
          </DivModal>
        </OutsideClickHandler>
      )}
    </>
  );
};
