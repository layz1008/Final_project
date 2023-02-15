import Nav from "./components/navbar/Nav.jsx";
import Home from "./screens/home/Home.jsx";
import CreatePost from "./screens/createPost/CreatePost.jsx";
import Subreddit from "./screens/subreddit/Subreddit.jsx";
import SignUp from "./screens/signUp/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     setPosts(response);
  //     setFilteredPosts(response);
  //   };
  //   fetchPosts();
  // }, []);
  useEffect(() => {
    fetch("https://final-project-server-production.up.railway.app/")
      .then((res) => res.json())
      .then((data) => {
        let postsData = data.map((post, index) => {
          return {
            title: post.title,
            text: post.text,
            img_url: post.img_url,
            up_votes: post.up_votes,
            down_votes: post.down_votes
          };
        });
        setPosts(postsData);
        setFilteredPosts(postsData);
      });
  }, []);

  const handleSearch = (e) => {
    console.log("searching")
    const {value} = e.target
    const results = posts.filter((post) => {
      return post.title.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredPosts(results)
  }

  return (
    <div className="App">
      <nav>
        {/* <Nav /> */}
        <Nav handleSearch={handleSearch}/>
      </nav>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/subs/:id" element={<Subreddit/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;




