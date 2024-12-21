
import React from 'react';
import { BellIcon, UserIcon, EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';


const DashboardHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center  mt-8 bg-gray-100 p-5 shadow">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute left-3 h-6 w-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="rounded-full bg-gray-200 pl-10 px-20 py-2"
          />
        </div>

        <div className="flex items-center space-x-3 p-2 pr-4 bg-blue-700">
          <button className="relative">
            <span className="absolute top-0 right-0 bg-red-600 rounded-full h-2 w-2"></span>
            <EnvelopeIcon className="h-6 w-6 text-white" />
          </button>
          <button className="relative">
            <span className="absolute top-0 right-0 bg-red-600 rounded-full h-2 w-2"></span>
            <BellIcon className="h-6 w-6 text-white" />
          </button>
          <div className="flex items-center space-x-2">
            <UserIcon className="h-8 w-8 p-1  bg-gray-200 rounded-full cursor-pointer text-blue-700" />
            <div className=" flex items-center text-white">
                <span className="text-lg text-white">blockdevrel</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
