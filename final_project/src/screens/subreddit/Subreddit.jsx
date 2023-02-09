import React from "react";
import "./subreddit.css";
import Post from "../../components/posts/Post";
import { Link } from "react-router-dom";

export default function Subreddit() {
  
  return (
    <div className="home-page-main-container">
      
      
      <div id ='subredditHeader'>
        <img id ='user-avatar' src="https://icon-library.com/images/generic-user-icon/generic-user-icon-10.jpg" alt='user avatar'></img>
        <div id = 'title-subLink-join'>
          <h1 id ='sub-title'>Cool Fish</h1>
          <Link to ='/readmex2' id = 'sub-link'>r/coolfish</Link>
        </div>
        <button id = "join-button">Join</button>
        <p id ='subreddit-description'>A really cool subreddit of really cool fishies</p>
        <div id = 'filter-div'>
          <label for ='post-filters'className = 'drop-down-menu' id ='subreddit-banner-dropdown-menu-label'>Post Filters:  </label>
          <select name = 'post-filters' id = 'post-filter-options'>
            <option value = 'trending'>Trending</option>
            <option value = 'new'>New</option>
            <option value = 'hot'>Hot</option>
          </select>
        </div>
      </div>
    
    {/* if join-subreddit == Join clicked. check if user object contains subreddit-ID then change button to Joined if not display join */}
     
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
