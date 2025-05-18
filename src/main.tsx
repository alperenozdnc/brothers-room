import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Home } from "./pages/Home";

import "./main.css";
import "./reset.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Home />
    </StrictMode>,
);
