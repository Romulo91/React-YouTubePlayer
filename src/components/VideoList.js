import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos }) => {
  const renderedList = videos.map((videos) => {
    return <VideoItem video={videos} />;
  });

  return <div>{renderedList}</div>;
};

export default VideosList;
