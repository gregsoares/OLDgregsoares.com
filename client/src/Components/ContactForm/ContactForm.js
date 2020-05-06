import React from 'react'

export const ContactForm = () => {
  return (
    <div className="w-full max-w-xs" data-testid="ContactFormContainer">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visits">
            Visits Per Day
      </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rooms">
            Rooms htmlFor Patient Care
      </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="roomPatientCare" type="text" placeholder="Rooms htmlFor Patient Care" />
          <p className="text-red-500 text-xs italic">Rooms htmlFor Patient Care</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Calculate
      </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Contact Us
      </a>
        </div>
      </form>
    </div>
  )
}
