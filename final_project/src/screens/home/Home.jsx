import {useState, useEffect} from "react";
import "./home.css";
import Post from "../../components/posts/Post.jsx";
import UserAssets from "../../components/user_assets/UserAssets.jsx";
import PostModal from "../../components/posts/PostModal";
import {getPosts} from "../../services/posts.js"

export default function Home() {

  const [posts, setPosts] = useState([])
  const [modalPost, setModalPost] = useState({})
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await getPosts()
      setPosts(response)
    }

    fetchPosts()
  }, [])

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

          {posts.map(post => (
            <Post key={post.id} setDisplayModal={setDisplayModal} setModalPost={setModalPost} post={post}/>
          ))}
        </div>
        <PostModal modalPost={modalPost} displayModal={displayModal} setDisplayModal={setDisplayModal}/>
      </div>

  )
}
