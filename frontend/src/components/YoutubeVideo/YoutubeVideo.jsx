import React, { useState, useEffect } from "react";
import { google } from "googleapi";
import YouTube from "react-youtube";
import "./youtubevideo.css";

const YouTubeVideo = (props) => {
  const { name, artist, videoId } = props;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="videos">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
    </div>
  );
};

export default YouTubeVideo;
