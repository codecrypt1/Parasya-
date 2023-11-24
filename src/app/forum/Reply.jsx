import React, { useState } from 'react';
import './Forum.css';
import { CgProfile } from 'react-icons/cg';

const CommentTile = ({ user, title, details }) => {
  const [isLiked, setLiked] = useState(false);

  const handleToggleLike = () => {
    setLiked(!isLiked);
  };

  return (
    <div className="comment-tile">
      <div className="user-profile">
        {user.profilePic ? (
          <img src={user.profilePic} alt={`Profile of ${user.name}`} />
        ) : (
          <CgProfile size={50} />
        )}
      </div>
      <div className="comment-details">
        <h3 style={{ fontWeight: '900' }}>{title}</h3>
        <p>{details}</p>
      </div>
      <div className="like-button">
        <button onClick={handleToggleLike}>
          {isLiked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default CommentTile;
