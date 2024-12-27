import React from "react";
import Sidebar from "../components/common/sidebar";
import DashboardHeader from "../components/common/DashboardHeader";
import TransactionTable from "../components/common/TransactionTable";
import CardStats from "../components/common/CardStats";
import Wallet from "../components/assets/wallet.png"; 
import Image from "next/image"

// Ensure Wallet is a valid image path

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-[#F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5">
        <DashboardHeader />
        <div className="flex flex-row m-2 p-4">
          <CardStats
            icon={<Image src={Wallet} alt="Wallet Icon" />}
            title="Total balance"
            value="GHS 700.00"
            color="blue"
          />
          <CardStats
            icon={<Image src={Wallet} alt="Wallet Icon" />}
            title="Paid Students"
            value="400"
            color="blue"
          />
          <CardStats
            icon={<Image src={Wallet} alt="Wallet Icon" />}
            title="Registered students"
            value="400"
            color="blue"
          />
        </div>
        <TransactionTable />
      </main>
    </div>
  );
};

export default Dashboard;
