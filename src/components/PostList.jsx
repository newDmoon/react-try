import PostItem from "./PostItem"
import "./../styles/PostList.css"
import { TransitionGroup } from "react-transition-group"
import { CSSTransition } from "react-transition-group"

export default function PostList({ posts, title, remove }) {
    if (!posts.length) {
        return (
            <h1>Посты не найдены!</h1>
        )
    }

    return (
        <section className="posts">
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}></PostItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>
    )
}
