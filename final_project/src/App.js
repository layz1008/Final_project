import Nav from "./components/navbar/Nav.jsx";
import Home from "./screens/home/Home.jsx";
import CreatePost from "./screens/createPost/CreatePost.jsx";
import Subreddit from "./screens/subreddit/Subreddit.jsx";
import SignUp from "./screens/signUp/SignUp.jsx";
import SignIn from "./screens/signIn/SignIn.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/readmex2" element={<Subreddit/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        
      </Routes>
    </div>
    </div>
  );
}

export default App;
