import React, { useState } from "react";
import styled from "styled-components";
import { ModalColor } from "./Colors/modalColor";

export const Labels = ({ id, content, color }) => {
  const [changeColor, setChangeColor] = useState(false);

  const hanldeChange = () => {};

  return (
    <>
      <div className="px-3 border-2 border-blur-lg flex justify-between m-5 rounded-md">
        <div className="flex py-3">
          <BlockColor color={color} />
          <input
            type="text"
            id="txtLabel"
            name="txtLabel"
            className="form-input outline-none border-none text-base mx-3 text-gray-700"
            value={content}
            onChange={hanldeChange}
          />
        </div>
        <div className="flex py-3">
          <button className="mx-2">
            <img
              src={`./assets/Pantone.svg`}
              alt="New Label"
              onClick={() => setChangeColor(!changeColor)}
            />
          </button>
          <button className="mx-3">
            <img src={`./assets/Delete.svg`} alt="Delete" />
          </button>
          <ModalColor
            changeColorState={changeColor}
            setChangeColorState={setChangeColor}
          />
        </div>
      </div>
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
