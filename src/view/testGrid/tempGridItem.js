import React, { useState } from "react";
import AvatarCeleste from "../../assets/AvatarCeleste.svg";
import More from "../../assets/More.svg";
import { Grid, GridText } from "../../components/Grid";
import { GirdModalItems } from "./GirdModalItems";
export const TempGridItem = ({ role, name, location, email, phone }) => {
  
  const [ItemModal, setItemModal] = useState(false);

  return (
    <>
      <hr />
      <GirdModalItems ItemModal={ItemModal} setItemModal={setItemModal} />

      <Grid $grid_items>
        <div className="flex justify-around">
          <input
            type="checkbox"
            className="cursor-pointer rounded-md text-gray-300 w-5 h-5"
          />
          <img src={AvatarCeleste} alt="icon Person" />
        </div>

        <div className="flex-1">
          <GridText $grid_items_title>{name}</GridText>
          <GridText className="text-gray-500 text-xs font-normal">
            {role}
          </GridText>
        </div>

        <GridText $grid_items_title>{location}</GridText>  
        <GridText $grid_items_title>{email}</GridText>

        <div className="flex justify-around">
          <GridText $grid_items_title>{phone}</GridText>

          <div className="cursor-pointer"
            onClick={() => setItemModal(!ItemModal)}
          >
            <img src={More} alt="icon Person" />
          </div>
        </div>
      </Grid>
    </>
  );
};
