import React from "react";
import "./subreddit.css";
import Post from "../../components/posts/Post";

export default function Subreddit() {
  return (
    <div className="home-page-main-container">
      <h1>This is where subreddits live </h1>
      
      <div id ='subredditHeader'>Banner
        <label for ='postFilters'className = 'dropDownMenu' id ='subredditBannerDropdownMenu'>Filter: </label>
        <select name = 'postFilters' id = 'postFilterOptions'>
          <option value = 'trending'>Trending</option>
          <option value = 'new'>New</option>
          <option valuer = 'hot'>Hot</option>
        </select>
      </div>
      <button id = "newPostButton">New Post</button>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
