import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Layouts, Stats, Modify } from "./pages";

import "./main.css";
import "./reset.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/layouts/" element={<Layouts />} />
                <Route path="/stats/" element={<Stats />} />
                <Route path="/modify/" element={<Modify />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
