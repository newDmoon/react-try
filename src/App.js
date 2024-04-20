import "./App.css";
import { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Животные",
      body: "Достаточно большой кастой является царство животные",
    },
    {
      id: 2,
      title: "Грибы",
      body: "Неодназначным царством является царство грибов",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  // TODO хук useMemo используется чтобы кешировать состояние, иначе при каждом вводе символа в поисковой строке рендерились и посты
  const sortedPosts = useMemo(() => {
    console.log("СОРТИРОВКА ВЫЗВАНА");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <section className="postsFeature">
        <section>
          <Button style={{marginTop : 20}} onClick={() => setModal(true)}>Добавить пост</Button>
          <Modal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
          </Modal>
        </section>

        <hr />

        <section>
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Список постов, связанных с User"
          />
        </section>
      </section>
    </div>
  );
}
