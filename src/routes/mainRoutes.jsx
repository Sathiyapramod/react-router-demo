// pages import
import Css from "../pages/Css";
import Html from "../pages/Html";
import JavaScript from "../pages/JavaScript";
// importing main layout
import MainLayout from "../layouts/MainLayout";

// creating my router setup
const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/html",
            element: <Html />,
        },
        {
            path: "/css",
            element: <Css />,
        },
        {
            path: "/javascript",
            element: <JavaScript />,
        },
    ],
};

export default mainRoutes;
