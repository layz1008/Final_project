import React from "react";
import "./post.css";

export default function Post({post, setModalPost, setDisplayModal}) {

  function handleClick() {
    console.log("Modal was clicked")
    setModalPost(post)
    setDisplayModal(true)
    document.body.classList.add("no-scroll")
  }

  return (
    <div onClick={handleClick} className="post-card">
      <h2>{post.title} </h2>
      <img
      src={`${post.img_url}`}
      alt={`${post.id}`}
      />

      <div id = 'votes-div'>
        <span className="votes" id = 'upVotes'> ⬆:{post.up_votes}  </span>
        <br />
        <span className="votes" id ='downVotes'> ⬇: {post.down_votes} </span>
        <p id = 'comments-tab'> 💬  </p>
      </div> 
    </div>
  );
}
