'use client'

import { useState } from 'react';


interface Transaction {
  id: string;
  name: string;
  account: string;
  balance: string;
  date: string;
}

const TransactionTable: React.FC = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const transactions: Transaction[] = [];

  return (
    <>
      <div className="p-0">
      <div className="flex justify-between items-center mb-1">
            <h2 className="text-xl pt-2 pb-2">Payment History</h2>
            <button className=" text-[#B6BAC1] px-4 py-1 rounded-md border border-[#B6BAC1]">Print all Reciept</button>
    
      </div>
        

        <div className="min-w-full p-4 bg-white shadow-sm  rounded-lg">
          

          <table className="min-w-full">
            <thead>
              <tr className=" text-left">
                <th className="px-4 py-2">
                  <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                </th>
                <th className="px-4 py-2 font-semibold">Name</th>
                <th className="px-4 py-2 font-semibold">Account</th>
                <th className="px-4 py-2 font-semibold">Balance</th>
                <th className="px-4 py-2 font-semibold">Date</th>
                <th className="px-4 py-2 font-semibold">Transaction ID</th>
                <th className="px-4 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-2 text-center">
                 
                  </td>
                </tr>
              ) : (
                transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={() => { /* Handle individual checkbox change */ }}
                      />
                    </td>
                    <td className="px-4 py-2">{transaction.name}</td>
                    <td className="px-4 py-2">{transaction.account}</td>
                    <td className="px-4 py-2">{transaction.balance}</td>
                    <td className="px-4 py-2">{transaction.date}</td>
                    <td className="px-4 py-2">{transaction.id}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-800">Print Receipt</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
         
        </div>
         <div className="text-center p-2 "> <p>No content</p></div>
      </div>
    </>
  );
}

export default TransactionTable;
