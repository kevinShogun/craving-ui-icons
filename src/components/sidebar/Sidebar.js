import React, { useState } from "react";
// icons
// images
import Project from "../../assets/Project.svg";
import Shopping from "../../assets/Shopping.svg";
import task from "../../assets/Tasks.svg";
import text from "../../assets/Text.svg";
import calendar from "../../assets/Calendar.svg";
import Folder from "../../assets/Folder.svg";
import logo from "../../assets/logo.svg";
import "./style.css";
import { SideBatItems } from "./SideBatItems";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export const Sidebar = () => {
  const [openSidebar, setopenSidebar] = useState(true);


  const [itemsSidebar, setitemsSidebar] = useState([
    {
      id: "1",
      name: "Teacher",
      image: { Project },
      hide: false
    },
    {
      id: "2",
      name: "Teacher Rates",
      image: { text },
      hide: false
    },
    {
      id: "3",
      name: "Register Lessons",
      image: { Project },
      hide: false
    },
    {
      id: "4",
      name: "Mini chanllenges",
      image: { task },
      hide: false
    },
    {
      id: "5",
      name: "Adimistrative hours",
      image: { calendar },
      hide: false
    },
    {
      id: "6",
      name: "Affiliate program",
      image: { Shopping },
      hide: false
    },
    {
      id: "7",
      name: "Reports",
      image: { Folder },
      hide: false
    },
  ]);


  const handleSelected = (id) => {

    let ItemsCopy = itemsSidebar.map((elem) => {
        if(elem.id === id){
          elem.hide = true;
        } else {
          elem.hide = false;
        }
        return elem;
    })
    
    setitemsSidebar(ItemsCopy);
  }


  return (
    <div className={`sidebar ${openSidebar && "open"}`}>
      <div className="logo_content flex m-5">
        <img src={logo} alt="Craving Icon" />

        <button onClick={() => setopenSidebar(!openSidebar)}>
          <HiOutlineMenuAlt2 className="mx-5 text-2xl cursor-pointer text-gray-500" />
        </button>
      </div>

      <ul class="nav-links">
        {itemsSidebar.map((itemSidebar) => (
          <SideBatItems
            key={itemSidebar.id}
            id={itemSidebar.id}
            name={itemSidebar.name}
            hide={itemSidebar.hide}
            image={Project}
            handleSelected={handleSelected}
            openSidebar={openSidebar}
          />
        ))}
      </ul>
    </div>
  );
};
