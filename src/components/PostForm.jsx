import Button from "./UI/button/Button"
import Input from "./UI/input/Input"
import { useState } from "react";

export default function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' });


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    };

    return (<form>
        {/* Управляемый компонент */}
        <Input
            type="text"
            placeholder="Название поста"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <Input
            type="text"
            placeholder="Описание"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <Button onClick={addNewPost}>Создать пост</Button>
    </form>
    )
}