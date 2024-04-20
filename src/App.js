import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <section className="postsFeature">
        <section>
          <Button style={{ marginTop: 20 }} onClick={() => setModal(true)}>
            Добавить пост
          </Button>
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
