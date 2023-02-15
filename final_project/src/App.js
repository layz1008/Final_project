import Nav from "./components/navbar/Nav.jsx";
import Home from "./screens/home/Home.jsx";
import CreatePost from "./screens/createPost/CreatePost.jsx";
import Subreddit from "./screens/subreddit/Subreddit.jsx";
import SignUp from "./screens/signUp/SignUp.jsx";
import { Routes, Route } from "react-router-dom";

// const [subreddit, setSubreddit] = useState([]);

// const handleSearch = (e) => {
//   const {value} = e.target
//   const results = subreddit.filter((sub) => {
//     return sub.title.toLowerCase().includes(value.toLowerCase())
//   })
//   setSubreddit(results)
// }

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
        {/* <Nav handleSearch={handleSearch}/> */}
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




