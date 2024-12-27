import React from 'react';
import Image from 'next/image';
import Pay from "../assets/pay.png"


interface PaymentSuccessfulProps {
  onClose: () => void;
  onOutsideClick: () => void;
}

const PaymentSuccessful: React.FC<PaymentSuccessfulProps> = ({  }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
            <Image  
            width={50}
            height={50}
            src={Pay}
            alt='checkpay'
            
            />          
        </div>
        <h2 className="text-xl font-bold mb-2">Payment Successful</h2>
        <p className="text-gray-700">Dues payment was successful. Proceed to manual registration.</p>
      </div>
    </div>
  );
}

export default PaymentSuccessful;