import "./Post.css"
import Button from "./UI/button/Button"

export default function PostItem(props) {
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
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
                <Button>Открыть</Button>
            </div>
        </section>
    )
}