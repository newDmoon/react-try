import About from "../pages/About";
import Posts from "../pages/Posts";
import Welcome from "../pages/Welcome";
import Error from "../pages/Error";
import { Route, Routes } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="about" element={<About />} />
                <Route exact path="posts" element={<Posts />} />
                <Route exact path="posts/:id" element={<PostIdPage />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}