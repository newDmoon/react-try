import PostItem from "./PostItem"
import "./../style/PostList.css"

export default function PostList({ posts, title, remove }) {
    if (!posts.length){
        return (
            <h1>Посты не найдены!</h1>
        )
    }

    return (
        <section className="posts">
            <h1>{title}</h1>
            {posts.map((post, index) => (
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}></PostItem>
            ))}
        </section>
    )
}
