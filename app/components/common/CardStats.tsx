import React from 'react';

interface CardStatsProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color?: string;
}

const CardStats: React.FC<CardStatsProps> = ({ icon, title, value, color }) => {
  return (
    <div className={`flex flex-col items-start p-5 rounded shadow w-1/3 hover:shadow-lg transition-shadow duration-300 hover:bg-blue-200 ${color}`}>
      <div className="flex items-center justify-between w-full">
        <div className="bg-gray-200 rounded-full text-blue-800 text-xl p-4">{icon}</div>
      </div>
      <h3 className="mt-2 text-sm font-semibold text-gray-700">{title}</h3>
      <p className="text-lg font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default CardStats;
