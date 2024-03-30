import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";

export default function App() {
  const [userPosts, setUserPosts] = useState([
    { id: 1, title: "User", body: "Самый лучший язык в мире это Java" },
    {
      id: 2,
      title: "User",
      body: "Лучший в мире язык для фронта и его динамической обработки это JavaScrypt",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setUserPosts([...userPosts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  const createPost = (newPost) => {
    setUserPosts([...userPosts, newPost]);
  };

  const removePost = (post) => {
    setUserPosts(userPosts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <section>
        <PostForm create={createPost} />
        <hr />
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По содержимому" },
          ]}
        />

        {userPosts.length !== 0 ? (
          <PostList
            remove={removePost}
            posts={userPosts}
            title="Список постов, связанных с User"
          />
        ) : (
          <h1>Посты отсутствуют</h1>
        )}
      </section>
    </div>
  );
}
