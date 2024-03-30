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
      body: "Лучший в мире язык для фронта и его динамической обработки это JavaScrypt",
    },
  ]);

  const createPost = (newPost) => {
    setUserPosts([...userPosts, newPost]);
  };

  const removePost = (post) => {
    setUserPosts(userPosts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {userPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={userPosts}
          title="Список постов, связанных с User"
        />
      ) : (
        <h1>Посты отсутствуют</h1>
      )}
    </div>
  );
}
