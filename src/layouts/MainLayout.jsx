// step 4
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import DarkMode from "../assets/dark_mode.png";
import LightMode from "../assets/light_mode.png";
import { ThemeContext } from "../context/ThemeProvider";

function MainLayout() {
    const { theme, setTheme } = useContext(ThemeContext);

    const navBarStyle = {
        backgroundColor: theme === false ? "white" : "black",
        color: theme === false ? "black" : "white",
    };

    const linkTagStyle = {
        color: theme === false ? "black" : "white",
    };

    const handleClick = () => setTheme((prevStatus) => !prevStatus);

    return (
        <div>
            {/* header part */}
            <header style={navBarStyle}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/html" className="link" style={linkTagStyle}>
                                HTML
                            </Link>
                        </li>
                        <li>
                            <Link to="/css" className="link" style={linkTagStyle}>
                                CSS
                            </Link>
                        </li>
                        <li>
                            <Link to="/javascript" className="link" style={linkTagStyle}>
                                JS
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="link" style={linkTagStyle}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/create-book" className="link" style={linkTagStyle}>
                                Create Book
                            </Link>
                        </li>
                        <li>
                            <button className="theme-icon" onClick={handleClick}>
                                {theme === false ? (
                                    <img src={DarkMode} alt="dark_mode" width={40} height={40} />
                                ) : (
                                    <img src={LightMode} alt="light_mode" width={40} height={40} />
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* outlet */}
            <div className="outlet">
                <Outlet />
            </div>
            {/* footer part */}
            <footer>Copyrights 2026, All Rights Reserved</footer>
        </div>
    );
}

export default MainLayout;
