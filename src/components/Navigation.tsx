import React from "react";

import "./Navigation.css";

export const Navigation: React.FC = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav-container">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/layouts/" className="nav-link">
                                Layouts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/stats/" className="nav-link">
                                Stats
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/modify/" className="nav-link">
                                Modify
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
