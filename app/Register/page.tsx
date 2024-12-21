import React from 'react'
import Sidebar from '../components/common/sidebar'
import DashboardHeader from '../components/common/DashboardHeader'
import RegistratonForm from "../components/common/RegistrationForm"

const Register: React.FC = () => {
  return <>
   <div className="flex bg-[F6F6F6]">
      <Sidebar />
      <main className="flex-1 hover:bg-gray-100 p-5 ">
        <DashboardHeader />
        <RegistratonForm />
      </main>
    </div>
  </>
    
  
}

export default Register;
