import { useParams } from "react-router-dom"
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { useEffect, useState } from "react";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getOneById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <>
            <h1>Вы открыли страницу поста с id {params.id}</h1>
            {isLoading
                ? <Loader />
                : <section>
                    <h1>{post.id}. {post.title}</h1>
                    <h2>{post.body}</h2>
                </section>}
        </>
    )
}