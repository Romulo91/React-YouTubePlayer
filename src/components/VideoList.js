import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((videos) => {
    return (
      <VideoItem
        key={videos.id.vdeoId}
        onVideoSelect={onVideoSelect}
        video={videos}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideosList;
