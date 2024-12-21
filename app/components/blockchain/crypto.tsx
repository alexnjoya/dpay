import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  amount: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ amount: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.amount) {
      alert('Please fill the amount field!');
      return;
    }
  };

  return (
    <>
      <div className="flex justify-start items-start h-auto mt-4 bg-white shadow-sm rounded-lg pl-20 pt-10">
        <form className="w-full flex flex-col mb-10 space-y-3" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            className="w-1/2 p-3 border rounded-md bg-gray-50 focus:outline-blue-500"
            onChange={handleChange}
            value={formData.amount}
            required
          />
          <button className="w-36 bg-blue-600 text-white p-4 rounded-md hover:bg-blue-800" type="submit">
            Pay in Crypto
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
