import React, { FormEvent } from 'react';

const Form: React.FC = () => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
  };
  return (
    <>
      <div className="flex justify-start  items-start h-auto mt-4  bg-white shadow-sm rounded-lg pl-20 pt-10">
        <form className="w-full flex flex-col mb-10 space-y-3" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            className="w-1/2 p-3 border rounded-md bg-gray-50 focus:outline-blue-500"
          />
          <button type="submit" className="w-36 bg-blue-600 text-white p-4 rounded-md hover:bg-blue-800">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
