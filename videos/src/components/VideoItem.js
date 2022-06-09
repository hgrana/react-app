import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div key={video.etag} className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className='content'>
        <p className='header'>{video.snippet.title}</p>
      </div>
    </div>
  );
}

export default VideoItem;
