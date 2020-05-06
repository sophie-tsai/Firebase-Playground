import React, { useState } from "react";
import "./Comments.css";

function AddComment({ onCreate }) {
  const [commentText, setCommentText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setCommentText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(commentText);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="textarea-add-comment"
        placeholder="enter your comment here"
        value={commentText}
        onChange={handleChange}
        rows="3"
        resize="none"
      ></textarea>
      <br />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddComment;
