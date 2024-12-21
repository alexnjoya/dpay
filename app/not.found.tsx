import React from 'react';

interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <>
      <div className="flex justify-center items-start text-center p-20">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-3xl">404 ! Page not found </h1>
        </div>
      </div>
    </>
  );
};

export default Error; 