import React, { useState } from "react";
import ReactModal from "react-modal";

export const Modal = (props) => {
  const [modalProps, setModalProps] = useState(
    { isOpen: props.isOpen, contentLabel: props.contentLabel },
    { className: props.className }
  );

  return (
    <ReactModal isOpen={modalProps.isOpen} className={modalProps.className}>
      <p>{modalProps.contentLabel}</p>
    </ReactModal>
  );
};
