import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Welcome from "../pages/Welcome";

export const routes = [
    {path: 'about', element: <About/>, exact: true},
    {path: 'posts', element: <Posts/>,  exact: true},
    {path: 'posts:id', element: <PostIdPage/>,  exact: true},
    {path: 'welcome', element: <Welcome/>,  exact: true}
]