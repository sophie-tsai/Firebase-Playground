import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

function Comments({ comments, onCreate }) {
  return (
    <div className="comments-container">
      <AddComment onCreate={onCreate} />
      {comments.map((comment) => (
        <Comment {...comment} key={Math.random()} />
      ))}
    </div>
  );
}

export default Comments;
