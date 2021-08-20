import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { DivModal, TitleModal } from "../../components/Modal";

// images
import deleted from "../../assets/Delete red.svg";
import task from "../../assets/Tasks.svg";
import project from "../../assets/Project.svg";
import eye from "../../assets/Show.svg";
import text from "../../assets/Text.svg";
import time from "../../assets/Time.svg";
import edited from "../../assets/Edit.svg";

export const GirdModalItems = ({ ItemModal, setItemModal }) => {
  const handleChange = async (e) => {
    setItemModal(false);
  };

  return (
    <>
      {ItemModal && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setItemModal(false);
          }}
        >
          <DivModal $color_modal>
            <TitleModal $title_color_modal>Change Color</TitleModal>
              <div className="flex-col mx-3 my-2">
                <button className="flex">
                  <img src={eye} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-gray-500 font-medium">View</p>
                </button>

                <button className="flex">
                  <img src={edited} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-gray-500 font-medium">Edit</p>
                </button>

                <button className="flex">
                  <img src={text} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-gray-500 font-medium">View Rates</p>
                </button>
                <button className="flex">
                  <img src={project} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-gray-500 font-medium">View lessons</p>
                </button>
                <button className="flex">
                  <img src={task} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-gray-500 font-medium">
                    View mini chanllenges
                  </p>
                </button>
                <button className="flex">
                  <img src={time} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-gray-500 font-medium">
                    View admin hours
                  </p>
                </button>
                <hr />
                <button className="flex">
                  <img src={deleted} alt="edit" className="mx-1 mt-1" />
                  <p className="mx-2 text-red-400 font-medium">
                    Delete Teacher
                  </p>
                </button>
              </div>
          </DivModal>
        </OutsideClickHandler>
      )}
    </>
  );
};
