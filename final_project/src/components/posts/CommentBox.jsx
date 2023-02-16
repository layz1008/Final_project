import { useState } from "react";
import "./CommentBox.css";
import { createComment } from "../../services/comments";

function CommentBox({ postId, refresh, setRefresh }) {
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (commentText.trim() === "") {
      return;
    }
    const newComment = {
      comment: commentText,
      post: postId,
      up_votes: 0,
      down_votes: 0,
      commenter: 1 // replace with the ID of the commenter if needed
    };
    try {
      const createdComment = await createComment(newComment);
      console.log("Comment created:", createdComment);
      setCommentText("");
      setRefresh(prev => !prev)
      console.log(refresh)
      // add code to update the UI with the new comment if needed
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleCommentSubmit}>
      <textarea
        className="comment-input"
        value={commentText}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <button className="comment-submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default CommentBox;
