// pages import
import Css from "../pages/Css";
import Html from "../pages/Html";
import JavaScript from "../pages/JavaScript";
import Contact from "../pages/Contact";
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
        {
            path: "/contact",
            element: <Contact />,
        },
    ],
};

export default mainRoutes;
