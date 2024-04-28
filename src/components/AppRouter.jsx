import { Route, Routes } from "react-router-dom";
import { routes } from "../router/routes"

export default function AppRouter() {
    return (
        <>
            <Routes>
                {routes.map(route =>
                    <Route Component={route.Component} path={route.path} element={route.element} exact={route.exact} />
                )}
            </Routes>
        </>
    )
}