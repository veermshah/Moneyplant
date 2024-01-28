// BackgroundVideo.js

import React from "react";
import waterfall from "../waterfall.mp4";

const BackgroundVideo = () => {
  return (
    <div className="bg-cover bg-center fixed inset-0 z-[-1]">
      {/* Add your video file as the background video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src={waterfall} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </div>
  );
};

export default BackgroundVideo;
