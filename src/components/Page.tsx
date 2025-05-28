import React, { type JSX } from "react";
import { Navigation } from "./Navigation";

import "./Page.css";

interface Props {
    element: JSX.Element;
}

export const Page: React.FC<Props> = ({ element }) => {
    return (
        <div className="page-container">
            <Navigation />
            {element}
        </div>
    );
};
