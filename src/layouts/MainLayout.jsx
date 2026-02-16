import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            {/* header part */}
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/html">HTML</Link>
                        </li>
                        <li>
                            <Link to="/css">CSS</Link>
                        </li>
                        <li>
                            <Link to="/javascript">JS</Link>
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
