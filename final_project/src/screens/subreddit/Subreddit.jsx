import React from "react";
import "./subreddit.css";
import Post from "../../components/posts/Post";
import PostModal from "../../components/posts/PostModal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
import { getComments } from "../../services/comments";


export default function Subreddit(post) {
  const [posts, setPosts] = useState([]);
  const [modalPost, setModalPost] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const allPosts = await getPosts();
    setPosts(allPosts);
  }

  useEffect(() => {
    const fetchComment = async () => {
      const response = await getComments();
      setComments(response);
    };

    fetchComment();
  }, []); 


  return (
    <div className="home-page-main-container">
      
      {/* request the "Subs" title, link,  followers, comments, upVotes and downVotes from the subs Library using the subs id
      comments tab will display a number of comment total instances.
      upvotes/downvotes will be a function of "upVotes - downVotes" situated in between their respective buttons.
      followers will show a total number of users following the current sub.  by gettting the length of the table array for folllower id's in the subs table we get a total number of followers*/}
      <div id ='subredditHeader'>
        <img id ='user-avatar' src="https://icon-library.com/images/generic-user-icon/generic-user-icon-10.jpg" alt='user avatar'></img>
        <div id = 'title-subLink-join'>
          <h1 id ='sub-title'>Cool Fish</h1>
          <Link to ='/readmex2' id = 'sub-link'>r/coolfish</Link>
        </div>
        {/* onClick, add subredditId to user list of subreddit id's. if it exists within the user library then button should read "Joined" if clicked in this state button should remove subreddit id from the user library and read "Join".*/}
        <button id = "join-button">Join</button>
        {/* requiest the subreddit description from the subs table */}
        <p id ='subreddit-description'>A really cool subreddit of really cool fishies</p>
        {/* contains functions for filtering for: chronological order, highest upvotes, and highest upvotes in a 24h time frame. picking any of the list items will change the state of the page.*/}
        <div id = 'filter-div'>
          <label for ='post-filters'className = 'drop-down-menu' id ='subreddit-banner-dropdown-menu-label'>Post Filters:  </label>
          <select name = 'post-filters' id = 'post-filter-options'>
            <option value = 'trending'>Trending</option>
            <option value = 'mostUpVotes'>Most Upvotes</option>
            <option value = 'mostDownVotes'>Most Downvotes</option>
          </select>
        </div>
      </div>
    {/* if join-subreddit == Join clicked. check if user object contains subreddit-ID then change button to Joined if not display join */}
    {posts.map((post) => (
          <Post
            key={post.id}
            setDisplayModal={setDisplayModal}
            setModalPost={setModalPost}
            post={post}
          />
        ))}

<PostModal
        modalPost={modalPost}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        comments={comments}
        />
    </div>
  );
}
