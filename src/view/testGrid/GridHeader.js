import React from "react";
import { GridText } from "../../components/Grid";
import plus from "../../assets/Plus.svg";

export const GridHeader = ({NameGridTable}) => {

  return (
    <>
      <div className="flex justify-between">
        <GridText $grid_title>{NameGridTable}</GridText>
        <button className="flex justify-between mx-5 my-8 bg-BlueOfficial px-4 text-white font-medium shadow-sm rounded-md">
          <img src={plus} alt="plus icons" className="my-3 mx-1" />
          <p className="my-2 mx1">Add Teacher</p>
        </button>
      </div>
    </>
  );
};
