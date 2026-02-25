// pages import
import Css from "../pages/Css";
import Html from "../pages/Html";
import JavaScript from "../pages/JavaScript";
import Contact from "../pages/Contact";
import BookList from "../pages/BookList";
import ViewBook from "../pages/ViewBook";
import CreateBook from "../pages/CreateBook";
import EditBook from "../pages/EditBook";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
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
        {
            path: "/books",
            element: <BookList />,
        },
        {
            path: "/books/:bookId",
            element: <ViewBook />,
        },
        {
            path: "/create-book",
            element: <CreateBook />,
        },
        {
            path: "/edit-book/:id",
            element: <EditBook />,
        },
        {
            path: "/products",
            element: <Products />,
        },
        {
            path: "/products/:id",
            element :<ProductDetail />
            
        }
    ],
};

export default mainRoutes;
