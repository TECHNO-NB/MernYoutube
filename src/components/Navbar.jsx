import React from "react";
import logo from "../assets/logo.svg";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return( 
    <nav className="bg-gray-800 w-[100vw] h-[4em] border-b-2 border-white sticky top-0 px-1 flex justify-around items-center z-10 md:px-10 md:justify-between">
    <img className="w-14" src={logo}></img>
    <div className="bg-gray-800 border-2 h-9 w-[35em] flex items-center px-2" >
  <IoSearchOutline className="text-white"/>
  <input className="bg-none ml-2 bg-gray-800 font-[40px] h-[100%] text-white placeholder:text-white outline-none" placeholder="Search " type="text"></input>
    </div>
    <div className="flex gap-6 opacity-0 md:opacity-100">
      <button className="text-white">Log in</button>
      <button  className="bg-[#AE7AFF] font-[700] text-black px-4 py-[5px]  border-b border-purple-200">Sign up</button>
    </div>
    </nav>
  )
};

export default Navbar;
