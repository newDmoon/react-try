import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"
import { useContext } from "react"
import { AuthContext } from "../../../context"
import Button from "../button/Button"

export default function Navbar() {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <>
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link to="/welcome">Главная</Link>
                    <Link to="/posts">Посты</Link>
                    <Link to="/about">О сайте</Link>
                    {isAuth
                        ? <Button onClick={logout}>Выйти</Button>
                        : <Link to="/signin">Войти</Link>}
                </div>
            </div>
        </>
    )
}