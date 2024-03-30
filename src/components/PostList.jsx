import PostItem from "./PostItem"
import "./../style/PostList.css"

export default function PostList({ posts, title }) {
    return (
        <section className="posts">
            <h1>{title}</h1>
            {posts.map((post, index) => (
                <PostItem number={index + 1} post={post} key={post.id}></PostItem>
            ))}
        </section>
    )
}
