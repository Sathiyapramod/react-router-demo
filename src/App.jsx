import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import ThemeProvider from "./context/ThemeProvider";
import "./App.css";

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
