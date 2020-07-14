import React from "react";
import ReactModal from "react-modal";

export const Modal = (props) => {
  const { isOpen, contentLabel } = props;

  return (
    <ReactModal isOpen={isOpen} >
      <p>{contentLabel}</p>
    </ReactModal>
  );
};
