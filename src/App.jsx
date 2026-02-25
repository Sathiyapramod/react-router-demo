import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import BookListProvider from "./context/BookListProvider";

function App() {
    return (
        <ThemeProvider>
            <BookListProvider>
                <div className="container">
                    <RouterProvider router={router} />
                </div>
            </BookListProvider>
        </ThemeProvider>
    );
}

export default App;
