import React from "react";

// TODO: useContext(messages) to reload this panel

/* @Props
 *
 * title  -  String
 * status  -  String
 * date  -  String
 * comment  -  String
 * initials  -  String
 * position  -  String (Employee, CEO...)
 * name  -  String
 * jobTitle  -  String
 *
 */

// TODO: swap from props to context for when a new message gets send/Refresh (timer or manual)
export const MessagesPanel = (props) => {
  const {
    title,
    status,
    date,
    comment,
    initials,
    position,
    name,
    jobTitle,
  } = props;
  return (
    <div
      className="bg-white overflow-hidden rounded-lg shadow-lg p-0 text-sm mx-6"
      data-testid="cardContainer"
    >
      <div
        className="flex text-center w-full bg-gray-300 text-lg shadow-outline py-3 px-4 text-gray-800 select-none"
        data-testid="title"
      >
        <div className="flex mr-auto w-auto" id="statusDate">
          <div
            className="flex mx-4 bg-orange-600 uppercase rounded-full px-3 py-1 text-xs text-gray-300 font-bold shadow select-none"
            data-testid="status"
          >
            {status}
          </div>

          <div className="flex select-none" data-testid="date">
            {date}
          </div>
        </div>
        <p className="mr-auto" id="title">
          {title}
        </p>
      </div>
      <div className="px-3 py-3" data-testid="commentContainer">
        <div
          className="sm:flex-wrap bg-gray-300 rounded-lg my-2 mx-2 py-4 px-4 shadow-inner select-none text-black font-medium"
          data-testid="comment"
        >
          {comment}
        </div>
      </div>

      <div
        className=" bg-gray-300 pt-1 pb-2 shadow-outline"
        data-testid="cardFooterContainer"
      >
        <div
          className="uppercase font-bold text-gray-700 text-opacity-75 text-xs my-2 ml-4 select-none"
          data-testid="position"
        >
          {position}
        </div>

        <div className="flex px-2 mb-2">
          <span
            className="flex h-12 w-12 rounded-full bg-blue-700 text-white text-center justify-center items-center font-bold capitalize ml-3 "
            data-testid="initials"
          >
            {initials}
          </span>

          <div className="inline ml-4" data-testid="namePositionContainer">
            <p className=" font-bold  select-none" data-testid="name">
              {name}
            </p>
            <p
              className=" text-gray-700 capitalize my-2 text-xs select-none"
              data-testid="jobTitle"
            >
              {jobTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
