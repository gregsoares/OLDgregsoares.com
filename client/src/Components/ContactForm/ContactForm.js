import React from "react";

export const ContactForm = () => {
  return (
    <div
      className="w-full mx-auto max-w-md mb-6"
      data-testid="ContactFormContainer"
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="visits"
          >
            You know what to do.
          </label>

          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="messageBox"
            type="text"
            placeholder="Don't be shy, I'm a geek."
            cols={20}
            aria-autocomplete={true}
          />
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white hover:shadow-md shadow-sm transition-all font-semibold hover:font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};
