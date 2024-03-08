import React from 'react'
import thumbnail from "../assets/thumbnail.jpeg"
import thumbnail2 from "../assets/photo.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.jpeg";
import logo5 from "../assets/logo5.webp";
import img from "../assets/img.webp";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img5 from "../assets/img5.jpeg";

const VideoCard = () => {
  return (
 <div className="w-[100vw] h-[100%] z-[-4] bg-gray-800 grid grid-cols-1 gap-4 px-4 text-white sm:grid-cols-2 md:grid-cols-4 md:w-[82.5vw] " >

<div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer ">
    <div className="relative">
    <img  className="w-[100%]"src={thumbnail}></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src='./src/assets/logo2.jpeg'/>
        <h1 className='text-[1em]'>JavaScript Fundamentals: Variables and Data Types</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>10.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>Code Master</p>
    </div>
    </div>


    <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer">
    <div className="relative">
    <img  className="w-[100%]"src={thumbnail2}></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={logo3}/>
        <h1 className='text-[1em]'>
Getting Started with Express.js</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>11.k Views · <span>5 hours ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>Express Learner</p>
    </div>
    </div>



    <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer">
    <div className="relative">
    <img  className="w-[100%]"src={img}></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={img2}/>
        <h1 className='text-[1em]'>Node.js Authentication with Passport.js</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>100.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>Passport Pro</p>
    </div>
    </div>




    <div className="flex flex-col items-center gap-2 w-[100%] cursor-pointer ">
    <div className="relative">
    <img  className="w-[100%]"src={img3} ></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={logo5}/>
        <h1 className='text-[1em]'>Building a RESTful API with Node.js and Express</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>10.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>React Patterns</p>
    </div>
    </div>



    <div className="flex flex-col items-center gap-2 w-[100%] cursor-pointer ">
    <div className="relative">
    <img  className="w-[100%]"src={img5} ></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={logo5}/>
        <h1 className='text-[1em]'>Building a RESTful API with Node.js and Express</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>10.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>React Patterns</p>
    </div>
    </div>



    <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer ">
    <div className="relative">
    <img  className="w-[100%]"src={thumbnail}></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src='./src/assets/logo2.jpeg'/>
        <h1 className='text-[1em]'>JavaScript Fundamentals: Variables and Data Types</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>10.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>Code Master</p>
    </div>
    </div>


    <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer">
    <div className="relative">
    <img  className="w-[100%]"src={thumbnail2}></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={logo3}/>
        <h1 className='text-[1em]'>
Getting Started with Express.js</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>11.k Views · <span>5 hours ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>Express Learner</p>
    </div>
    </div>



    <div className="flex flex-col items-center gap-2 w-[100%]  cursor-pointer">
    <div className="relative">
    <img  className="w-[100%]"src={img}></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={img2}/>
        <h1 className='text-[1em]'>Node.js Authentication with Passport.js</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>100.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>Passport Pro</p>
    </div>
    </div>




    <div className="flex flex-col items-center gap-2 w-[100%] cursor-pointer ">
    <div className="relative">
    <img  className="w-[100%]"src={img3} ></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={logo5}/>
        <h1 className='text-[1em]'>Building a RESTful API with Node.js and Express</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>10.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>React Patterns</p>
    </div>
    </div>



    <div className="flex flex-col items-center gap-2 w-[100%] cursor-pointer ">
    <div className="relative">
    <img  className="w-[100%]"src={img5} ></img>
    <p className='absolute bottom-2 right-2 bg-black px-2'>20:45</p>
    </div>
    <div className="">
      <div className="flex items-center gap-2">
        <img className='w-10 h-10 rounded-[50%]'  src={logo5}/>
        <h1 className='text-[1em]'>Building a RESTful API with Node.js and Express</h1>
      </div>
      <p className='ml-12 text-gray-200 font-[300]'>10.3k Views · <span>44 minutes ago</span></p>
      <p className='ml-12 text-gray-200 font-[400]'>React Patterns</p>
    </div>
    </div>



    






    </div>
 

  )
}

export default VideoCard