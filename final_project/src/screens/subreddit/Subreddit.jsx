import React from "react";
import "./subreddit.css";
import Post from "../../components/posts/Post";

export default function Subreddit() {
  return (
    <div className="home-page-main-container">
      <h1>Sub - Title </h1>
      
      <div id ='subredditHeader'>
        <label for ='post-filters'className = 'drop-down-menu' id ='subreddit-banner-dropdownm-enu'>Filter:</label>
        <select name = 'post-filters' id = 'postFilterOptions'>
          <option value = 'trending'>Trending</option>
          <option value = 'new'>New</option>
          <option valuer = 'hot'>Hot</option>
        </select>
      </div>
    
    {/* if join-subreddit == Join clicked. check if user object contains subreddit-ID then change button to Joined */}
      <button id = "join-subreddit">Join</button>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
