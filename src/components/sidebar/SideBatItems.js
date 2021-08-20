import React from "react";
import "./style.css";
import { Li } from "../Li";
import { Span } from "../Span";

export const SideBatItems = ({
  name,
  image,
  openSidebar,
  handleSelected,
  id,
  hide,
}) => {
  const itemSelected = (id) => {
    handleSelected(id);
  };

  return (
    <>
      <Li
        $items_sidebar
        className={`${hide && "bg-white shadow-lg"}`}
        onClick={() => itemSelected(id)}
      >
        <div className="flex items-center">
          <img src={image} alt="icon" />
          {openSidebar && <Span $span_sidebar>{name}</Span>}
        </div>
        <span class="tooltip">{name}</span>
      </Li>
    </>
  );
};
