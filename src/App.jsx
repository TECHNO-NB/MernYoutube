import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import Home from "./pages/Home";

function App() {

  return(
    <>
    <Navbar/>
    <div className="flex w-[100vw]">
    <Home/>
    </div>
  
    </>
  )
  
}

export default App;
