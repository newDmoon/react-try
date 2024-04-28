import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes"
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

export default function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <Routes>
                {isAuth
                    ?
                    privateRoutes.map(route =>
                        <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
                    )
                    :
                    publicRoutes.map(route =>
                        <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
                    )
                }
            </Routes>
        </>
    )
}