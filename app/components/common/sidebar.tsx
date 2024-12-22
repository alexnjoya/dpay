import { FaWallet, FaUserFriends, FaRegListAlt, FaCog } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import transaction from "../assets/transaction.png"
import manualrestion from "../assets/manualregistion.png"
import logout from "../assets/logout.png"
import paydues from "../assets/paydue.png"
import dashboard from "../assets/dashboard.png"
import settings from "../assets/settings.png"
import cyptopay from "../assets/cryptopayy.png"

const Sidebar: React.FC = () => {
  
  return (
    <div className="bg-blue-800 text-sm text-white h-screen w-60 p-5">
      <div className="flex items-center mt-10 mb-8">
        <Image
          width={40}
          height={40}
          src={Logo}
          alt="Logo"
        />
        <div className="text-3xl font-bold">Tally</div>

      </div >
      <div className=" text-xl mb-8 font-bold" >
        <h2>Manage</h2>
      </div>
      <nav className="mb-10">
        <ul className="space-y-1">

          <li className="flex items-start ml-2 text-20 cursor-pointer hover:text-blue-400">
            <Link className="flex items-center" href="/dashboard">
              <Image width={30}
          height={30}  src={dashboard} alt="dashboard" />
              <span className="p-3 ">Dashboard</span>
            </Link>
          </li>

          <li className="flex items-center cursor-pointer hover:text-blue-400">
            <Link className="flex items-center" href="/pay">
              <Image width={40}
          height={40}  src={paydues} alt="pay dues" />
              <span className="p-3">Pay Dues</span>
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:text-blue-400">
            <Link className="flex items-center" href="/cryptopay">
              <Image style={{ filter: 'invert(1)' }} className="text-white" width={40} height={40} src={cyptopay} alt="pay with crypto" />
              <span className="p-3">Pay in Crypto</span>
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:text-blue-400">
            <Link className="flex items-center" href="/transactions">
              <Image width={40}
          height={40}  src={transaction} alt="transactions" />
              <span className="p-3">Transactions</span>
            </Link>
          </li>

          <li className="flex items-center cursor-pointer hover:text-blue-400">
            <Link className="flex items-center" href="/Register">
              <Image width={40}
          height={40}  src={manualrestion} alt="manual registration" />
              <span className="p-3">Manual Registration</span>
            </Link>
          </li>
          <li className="flex items-center cursor-pointer hover:text-blue-400">
            <Link className="flex items-center" href="/profile">
            <Image  src={settings}  alt="settings" width={40 } height={40}/>
              <span className=" p-3">Profile</span>
            </Link>
          </li>
        </ul>


      </nav>
      <hr className="w-full border-white  mb-1" />
      <div className=" text-sm">
        <Link href="/login">
          <span className="flex items-center text-white  py-2 " aria-label="Logout"> 
            <Image width={40}
          height={40}  src={logout} alt="logout " />
            Logout
          </span>
        </Link>
        
      </div>
      <hr className="border-white w-full mt-1" />
    </div>
    
  );
};

export default Sidebar;
