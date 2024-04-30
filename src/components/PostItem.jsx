import { useNavigate } from "react-router-dom"
import "./Post.css"
import Button from "./UI/button/Button"

export default function PostItem(props) {
    const router = useNavigate()

    return (
        <section className="post">
            <div className="post__content">
                <div className="title">
                    <strong>
                        {props.post.id}. {props.post.title}
                    </strong>
                </div>
                <div className="description">
                    {props.post.description}{props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <Button onClick={() => router(`/posts/${props.post.id}`)}>Открыть</Button>
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
            </div>
        </section>
    )
}