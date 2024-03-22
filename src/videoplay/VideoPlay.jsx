import React from "react";
import video from "../assets/video2.mp4";
import LikeChannelDetails from "./LikeChannelDetails";
const VideoPlay = () => {
  return (
    <div className="w-full h-full flex items-center px-2 justify-center flex-col">
      {/* video play sections  */}
      <video
        className="w-[99.5%]  md:w-[100%] "
        src={video}
        autoPlay
        controls
      ></video>
      {/* Channels details viwes and like sections */}
      <LikeChannelDetails />
    </div>
  );
};

export default VideoPlay;
