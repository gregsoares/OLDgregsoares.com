import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
// TODO: 1: Make it show up and close on click
// TODO: Make it work through props if necessary args are not provided then fallback to default.
// TODO: Close only on click outsite of the modal, inside open link
export const Modal = () => {
  ReactModal.setAppElement(document.getElementById("root"));

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Title One  ",
    subtitle: "Subtitle Test",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, sequi voluptatem dicta minima dolorem cum. Nisi veniam at aperiam non, possimus eius aliquam laudantium maxime ab! Earum delectus animi minus.",
  });
  // const openModal = () => {
  //   setShowModal(true);
  // };

  const modalStyle = {
    content: {
      // css here
      top: "15%",
      right: "15%",
      bottom: "15%",
      left: "15%",
    },
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="w-full mx-8 my-8 text-white bg-transparent">
        <div className="w-full">
          <button
            className="px-4 py-3 mx-auto my-2 border"
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </button>
        </div>
        <ReactModal
          contentLabel={modalContent.title}
          isOpen={showModal}
          style={modalStyle}
        >
          <div className="w-full">
            <div className="relative w-full h-full">
              <p
                className="py-3 text-2xl font-semibold text-center"
                id="modalImgContainer"
              ></p>
            </div>
            <p
              className="px-3 py-2 my-2 font-semibold text-center bg-red-400 border hover:bg-red-600 hover:text-white"
              onClick={closeModal}
            >
              Close
            </p>
          </div>
        </ReactModal>
      </div>
    </div>
  );
};

/* ==> modal with props skeleton <==
export const Modal = (props) => {
  const [modalProps, setModalProps] = useState(
    { isOpen: props.isOpen, contentLabel: props.contentLabel },
    { className: props.className }
  );

  return (
    <ReactModal
      onRequestClose={() => setModalProps({ ...modalProps, isOpen: false })}
      isOpen={modalProps.isOpen}
      className={modalProps.className}
    >
      <p>{modalProps.contentLabel}</p>
    </ReactModal>
  );
};



*/
