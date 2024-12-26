import React from "react";
import Image from "next/image";
import Close from "../components/assets/close.png"

interface DashboardCardProps {
  title: string;
  status: string;
  isRegistered: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, status, isRegistered }) => {
  return (
    <div className="flex flex-col items-center justify-center w-76 h-32 p-4 border border-black rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 text-center">{title}</h3>
      <div
        className={`flex items-center justify-center mt-2 px-16 py-3 text-sm font-semibold text-white rounded-xl ${
          isRegistered ? "bg-green-500" : "bg-[#D11515]"
        }`}
      >
        {status}
        <Image 
        className=" p-1"
        src={Close}
        alt="close icone"
        width={30}
        height={30}
        />
      </div>
    </div>
  );
};

export default DashboardCard;
