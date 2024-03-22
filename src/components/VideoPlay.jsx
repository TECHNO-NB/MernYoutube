import React from "react";
import video from "../assets/video2.mp4";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import logo from "../assets/img2.jpeg";

const VideoPlay = () => {
  return (
    <div className="w-full h-full flex items-center px-2 justify-center flex-col">
      {/* video play sections  */}
      <video
        className="w-[98%]  md:w-[100%] "
        src={video}
        autoPlay
        controls
      ></video>

      {/* Channels details viwes and like sections */}
      <div className="w-full  border-2 text-white pb-2">
        {/* head */}
        <div className="flex justify-between px-1 py-2 ">
          <div className="text-[1.5vh]">
            <h1 className="">JavaScripts Fundamantails:</h1>
            <p className="text-gray-200">30,164 Views ·18 hours ago</p>
          </div>
          <div className="flex gap-2">
          <div className="flex h-6">
         <button  className="bg-blue-400 ml-2 px-2  rounded flex items-center" >{<AiOutlineLike/>} 300</button>
         <button  className="bg-blue-400 ml-2 px-2 rounded flex items-center" >{<AiOutlineDislike/>} 50</button>
          </div>
          <div className="">
      <button className="bg-white text-black px-2 rounded">Save</button>
          </div>
          </div>
        </div>
        {/* middle part */}
        <div className="flex justify-between px-1">
            <div className="flex gap-1">
                <img  className="rounded-[50%] w-10" src={logo} alt="logo"/>
                <div className="flex flex-col gap-0">
                <h4>React Patterns</h4>
                <p className="text-[1.5vh] text-gray-200">757K Subscribers</p>
                </div>
            </div>

            <div className="">
            <button  className="bg-purple-400 ml-2 px-2 py-2 rounded flex items-center" >Subscribed</button>
            </div>

        </div>

     </div>
     </div>
  );
};

export default VideoPlay;
