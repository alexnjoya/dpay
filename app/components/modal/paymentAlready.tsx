

import React from 'react';
import Image from 'next/image';
import Warn from "../assets/warn.png";

interface PaymentAlreadyProps {
  onClose: () => void;
  onProceed: () => void;
}

const PaymentAlready: React.FC<PaymentAlreadyProps> = ({ onClose, onProceed }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <Image  
            width={50}
            height={50}
            src={Warn}
            alt='checkpay'
          />          
        </div>
        <h2 className="text-xl font-bold mb-2">Payment Made Already</h2>
        <p className="text-gray-700 mb-4">Click Proceed to continue with manual registration.</p>
        <div className="flex justify-between">
          <button 
            className="bg-gray-300 text-black py-2 px-4 rounded" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded" 
            onClick={onProceed}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentAlready;