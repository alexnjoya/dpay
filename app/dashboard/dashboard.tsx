import React from "react";
import DashboardCard from "./dashboardcard";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start mt-4 mb-2 p-4 bg-white">
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

      {/* Greeting Section */}
      <div className="flex-col-2 ">
        <h1 className="text-2xl font-bold mt-2 text-gray-800">Hello Alex,</h1>
        <div className="flex items-start justify-start pb-5 text-md">
            <h6>
            Welcome to your dashboard. Kindly proceed with payment of dues
            </h6>
       
        <button className="px-10 py-3 ml-20 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Register
        </button>
        </div>
      </div>

      {/* Register Button */}
      
    </div>
  );
};

export default Dashboard;
