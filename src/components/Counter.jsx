import { useState } from "react"

export default function Counter() {
    let [likes, setLikes] = useState(0)

    function Increment() {
        setLikes(++likes)
    }

    function Decrement() {
        setLikes(--likes)
    }


    return (
        <section>
            <h4>{likes}</h4>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </section>
    )
}