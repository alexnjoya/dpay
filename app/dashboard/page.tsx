import React from "react";
import Sidebar from "../components/common/sidebar";
import DashboardHeader from "../components/common/DashboardHeader";
import TransactionTable from "../components/common/TransactionTable";
import Middle from "./dashboard"



const Dashboard: React.FC = () => {

  return (
    <div className="flex bg-[F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5 ">
        <DashboardHeader />
        <Middle />
        <TransactionTable />
      </main>
    </div>
  );
};

export default Dashboard;
