import React from 'react'
import Sidebar from '../components/Sidebar'
import VideoCard from '../components/VideoCard'

const Home = () => {
  return (
    <div className='bg-gray-800 w-[100vw]' >
      
        <Sidebar />
        <div className="pl-[1em] mt-4 md:pl-[17em]">
        <VideoCard/>
        </div>
       
       </div>
  )
}

export default Home