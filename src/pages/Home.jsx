import React from 'react'
import Sidebar from '../components/Sidebar'
import VideoCard from '../components/VideoCard'


const Home = ({modal}) => {
  return (
    <div className='bg-gray-800 w-[100vw]' >
       <Sidebar open={modal}/>
        <div className="pl-[0.0em] mt-4 md:pl-[16.5em]">
        <VideoCard/>
        </div>
       
       </div>
  )
}

export default Home