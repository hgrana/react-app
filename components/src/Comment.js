import React from 'react';

const Comment = ({ authorName, date, content, avatar }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>

      <div className="content">
        <a href="/" className="author">
          {authorName}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  )
};

export default Comment;