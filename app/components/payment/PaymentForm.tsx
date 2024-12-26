'use client'
import React, { FormEvent, useState } from 'react';

const PaymentForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle payment submission logic here
  };

  return (
    <div className="flex justify-center  pt-4 items-center h-auto">
      <div className="w-full max-w-md ">
        <form onSubmit={handleSubmit} className="space-y-4">

          <label>
            Name
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-4 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          
          <label>
            Student ID
            <input
              type="number"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full  mb-4  p-4 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          
          <label>
            Level
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full   mb-4 p-4 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Select Level</option>
              <option value="1">Level 100</option>
              <option value="2">Level 200</option>
              <option value="3">Level 300</option>
              <option value="4">Level 400</option>
            </select>
          </label>
          
          <label >
          Amount GHC70.00
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full  mb-4 p-4 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          
          <button type="submit" className="w-full py-4  text-white rounded-xl bg-blue-800 ">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
