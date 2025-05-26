import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Chart,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Data from "../data/layout.json";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
);

const backgroundColorPlugin = {
    id: "custom_canvas_background_color",
    beforeDraw: (chart: Chart) => {
        const ctx = chart.canvas.getContext("2d");
        if (!ctx) return;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    },
};

export const Stats: React.FC = () => {
    const labels = Data.map((data) =>
        new Date(data.date * 1000).toLocaleDateString(),
    );

    const ratingData = {
        labels,
        datasets: [
            {
                label: "Puan",
                data: Data.map((data) => data.rating),
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "black",
                borderWidth: 2,
                tension: 0.3,
            },
        ],
    };

    const timeData = {
        labels,
        datasets: [
            {
                label: "Düzenleme Süresi",
                data: Data.map((data) => data.totalTime),
                backgroundColor: "#f3ba2f",
                borderColor: "black",
                borderWidth: 2,
                tension: 0.3,
            },
        ],
    };

    const chartOptions = (title: string, yLabel: string) => ({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title,
                font: {
                    size: 18,
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: yLabel,
                },
            },
            x: {
                title: {
                    display: true,
                    text: "zaman",
                },
            },
        },
    });

    return (
        <div
            className="chart-container"
            style={{ display: "grid", gap: "2rem" }}
        >
            <Line
                data={ratingData}
                options={chartOptions("puan/zaman", "puan")}
                plugins={[backgroundColorPlugin]}
            />
            <Line
                data={timeData}
                options={chartOptions(
                    "düzenleme süresi/zaman",
                    "düzenleme süresi",
                )}
                plugins={[backgroundColorPlugin]}
            />
        </div>
    );
};
