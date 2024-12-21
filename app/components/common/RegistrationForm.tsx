import React from 'react'

const PaymentForm: React.FC = () => {
  return <>
  
   <div className="flex justify-start items-start h-auto  mt-4 bg-white shadow-sm rounded-lg pl-20 pt-10">
          <form className="w-full  flex flex-col mb-6  space-y-3">
           
              <div className="flex flex-col">
                <label
                  htmlFor="proof-upload"
                  className="text-gray-500 mb-2"
                >
                  Upload your proof of registration
                </label>
                <input
                  type="file"
                  id="proof-upload"
                  className="w-1/2 px-4 py-3 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-36 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800"
              >
                Register
              </button>
            </form>
          </div>
       
  </>
}

export default PaymentForm