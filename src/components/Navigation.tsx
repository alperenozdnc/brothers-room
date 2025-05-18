import React from "react";

import { Link } from "react-router-dom";

import "./Navigation.css";

export const Navigation: React.FC = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/layouts/" className="nav-link">
                                Layouts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stats/" className="nav-link">
                                Stats
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/modify/" className="nav-link">
                                Modify
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
