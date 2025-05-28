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
                                Anasayfa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/layouts/" className="nav-link">
                                Arayüzler
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stats/" className="nav-link">
                                İstatistikler
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/modify/" className="nav-link">
                                Oluştur
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
