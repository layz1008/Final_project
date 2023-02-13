import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./createpost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting Title: ${title}, Text: ${text}, and Image URL: ${imageURL}`);
    setTitle("");
    setText("");
    setImageURL("");
  };

  return (
    <div className="create-post">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <label htmlFor="title">Title:</label>
          <input
            required="required"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title for your post"
          />
        </div>
        <div className="inputbox">
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter the URL of the image you want to use"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <ReactQuill
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text for your post"
          />
        </div>
        <div>
          <button>
            POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
