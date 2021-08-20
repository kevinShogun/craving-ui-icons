import React from "react";
import { Paginacion } from "../../components/Paginacion";
import arrowThin from "../../assets/Arrow-Down 2.svg";

export const GridFooter = ({cantPaginas}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="mt-3 flex">
          <button className="flex justify-between m-5 text-gray-500 font-semibold bg-gray-100 py-1 px-3 rounded-lg">
            <p className="my-2 mx-1">{cantPaginas}</p>
            <img src={arrowThin} alt="arrow dowm" className="my-4 mx-1" />
          </button>
          <p className="mt-8 font-medium text-gray-500">
            showing 1 - 10 of 100
          </p>
        </div>
        <div className="mt-8 mx-5">
          <Paginacion />
        </div>
      </div>
    </>
  );
};
