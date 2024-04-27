import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import "../App.css";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Button from "../components/UI/button/Button";
import Loader from "../components/UI/loader/Loader";
import Modal from "../components/UI/modal/Modal";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    // eslint-disable-next-line
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts(response.data);
            const totalCount = response.headers["x-total-count"];
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    useEffect(() => {
        fetchPosts(limit, page);
        // eslint-disable-next-line
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
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
                    {postError && <h1>Произошла ошибка ${postError}</h1>}

                    {isPostsLoading ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "20px",
                            }}
                        >
                            <Loader />
                        </div>
                    ) : (
                        <PostList
                            remove={removePost}
                            posts={sortedAndSearchedPosts}
                            title="Список постов, связанных с User"
                        />
                    )}
                    <Pagination
                        totalPages={totalPages}
                        page={page}
                        changePage={changePage}
                    />
                </section>
            </section>
        </div>
    );
}
