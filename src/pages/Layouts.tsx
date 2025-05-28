import React from "react";

import ReactPlayer from "react-player";

import Data from "../data/layout.json";

import "./Layouts.css";

interface RoomLayout {
    date: number;
    totalTime: number;
    rating: number;
    summary: string;
    videoUrl: string;
}

const LayoutView: React.FC<RoomLayout> = ({
    date,
    rating,
    totalTime,
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

                    <li className="layout-view-properties-total-time">
                        <span className="layout-view-properties-total-time-label">
                            Düzenleme süresi
                        </span>
                        {totalTime} dk
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
            {data.map((layoutData, idx) => (
                <LayoutView
                    date={layoutData.date}
                    summary={layoutData.summary}
                    totalTime={layoutData.totalTime}
                    rating={layoutData.rating}
                    videoUrl={layoutData.videoUrl}
                    key={idx}
                />
            ))}
        </main>
    );
};
