import "./App.css";
import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "User", body: "Самый лучший язык в мире это Java" },
    {
      id: 2,
      title: "User",
      body: "Лучший в мире язык для фронта и его динамической обработки это JavaScrypt",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // TODO хук useMemo используется чтобы кешировать состояние, иначе при каждом вводе символа в поисковой строке рендерились и посты
  const sortedPosts = useMemo(() => {
    console.log("СОРТИРОВКА ВЫЗВАНА");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <section className="postsFeature">
        <PostForm create={createPost} />
        <hr />
        <section>
          <Select
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
              { value: "title", name: "По названию" },
              { value: "body", name: "По содержимому" },
            ]}
          />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск"
          />
          {sortedAndSearchedPosts.length !== 0 ? (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="Список постов, связанных с User"
            />
          ) : (
            <h1>Посты отсутствуют</h1>
          )}
        </section>
      </section>
    </div>
  );
}
