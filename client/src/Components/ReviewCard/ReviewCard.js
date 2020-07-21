import React from "react";
export const ReviewCard = () => {
  return (
    <div
      className="bg-white overflow-hidden rounded-lg shadow-lg p-0 text-sm w-full max-w-md"
      id="cardContainer"
    >
      <div
        className="bg-gray-200 mb-2 py-4 px-4 text-gray-800 select-none"
        id="cardTitle"
      >
        The title of the card here
      </div>
      <div className=" flex border-b pb-4 py-2 w-full " id="reviewDateSection">
        <div
          className="mx-4 my-1 bg-orange-600 uppercase rounded-full px-3 py-1 text-xs text-gray-200 font-bold shadow select-none"
          id="reviewContainer"
        >
          Under Review
        </div>

        <div className="ml-auto mr-4 my-1 select-none" id="dataContainer">
          May 14, 1988
        </div>
      </div>

      <div className="px-3 py-3" id="commentContainer">
        <div
          className="sm:flex-wrap bg-gray-200 rounded-lg my-2 mx-2 py-4 px-4 shadow  select-none text-black font-medium"
          id="commentSection"
        >
          Not so good at design, but that's relative. Thank You
        </div>
      </div>

      <div className=" bg-gray-300 pt-1 pb-2" id="cardFooterContainer">
        <div
          className="uppercase font-bold text-gray-700 text-opacity-75 text-xs my-2 ml-4  select-none"
          id="cardFooterTitle"
        >
          Employee
        </div>

        <div className="flex px-2 mb-2">
          <span className="flex h-12 w-12 rounded-full bg-blue-700 text-white text-center justify-center items-center font-bold capitalize ml-6 ">
            GS
          </span>

          <div className="inline ml-4" id="namePositionContainer">
            <p className=" font-bold  select-none">Greg Soares</p>
            <p
              className=" text-gray-700 capitalize my-2 text-xs select-none"
              id="footerTextContainer"
            >
              Major Noob
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
