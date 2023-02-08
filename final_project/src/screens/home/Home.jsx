import React from "react";
import "./home.css"
import Post from "../../components/posts/Post.jsx";
export default function Home() {
 
  return (
    <div className="home-page-main-container">
      <div className= "home-page-filter-container">
        <p className="filter-text"> Filter By:</p>
        <ul className="filter-buttons">
          <li className="toggle-filter"> <button> Most Up Votes  👍</button></li>
          <li className="toggle-filter"> <button> Most Down Votes 👎 </button></li>
          <li className="toggle-filter"> <button> Trending 🔥 </button></li>
        </ul>
        </div>
        <div className="home-page-post-container">
          <Post  />
          <Post  />
          <Post  />
          <Post  />
          <Post  />
        </div>
      </div>

  )
}
