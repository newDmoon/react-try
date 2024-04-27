import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setPostsLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  async function fetchPosts() {
    setPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setPostsLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
          {isPostsLoading ? (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
              <Loader />
            </div>
          ) : (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="Список постов, связанных с User"
            />
          )}
        </section>
      </section>
    </div>
  );
}
