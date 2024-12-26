'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import Google from "../assets/google.png";


const Login = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 pt-20 pb-20">
        <h1 className="text-center text-3xl font-semibold text-blue-600 mb-2">
          TALLY
        </h1>
        <p className="text-center text-gray-500 mb-6">Login or signup</p>
        <div className="relative mb-6">
          <button
            className="w-full py-4 bg-white-500 text-gray-400 rounded-full font-medium shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 mb-10 flex items-center justify-center"
          >
            <Image className="mr-2" width={30} height={30} src={Google} alt="google logo" />
            Google
          </button>

          <div className="flex items-center mb-6">
            <hr className="flex-grow" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow" />
          </div>

          <form>
            <input
              type="email"
              placeholder="Enter your student email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-12 py-4 text-gray-700 bg-blue-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Login
            </button>
          </form>
         
        </div>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
