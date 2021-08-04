import React from "react";
import { BlockColor } from "./Labels";
import '../components/Colors/reset.css';

export const NewLabel = () => {
  const hanldeChange = () => {};

  const hanldeEditColor = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className='px-3 border-2 border-blur-lg flex justify-between m-5 rounded-md'>
      <form onSubmit={handleSubmit}>
        <div className="flex py-3">
          <BlockColor />
          <input
            type="text"
            id="newLabel"
            name="newLabel"
            className="form-input ring-white focus:ring-transparent text-base mx-3 text-gray-700 texto"
            onChange={hanldeChange}
          />
        </div>
      </form>
      <div className="flex py-3">
        <button type="button" className="mx-2" onClick={hanldeEditColor}>
          <img src={`./assets/Pantone.svg`} alt="New Label" />
        </button>
      </div>
    </div>
  );
};
