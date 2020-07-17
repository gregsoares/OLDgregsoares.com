import React, { useState } from "react";

// Todo: After setState is implemented, Implement: sendMessage

export const ContactForm = () => {
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  function sendMessage() {
    const { name, email, message } = input;
    console.debug(JSON.stringify(name));
    console.debug(JSON.stringify(email));
    console.debug(JSON.stringify(message));
  }

  return (
    <div
      className="w-full mx-auto max-w-md mb-6 bg-gray-200"
      data-testid="ContactFormContainer"
    >
      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-md text-center font-bold mb-2"
            htmlFor="visits"
          >
            You know what to do.
          </label>
          <input
            className="border text-center hover:bg-white rounded py-2 px-3 leading-tight focus:outline-none bg-gray-200 text-gray-800 focus:text-black my-2 shadow-sm focus:shadow-outline"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            value={input.name}
            type="text"
            id="name_input"
            placeholder="Name"
            required={true}
            data-testid="nameInput"
          />
          <input
            className="border text-center hover:bg-white rounded py-2 px-3 leading-tight focus:outline-none bg-gray-200 text-gray-800 focus:text-black my-2 shadow-sm focus:shadow-outline"
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
              className="text-md lg:text-lg font-medium mb-2 block"
              htmlFor="messageLabel"
              id="messageLabel"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none bg-gray-200 focus:bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white hover:shadow-md shadow-sm transition-all font-semibold hover:font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => sendMessage()}
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
