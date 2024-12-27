import React from 'react';
import Image from 'next/image';
import CheckIcon from "../assets/check-icon.png";

interface RegistrationSuccessfulProps {
  onClose: () => void;
  onOutsideClick: () => void;
}

const RegistrationSuccessful: React.FC<RegistrationSuccessfulProps> = ({  }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <Image  
            width={50}
            height={50}
            src={CheckIcon}
            alt='check icon'
          />          
        </div>
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Registration Successful</h2>
      </div>
    </div>
  );
}

export default RegistrationSuccessful;