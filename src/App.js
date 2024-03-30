import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {
  const [userPosts, setUserPosts] = useState([
    { id: 1, title: "User", body: "Самый лучший язык в мире это Java" },
    {
      id: 2,
      title: "User",
      body: "Лучший в мире язык для фронта и его динамической обработки это JavaScrypt"
    },
  ]);

  const createPost = (newPost) => {
    setUserPosts([...userPosts, newPost])
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <PostList posts={userPosts} title="Список постов, связанных с User" />
    </div>
  );
}
