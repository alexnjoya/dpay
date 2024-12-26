import React from "react";
import DashboardCard from "./dashboardcard";

const Dashboard: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col items-start justify-start mt-4 mb-2 p-4">
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 mb-2 md:grid-cols-2 ">
        <DashboardCard
          title="Dues Payment Status"
          status="Not Paid"
          isRegistered={false}
        />
        <DashboardCard
          title="Manual Registration Status"
          status="Not Registered"
          isRegistered={false}
        />
      </div>

      </div>

      {/* Greeting Section */}
      <div className=" items-start justify-start text-left mb-4 p-5 rounded-md bg-white">
        <h1 className="text-2xl font-bold mt-2 text-gray-800">Hello Alex,</h1>
        <div className="flex items-start justify-start  text-lg">
        Welcome to your dashboard. Kindly proceed with payment of dues
        </div>
        <div className="mt-1 flex item-end justify-end">
        <button className="px-20 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700">
          Pay Dues
        </button>
      </div>
      </div>

      {/* Register Button */}
      
      </div>
  );
};

export default Dashboard;
