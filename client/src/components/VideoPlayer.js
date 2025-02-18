"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#000" }}>
      <ReactPlayer 
        url={videoUrl}  
        width="80%"
        height="450px"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
