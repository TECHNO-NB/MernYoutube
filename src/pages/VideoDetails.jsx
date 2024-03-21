import React from 'react'
import Sidebar from '../components/Sidebar'
import video from "../assets/video2.mp4";

const VideoDetails = () => {
  return (
    <div className='bg-gray-800 w-[100vw]' >
    <Sidebar/>
     <div className="pl-[0.0em] mt-4 md:pl-[16.5em]">
       <video src={video} controls></video>
     </div>
   </div>
  )
}

export default VideoDetails;