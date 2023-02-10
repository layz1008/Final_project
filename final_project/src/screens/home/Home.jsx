import {useState, useEffect} from "react";
import "./home.css";
import Post from "../../components/posts/Post.jsx";
import UserAssets from "../../components/user_assets/UserAssets.jsx";
import PostModal from "../../components/posts/PostModal";
import { getPosts } from "../../services/posts.js"
import { getComments } from "../../services/comments.js";

export default function Home() {

  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [modalPost, setModalPost] = useState({})
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await getPosts()
      setPosts(response)
    }

    fetchPosts()
  }, [])


  useEffect(()=>{
    const fetchComment = async () => {
      const response = await getComments()
      setComments(response)
    }

    fetchComment()
  }, [])

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
        <div className="user-assets-container">
        {/* <UserAssets /> */}
        </div>
        <div className="home-page-post-container">

          {posts.map(post => (
            <Post key={post.id} setDisplayModal={setDisplayModal} setModalPost={setModalPost} post={post}/>
          ))}
          
        </div>
        <PostModal modalPost={modalPost} displayModal={displayModal} setDisplayModal={setDisplayModal} comments={comments}/>
      </div>

  )
}
