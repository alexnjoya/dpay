import Sidebar from "../components/common/sidebar";
import DashboardHeader from "../components/common/DashboardHeader";
import CardStats from "../components/common/CardStats";
import TransactionTable from "../components/common/TransactionTable";
import { FaUserFriends } from "react-icons/fa";
import React from "react";

const Dashboard: React.FC = () => {
  const active: React.CSSProperties = {
    backgroundColor: "blue"
  };

  return (
    <div className="flex bg-[F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5 ">
        <DashboardHeader />
        <h2 className="flex items-start justify-start pt-4 pb-10 text-2xl">
          Pay your departmental dues seamlessly
        </h2>
        <TransactionTable />
      </main>
    </div>
  );
};

export default Dashboard;
