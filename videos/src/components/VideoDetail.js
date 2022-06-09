import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return null
  }

  return (
    <div>
      <div className='ui embed'>
      <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title} allowFullScreen></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video?.snippet?.title}</h4>
        <p className='ui '>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;
