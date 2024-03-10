import React from "react";
import VideoContainerJoin from "./VideoContainerJoin";
import FreePass from "./FreePass";

const VideoContainer = () => {
  return (
    <div className="w-full h-[73vh] ">
      <video
        autoPlay
        muted
        loop
        src="https://video.wixstatic.com/video/d3fada_ed1f640ad428452abd5d2dae5ed617d4/1080p/mp4/file.mp4"
        className="h-full w-full object-cover object-center opacity-1"
      />
      <FreePass />
      <VideoContainerJoin />
    </div>
  );
};

export default VideoContainer;
