import React, { useState } from 'react'
import { AiOutlineHome,AiOutlineLike } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { RiUserFollowLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = ({open}) => {
 return (
    <>
    <div className={`fixed ${open.modal ? "left-0" : "left-[-16.5em]"} transition-all z-20 bg-gray-800 w-[55vw] h-[119vh] border-r-2 border-white md:left-[0em] md:w-[17vw] md:h-[100vh]`}>
    <div className=" flex flex-col items-center text-center gap-[7px] border-x-5 border-red-400 ">
        <div className="flex items-center py-[5px] mt-5 rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 ">
        <AiOutlineHome className='ml-2'/>
        <span>Home</span>
        </div>
        <div className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 ">
        <AiOutlineLike className='ml-2'/>
        <span>Liked Videos</span>
        </div>
        <div className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 ">
        <LuTimerReset className='ml-2'/>
        <span>History</span>
        </div>

        <div className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 ">
        <BsCameraVideo className='ml-2'/>
        <span>My Content</span>
        </div>

        <div className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 ">
        <GoFileDirectory className='ml-2'/>
        <span>Collections</span>
        </div>
        <div className=" flex items-center py-[5px]  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 ">
        <RiUserFollowLine className='ml-2'/>
        <span>Subscribers</span>
        </div>
 
    </div>
    <div className=" bottom-0 absolute mb-2 flex  flex-col items-center text-center gap-[7px] border-x-5 border-red-400 w-[100%] md:bottom-0 md:opacity-100 ">
    <div className=" flex items-center py-[5px] opacity-0 rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 md:opacity-100 md:mt-150">
        <IoSettingsOutline className='ml-2  '/>
        <span >Settings</span>
        </div>

        <div className=" flex items-center py-[5px] opacity-100 justify-center  rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 md:opacity-0">
        
        <span >Log in</span>
        </div>

        <div className=" flex items-center py-[5px] text-center justify-center  bg-[#AE7AFF] opacity-100 rounded-sm text-white border-2 w-[95%]  gap-4 text-[1.2em] cursor-pointer hover:bg-purple-800 md:opacity-0 ">
   
        <span >Sign up</span>
        </div>



        
    </div>

    
   
    </div>
    </>
  ) 
}

export default Sidebar