import React from 'react'
import Sidebar from '../components/Sidebar'
import VideoPlay from '../components/VideoPlay';

const VideoDetails = () => {
  return (
    <div className='bg-gray-800 w-[100vw]' >
    <Sidebar/>
     <div className="pl-[0.0em] px-0 mt-4 md:pl-[16.8em]">
       <VideoPlay/>
     </div>
   </div>
  )
}

export default VideoDetails;