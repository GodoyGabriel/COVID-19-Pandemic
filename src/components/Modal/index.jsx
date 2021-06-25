import React from "react";
import { ModalContainer} from "./style";
import Modal from "react-bootstrap/Modal";
import { ImCross } from "react-icons/im";

export default function ModalComponent(props) {
  const { show, handleClose, children } = props;

  const closeModal = () => {
    if (typeof handleClose === "function") {
      handleClose();
    }
  };

  return (
    <ModalContainer show={show} onHide={closeModal} animation={true}>
      <Modal.Header>
          <ImCross onClick={closeModal} />
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </ModalContainer>
  );
}
