import React from "react";
import './../Video/style.scss';

const Video = ({videoUrl}) => {
  return (
    <video className= "videoplayer" controls >
      <source src={videoUrl} type="video/mp4"
      />
    </video>
  );
};

export default Video;
