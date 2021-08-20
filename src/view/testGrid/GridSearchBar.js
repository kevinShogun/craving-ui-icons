import React from "react";
import { Grid, GridInput } from "../../components/Grid";

import search from "../../assets/Search.svg";
import Filter from "../../assets/Filter.svg";
import arrowThin from "../../assets/Arrow-Down 2.svg";

export const GridSearchBar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Grid $grid_search_bar>
          <img src={search} alt="search icon" />
          <input
            type="text"
            className="texto w-3/4 bg-transparent"
            placeholder="Search teachers..."
          />
          <img src={Filter} alt="search icon" />
        </Grid>

        <GridInput $grid_btn_action>
          Action
          <img src={arrowThin} alt="arrow dowm" className="mx-2" />
        </GridInput>
      </div>
    </>
  );
};
