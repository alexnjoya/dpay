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
        

        <div className="min-w-full p-4 bg-white shadow-sm  rounded-lg">
          
          <div className=  "grid grid-cols-1 gap-4 mb-2 md:grid-cols-2">
          <div className="mr-28  gap-10">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl pt-2 pb-4">Recent Transactions</h2>
            
          </div>

          </div>
          </div>
        

          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200 text-left">
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
                    No transactions
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
      </div>
    </>
  );
}

export default TransactionTable;
