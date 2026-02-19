import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <RouterProvider router={router} />;
            </div>
        </ThemeProvider>
    );
}

export default App;
