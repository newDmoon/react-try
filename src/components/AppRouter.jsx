import About from "../pages/About";
import Posts from "../pages/Posts";
import Welcome from "../pages/Welcome";
import Error from "../pages/Error";
import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}