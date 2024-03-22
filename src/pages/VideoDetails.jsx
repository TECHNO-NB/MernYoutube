import React from 'react'
import Sidebar from '../components/Sidebar'
import VideoPlay from '../videoplay/VideoPlay'
import Comments from '../videoplay/Comments'
const VideoDetails = () => {
  return (
    <div className='bg-gray-800 w-[100vw]' >
    <Sidebar/>
     <div className="pl-[0.0em] px-0 mt-4 md:pl-[16.8em]">
       <VideoPlay/>
     </div>
     <div className="pl-[0.5em] px-2 mt-0 md:pl-[16.8em]">
     <Comments/>
     </div>

   </div>
  )
}

export default VideoDetails;