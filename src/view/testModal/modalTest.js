import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Title } from "../../components/Title";
import { labels } from "../../data/dataModal";
import { LabelsTest } from "./LabelsTest";
import { DivModal, InputModal, ButtonModal } from "../../components/Modal";
// imagen
import Pantone from "../../assets/Pantone.svg";
import Close from "../../assets/X.svg";

export const ModalTest = ({ modalState, setModalState }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {modalState && (
        <Overlay>
          <Modal $primary_modal>
            <div className="flex justify-between">
              <Title $modaltitle>Add New Label</Title>
              <Button $modalclose>
                <img
                  src={Close}
                  alt="close Modal"
                  onClick={() => setModalState(false)}
                />
              </Button>
            </div>

            {labels.map((label) => (
              <LabelsTest key={label.id} {...label} />
            ))}

            <DivModal $container_rounded>
              <div className="flex py-3">
                <BlockColor />
                <InputModal
                  $label_modal_input
                  type="text"
                  onChange={handleInputChange}
                />
              </div>
              <ButtonModal $icon_button_pantone>
                <img src={Pantone} alt="New Label" />
              </ButtonModal>
            </DivModal>

            <Button $border100>Done</Button>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BlockColor = styled.div`
  width: 24px;
  height: 24px;
  margin: 5px;
  margin-left: 10px;
  border-radius: 5px;
  background: ${(props) => (props.color ? `${props.color}` : "#409FFF")};
`;
