import "./Post.css"

export default function Post(props) {
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
                    <button>Удалить</button>
                    <button>Изменить</button>
            </div>
        </section>
    )
}