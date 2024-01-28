import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
);

function PortfolioChart() {
    const data = {
        labels: [
            "Communication Services",
            "Consumer Discretionary",
            "Consumer Staples",
            "Energy",
            "Financials",
            "Health Care",
            "Industrials",
            "Information Technology",
            "Materials",
            "Real Estate",
            "Utilities",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3, 23, 5, 2, 3, 2],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Your Portfolio Allocations",
                font: {
                    size: 18,
                },
            },
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0,
            },
        },
    };

    return (
        <div className="App">
            <div className="min-w-[600px] w-3/7">
                <Pie data={data} options={options}></Pie>
            </div>
        </div>
    );
}

export default PortfolioChart;
