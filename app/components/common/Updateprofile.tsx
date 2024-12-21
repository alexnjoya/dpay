import React, { FC } from 'react';

const Settings: FC = () => {
  return (
    <>
      <div className="flex justify-start items-start h-auto mt-4 bg-white shadow-sm rounded-lg pl-20 pt-10">
        <form className="w-full flex flex-col mb-10 space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-1/2 px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Student Id"
            className="w-1/2 px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="email"
            className="w-1/2 px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <select
            name="level"
            className="w-1/2 p-3 border rounded-md bg-gray-50 focus:outline-blue-500"
          >
            <option value="">Level</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
          <button
            type="submit"
            className="w-36 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;