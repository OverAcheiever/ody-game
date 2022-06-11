import React from 'react'

export default function Hero() {
  return (
    <div
      className="
      flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-20">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          First Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p className="text-red-500 text-xs italic">
          Please fill out this field.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Last Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
      <div className="inline-block relative w-64 mt-20">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>feedback</option>
          <option>issue</option>
          <option>idea</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700 mt-10"
      >
        Add your comment
      </label>
      <div className="w-96 mt-1">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="shadow-2xl block w-full sm:text-sm rounded-md border-2 border-blue-600"
          defaultValue={''}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
        Submit
      </button>
    </div>
  )
}
