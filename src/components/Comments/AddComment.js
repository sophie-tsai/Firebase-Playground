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
    if (commentText.length === 0) {
      alert("enter a comment before submitting");
      return;
    }
    onCreate(commentText);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-comment">
      <textarea
        className="textarea-add-comment"
        placeholder="enter your comment here"
        value={commentText}
        onChange={handleChange}
        rows="3"
        resize="none"
      ></textarea>
      <br />
      <button type="submit" className="submit-comment-button">
        submit
      </button>
    </form>
  );
}

export default AddComment;
