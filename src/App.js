import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

export default function App() {
  // eslint-disable-next-line
  const [javaPosts, setJavaPosts] = useState([
    { id: 1, title: "Java", description: "Самый лучший язык в мире" },
    {
      id: 2,
      title: "Java",
      description: "Лучший в мире язык для фронта и его динамической обработки",
    },
    {
      id: 3,
      title: "Java",
      description:
        "Лучший в мире язык для бека, если научиться использовать ASP.NET",
    },
  ]);
  const [userPosts, setUserPosts] = useState([
    { id: 1, title: "User", body: "Самый лучший язык в мире" },
    {
      id: 2,
      title: "User",
      body: "Лучший в мире язык для фронта и его динамической обработки"
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    };
    console.log(body);
    console.log(newPost);
    setUserPosts([...userPosts, newPost]);
    setTitle('')
    setBody('')
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <Input
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Описание"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={javaPosts} title="Список постов, связанных с Java" />
      <PostList posts={userPosts} title="Список постов, связанных с User" />
    </div>
  );
}
