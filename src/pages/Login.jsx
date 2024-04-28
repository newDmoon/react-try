import Input from "../components/UI/input/Input"
import Button from "../components/UI/button/Button"
import { useContext } from "react"
import { AuthContext } from "../context";

export default function Login() {
    const { setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <>
            <h1>Страница авторизации</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Введите логин" autoComplete="username" />
                <Input type="password" placeholder="Введите пароль" autoComplete="current-password" />
                <Button>Войти</Button>
            </form>
        </>
    )
}