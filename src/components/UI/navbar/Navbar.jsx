import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"

export default function Navbar() {
    return (
        <>
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link to="/about">О сайте</Link>
                    <Link to="/posts">Посты</Link>
                    <Link to="/welcome">Главная</Link>
                </div>
            </div>
        </>
    )
}