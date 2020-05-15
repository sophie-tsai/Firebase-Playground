import React from "react";

function Comment({ comment, createdAt, author }) {
  return (
    <div className="comment">
      <p className="comment-body">{comment}</p>
      <p className="comment-author">- {author}</p>
      <p className="comment-timestamp"> {createdAt}</p>
    </div>
  );
}

export default Comment;
