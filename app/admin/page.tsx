import React from "react";
import Sidebar from "../components/common/sidebar";
import DashboardHeader from "../components/common/DashboardHeader";
import TransactionTable from "../components/common/TransactionTable";
import CardStats from "../components/common/CardStats";
import Wallet from "../components/assets/wallet.png";
import Paid  from "../components/assets/paydue.png" 
import Register from "../components/assets/manualregistion.png"
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
            icon={<Image src={Paid} alt="Wallet Icon " width={24} height={24} />}
            title="Paid Students"
            value="400"
            color="blue"
          />
          <CardStats
            icon={<Image src={Register} alt="Wallet Icon" width={24} height={24} />}
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
