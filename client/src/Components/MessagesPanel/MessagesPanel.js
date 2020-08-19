import React, { useState, useEffect } from "react";
import {
  getAllMessages,
  // getByEmail,
  // formTest,
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
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [name, setName] = useState([]);
  const [allMessages, setAllMessages] = useState([]);

  const loadMessages = () => {
    getAllMessages()
      .then((data) => {
        let allMessages = [],
          tempEmail = [],
          tempMessage = [],
          tempName = [];

        // TODO: Fix this mess, tired bain = bad
        data.data.forEach((res) => {
          tempEmail.push(res.email);
          tempName.push(res.name);
          tempMessage.push(res.message);
        });

        console.log(`AllMessages: \n${allMessages}`);
        setName(tempName);
        setEmail(tempEmail);
        setMessage(tempMessage);
      })
      .finally(() =>
        console.log(`All States: \n${name[0]} ${email} ${message}`)
      );
  };

  useEffect(() => {
    console.log(`AllMessages from useEffect: ${allMessages}`);
  }, [email]);

  const loadDisplays = () => {};

  return (
    <div
      className="bg-white overflow-hidden rounded-lg shadow-lg p-0 text-sm mx-6"
      data-testid="cardContainer"
    >
      <div
        className="flex w-full bg-gray-300 text-lg shadow-outline py-3 px-4 text-gray-800 select-none"
        data-testid="title"
      >
        <p className="ml-auto" id="title">
          {/* {name !== "" ? name : "No data"} */}
        </p>
        <div className="flex ml-auto w-auto" id="statusDate">
          <div
            className="flex mx-4 bg-orange-600 uppercase rounded-full px-3 py-1 text-xs text-gray-300 font-bold shadow select-none"
            data-testid="status"
          >
            Status
          </div>
        </div>
      </div>
      <div className="px-3 py-3" data-testid="commentContainer">
        <div
          className="sm:flex-wrap bg-gray-300 rounded-lg my-2 mx-2 py-4 px-4 shadow-inner select-none text-black font-medium"
          data-testid="comment"
        >
          Message:
          {/* {message !== "" ? message : "No data"} */}
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
          {/* Email: {email} */}
        </div>

        <div className="flex items-center">
          <div
            className="flex py-6 px-4 rounded-full bg-blue-700 text-white text-center justify-center items-center font-bold capitalize ml-4 mr-auto shadow-md border border-white"
            data-testid="initials"
          >
            <p className="text-xs">Reply</p>
          </div>

          <div
            className="flex py-6 px-3 rounded-full bg-green-600 text-white text-center self-end items-center font-bold capitalize ml-auto mr-4 shadow-md border border-white"
            data-testid="initials"
            onClick={() => loadMessages()}
          >
            <p className="text-xs">Refresh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
