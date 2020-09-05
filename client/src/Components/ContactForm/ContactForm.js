import React, { useState } from "react";
import axios from "axios";

// FIXME: Name + Email input are side-by-side, add mx & my and stack them
// TODO: Handle error & redirect to "/",
// TODO: ADD save state in localStorage
export const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { name, email, message } = input;
    const sendData = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post("/form/sendMessage", sendData)
      .then((data) => {
        setMessageSent(true);
        setInput({ name: "", email: "", message: "" });
      })
      .catch((res) => {
        console.debug(
          `ContactForm: =>> Caught Error: form/sendMessage: \n${res}`
        );
        console.log(messageSent);
      });
  };

  return (
    <div
      className="w-full py-3 brand-lighterBlue"
      data-testid="ContactFormContainer"
    >
      <form
        onSubmit={sendMessage}
        className="max-w-md px-6 pt-6 pb-6 mx-auto my-6 bg-gray-200 rounded shadow-md"
      >
        <div className="items-center mb-4">
          <label
            className={
              messageSent !== true
                ? "block text-gray-700 text-sm text-center font-bold mb-2"
                : "hidden"
            }
            htmlFor="formTitle"
          >
            Contact Me
          </label>
          <label
            className={
              messageSent === true
                ? "block text-gray-700 text-md text-center font-bold mb-2"
                : "hidden"
            }
            htmlFor="formTitle"
          >
            Your message has been sent successfully.
            <br /> Thank you for taking the time to reach out.
          </label>
          <input
            className="w-full px-2 py-2 mx-3 my-2 font-medium leading-tight text-blue-800 bg-gray-200 border border-blue-500 rounded shadow-sm md:w-2/3 hover:border-blue-700 xs:-mx-3 hover:bg-white focus:outline-none focus:shadow-outline"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            value={input.name}
            type="text"
            id="name_input"
            placeholder="Name"
            required={true}
            data-testid="nameInput"
          />
          <input
            className="w-full px-2 py-2 mx-3 my-2 font-medium leading-tight text-blue-800 bg-gray-200 border border-blue-500 rounded shadow-sm md:w-2/3 hover:border-blue-700 xs:-mx-3 hover:bg-white focus:outline-none focus:shadow-outline"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            value={input.email}
            type="email"
            id="email_input"
            placeholder="Email"
            required={true}
            data-testid="emailInput"
          />

          <div className="my-3" id="messageArea">
            <label
              className="block mb-2 font-medium text-md lg:text-lg"
              htmlFor="messageLabel"
              id="message_input"
            >
              Message:
            </label>
            <textarea
              className="w-full p-2 font-medium leading-tight text-blue-800 bg-gray-200 border border-blue-400 rounded shadow appearance-none focus:bg-white hover:bg-white focus:border-blue-700 focus:text-blue-800 focus:outline-none focus:shadow-outline"
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              value={input.message}
              id="message_box"
              type="text"
              placeholder=""
              rows={12}
              data-testid="messageBox"
            />
          </div>
        </div>

        <div className="w-full text-center" id="sendMessageButtonContainer">
          <button
            className="px-4 py-2 font-semibold text-gray-200 transition-all bg-blue-700 border border-blue-600 rounded shadow-md hover:text-blue-800 hover:bg-gray-300 hover:border-blue-700 hover:shadow-md hover:font-bold focus:outline-none focus:shadow-outline"
            onClick={(e) => sendMessage(e)}
            type="button"
            data-testid="sendMessageBtn"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
