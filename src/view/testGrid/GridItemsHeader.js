import React, { useState } from "react";
import { Grid, GridText } from "../../components/Grid";
import arrow from "../../assets/Arrow Down 1.svg";

export const GridItemsHeader = ({
  GridItemHeader1,
  GridItemHeader2,
  GridItemHeader3,
}) => {
  const [firstArrow, setFirstArrow] = useState(false);
  const [secondArrow, setSecondAdrrow] = useState(false);
  const [thirdArrow, setThirdArrow] = useState(false);
  const [fourthArrow, setFourthArrow] = useState(false);

  const handleState = (itemKey) => {
    
    switch (itemKey) {
      case 1:
        setFirstArrow(true);
        setSecondAdrrow(false);
        setThirdArrow(false);
        setFourthArrow(false);
        break;
      case 2:
        setFirstArrow(false);
        setSecondAdrrow(true);
        setThirdArrow(false);
        setFourthArrow(false);
        break;
      case 3:
        setFirstArrow(false);
        setSecondAdrrow(false);
        setThirdArrow(true);
        setFourthArrow(false);
        break;
      case 4:
        setFirstArrow(false);
        setSecondAdrrow(false);
        setThirdArrow(false);
        setFourthArrow(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="ml-8">
        <Grid $grid_items>
          <input
            type="checkbox"
            className="cursor-pointer rounded-md text-gray-300 w-5 h-5"
          />

          {/**empaquetalo si puedes */}

          <button
            className="flex cursor-pointer"
            onClick={() => handleState(1)}
          >
            <GridText $grid_items_header> NAME </GridText>
            <img
              src={arrow}
              alt="arrow Dow"
              className={`mx-2 mt-2 ${firstArrow && "transform rotate-180"}`}
            />
          </button>

          <button
            className="flex cursor-pointer"
            onClick={() => handleState(2)}
          >
            <GridText $grid_items_header> {GridItemHeader1}</GridText>
            <img
              src={arrow}
              alt="arrow Dow"
              className={`mx-2 mt-2 ${secondArrow && "transform rotate-180"}`}
            />
          </button>

          <button
            className="flex cursor-pointer"
            onClick={() => handleState(3)}
          >
            <GridText $grid_items_header> {GridItemHeader2}</GridText>
            <img
              src={arrow}
              alt="arrow Dow"
              className={`mx-2 mt-2 select-none ${
                thirdArrow && "transform rotate-180"
              }`}
            />
          </button>

          <button
            className="flex cursor-pointer"
            onClick={() => handleState(4)}
          >
            <GridText $grid_items_header> {GridItemHeader3}</GridText>
            <img
              src={arrow}
              alt="arrow Dow"
              className={`mx-2 mt-2 select-none ${
                fourthArrow && "transform rotate-180"
              }`}
            />
          </button>
        </Grid>
      </div>
    </>
  );
};
