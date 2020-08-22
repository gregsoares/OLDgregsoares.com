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
      .then((response) => {
        console.debug(`frontEnd res from post: ${response.statusText}`);
      })
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
      className="w-full brand-lighterBlue"
      data-testid="ContactFormContainer"
    >
      <form
        onSubmit={sendMessage}
        className="max-w-md px-8 pt-6 pb-8 mx-auto my-6 bg-gray-200 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            className={
              messageSent !== true
                ? "block text-gray-700 text-sm text-center font-bold mb-2"
                : "hidden"
            }
            htmlFor="formTitle"
          >
            You know what to do.
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
            className="py-2 my-2 -mx-3 leading-tight text-center text-gray-800 bg-gray-200 border rounded shadow-sm hover:bg-white focus:outline-none focus:text-black focus:shadow-outline"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            value={input.name}
            type="text"
            id="name_input"
            placeholder="Name"
            required={true}
            data-testid="nameInput"
          />
          <input
            className="py-2 my-2 -mx-3 leading-tight text-center text-gray-800 bg-gray-200 border rounded shadow-sm hover:bg-white focus:outline-none focus:text-black focus:shadow-outline"
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
              className="w-full py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:bg-white hover:bg-white focus:outline-none focus:shadow-outline"
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              value={input.message}
              id="message_box"
              type="text"
              placeholder="Don't be shy, I'm a geek."
              rows={12}
              data-testid="messageBox"
            />
          </div>
        </div>

        <div className="w-full text-center" id="sendMessageButtonContainer">
          <button
            className="px-4 py-2 font-semibold text-gray-200 transition-all bg-blue-700 border border-gray-400 rounded shadow-md hover:text-blue-800 hover:bg-gray-300 hover:border-blue-700 hover:shadow-md hover:font-bold focus:outline-none focus:shadow-outline"
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
