import React from "react";
import "./post.css";

export default function Post({post, setModalPost, setDisplayModal}) {

  function handleClick() {
    console.log("Modal was clicked")
    setModalPost(post)
    setDisplayModal(true)
  }

  return (
    <div onClick={handleClick} className="post-card">
      <h2>Title of the Post: </h2>
      <span className="votes" id = 'upVotes'> ⬆: 20 </span>
      <br />
      <span className ='votes'id = 'totalVotes'>+15</span>
      <br />
      <span className="votes" id ='downVotes'> ⬇: 5 </span>
      <img
        src="https://www.explore.com/img/gallery/the-most-beautiful-coral-reefs-in-the-world/great-barrier-reef-australia-1667589677.jpg"
        alt="123"
      ></img>
      <p> Comments: </p>
      <p> Fish are great and cool as well. They are fun.</p>
    </div>
  );
}
