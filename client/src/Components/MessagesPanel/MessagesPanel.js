import React, { useState, useEffect } from "react";
import {
  getAllMessages,
  getByEmail,
  formTest,
} from "../../assets/api/messages";
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
export const MessagesPanel = () => {
  // const [title, setTitle] = useState({"title": ""})
  // const [status, setStatus] = useState({"status": ""})
  // const [date, setDate] = useState({"date": ""})
  // const [comment, setComment] = useState({"comment": ""})
  // const [initials, setInitials] = useState({"initials": ""})
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  // const [jobTitle, setJobTitle] = useState({"jobTitle": ""})

  const loadMessages = () => {
    getAllMessages().then((data) => {
      console.debug(`loadMessages Reports:\n
      ${name.name}
      Res: ${data.data[0].name}

      ${message.message}
      Res: ${data.data[0].message}

      `);
      let newName = data.data[0].name;
      let newMessage = data.data[0].message;
      setName(newName);
      setMessage(JSON.stringify(newMessage));
    });
  };

  useEffect(() => {
    getAllMessages().then((data) => {
      setName(data.data[0].name);
      setMessage(data.data[0].message);
      console.debug(`useEffect Reports:
      ${name.name}
      Res: ${data.data[0].name}

      ${message.message}
      Res: ${data.data[0].message}
      `);
    });
  }, [name.name]);
  return (
    <div
      className="bg-white overflow-hidden rounded-lg shadow-lg p-0 text-sm mx-6"
      data-testid="cardContainer"
      // onLoad={() => loadMessages()}
    >
      <div
        className="flex w-full bg-gray-300 text-lg shadow-outline py-3 px-4 text-gray-800 select-none"
        data-testid="title"
      >
        <p className="ml-auto" id="title">
          {name.name !== "" ? name.name : "No data"}
          {/* {() => useState(name)} */}
        </p>
        <div className="flex ml-auto w-auto" id="statusDate">
          <div
            className="flex mx-4 bg-orange-600 uppercase rounded-full px-3 py-1 text-xs text-gray-300 font-bold shadow select-none"
            data-testid="status"
          >
            TAG SAYING SOMETING
          </div>
        </div>
      </div>
      <div className="px-3 py-3" data-testid="commentContainer">
        <div
          className="sm:flex-wrap bg-gray-300 rounded-lg my-2 mx-2 py-4 px-4 shadow-inner select-none text-black font-medium"
          data-testid="comment"
        >
          {message.message !== "" ? message.message : "No data"}
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
          Someting here POSITION
        </div>

        <div className="flex px-2 mb-2">
          <span
            className="flex h-12 w-12 rounded-full bg-blue-700 text-white text-center justify-center items-center font-bold capitalize ml-3 shadow-md border border-white"
            data-testid="initials"
            onClick={() => loadMessages()}
          >
            Refresh
          </span>

          <div className="inline ml-4" data-testid="namePositionContainer">
            <p className=" font-bold  select-none" data-testid="name">
              some NAME
            </p>
            <p
              className=" text-gray-700 capitalize my-2 text-xs select-none"
              data-testid="jobTitle"
            >
              JOB TITLE ?? WHAT?!SECTION -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
