import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Welcome from "../pages/Welcome";

export const publicRoutes = [
  { path: "signin", element: <Login />, exact: true },
  { path: "welcome", element: <Welcome />, exact: true },
  { path: "*", element: <Navigate to="signin" /> },
];

export const privateRoutes = [
  { path: "about", element: <About />, exact: true },
  { path: "posts", element: <Posts />, exact: true },
  { path: "posts/:id", element: <PostIdPage />, exact: true },
  { path: "welcome", element: <Welcome />, exact: true },
  { path: "*", element: <Navigate to="posts" /> },
];
