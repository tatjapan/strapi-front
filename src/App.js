import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";

// const mockPosts = [
//   {
//     likes: 20,
//     description: "This is a post",
//     image: {
//       url: "/uploads/1600760073462_21e0c65b73.jpg",
//     },
//   },
//   {
//     likes: 10,
//     description: "This is my second post",
//     image: {
//       url: "/uploads/1600774437532_da3ee24f0c.jpg",
//     },
//   },
// ];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:1337/posts");
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <Post
          likes={post.likes}
          description={post.description}
          url={post.image && post.image[0].url}
        />
      ))}
    </div>
  );
}

export default App;
