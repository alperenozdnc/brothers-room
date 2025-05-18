import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Layouts, Stats, Modify } from "./pages";
import { Page } from "./components";

import "./main.css";
import "./reset.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page element={<Home />} />} />

                <Route
                    path="/layouts/"
                    element={<Page element={<Layouts />} />}
                />

                <Route path="/stats/" element={<Page element={<Stats />} />} />

                <Route
                    path="/modify/"
                    element={<Page element={<Modify />} />}
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
