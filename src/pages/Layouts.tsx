import React from "react";

import ReactPlayer from "react-player";

import Data from "../data/layout.json";

import "./Layouts.css";

interface RoomLayout {
    date: number;
    rating: number;
    summary: string;
    videoUrl: string;
}

const LayoutView: React.FC<RoomLayout> = ({
    date,
    rating,
    summary,
    videoUrl,
}) => {
    return (
        <section className="layout-view">
            <ul className="layout-view-properties">
                <div className="layout-view-properties-left-side">
                    <li className="layout-view-properties-date">
                        {new Date(date * 1000).toLocaleDateString()}
                    </li>

                    <li className="layout-view-properties-rating">
                        <span className="layout-view-properties-rating-label">
                            Puanlama
                        </span>

                        <progress
                            value={rating * 10}
                            max={100}
                            className="layout-view-properties-rating-content"
                            title={`${rating}/10`}
                        />
                    </li>

                    <li className="layout-view-properties-summary">
                        <q>{summary}</q>
                    </li>
                </div>

                <li className="layout-view-properties-video">
                    <ReactPlayer controls url={videoUrl} />
                </li>
            </ul>
        </section>
    );
};

export const Layouts: React.FC = () => {
    const data = Data as unknown as RoomLayout[];

    return (
        <main>
            {data.map((layoutData) => (
                <LayoutView
                    date={layoutData.date}
                    summary={layoutData.summary}
                    rating={layoutData.rating}
                    videoUrl={layoutData.videoUrl}
                />
            ))}
        </main>
    );
};
