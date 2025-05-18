import React, { type JSX } from "react";
import { Navigation } from "./Navigation";

interface Props {
    element: JSX.Element;
}

export const Page: React.FC<Props> = ({ element }) => {
    return (
        <>
            <Navigation />
            {element}
        </>
    );
};
