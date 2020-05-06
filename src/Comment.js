import React from "react";

function Comment({ comment, createdAt }) {
  //   console.log("comment props", props);
  return (
    <div className="comment">
      {comment} {createdAt}
    </div>
  );
}

export default Comment;
