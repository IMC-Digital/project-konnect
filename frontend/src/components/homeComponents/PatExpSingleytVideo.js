import React from "react";

const SinglePEytVideo = ({ vidCode }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="250"
        src={`https://www.youtube.com/embed/${vidCode}?`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  );
};

export default SinglePEytVideo;
