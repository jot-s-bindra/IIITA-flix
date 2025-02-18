"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#000" }}>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  
        width="80%"
        height="450px"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
