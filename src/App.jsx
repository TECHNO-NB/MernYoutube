import { useState } from "react";
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";

import VideoDetails from "./pages/VideoDetails";

import Home from "./pages/Home";

function App() {
return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/videodetails" element={<VideoDetails/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App;
