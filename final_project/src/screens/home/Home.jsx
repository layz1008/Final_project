import {useState} from "react";
import "./home.css";
import Post from "../../components/posts/Post.jsx";
import UserAssets from "../../components/user_assets/UserAssets.jsx";
import PostModal from "../../components/posts/PostModal";

export default function Home() {

  const [displayModal, setDisplayModal] = useState(false)
  const [modalPost, setModalPost] = useState({})

  return (
    <div className="home-page-main-container">
      <div className= "home-page-filter-container">
        <p className="filter-text"> Filter By:</p>
        <ul className="filter-button">
        <select className="filter-dropdown">
          <option value="mostUpVotes">Most Up Votes 👍</option>
          <option value="mostDownVotes">Most Down Votes 👎</option>
          <option value="trending">Trending 🔥</option>
        </select>

        </ul>
        </div>
        <div className="user-assets-container">
        {/* <UserAssets /> */}
        </div>
        <div className="home-page-post-container">

          {/* {posts.map(post => (
            <Post setDisplayModal={setDisplayModal} setModalPost={setModalPost} post={post}/>
          ))} */}
          <Post setDisplayModal={setDisplayModal} setModalPost={setModalPost}/>
          <Post  />
          <Post  />
          <Post  />
          <Post  />
        </div>
        <PostModal modalPost={modalPost} displayModal={displayModal} setDisplayModal={setDisplayModal}/>
      </div>

  )
}
