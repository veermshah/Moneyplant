import PortfolioChart from "../components/PortfolioChart";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import TradingViewWidget from "../components/TradingViewWidget";
import PortfolioTable from "../components/PortfolioTable";
import React, { useState, useEffect } from "react";

export default function Portfolio() {
    const [stox, setStox] = useState([]);
    // useEffect(() => {
    // fetch("http://127.0.0.1:8000/portfolios/10/", {
    //     method: "POST"
    // })
    // .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         localStorage.setItem("stocks", JSON.stringify(data));
    //     })
    // }, []);

    const stocks = [
        {
            sector: "Communication Services",
            symbol: "FNCM",
            price: 150.25,
            change: "Buy",
        },
        {
            sector: "Consumer Discretionary",
            symbol: "FDIV  ",
            price: 62.5,
            change: "Buy",
        },
        {
            sector: "Consumer Staples",
            symbol: "FTCG  ",
            price: 62.5,
            change: "Buy",
        },
        { sector: "Energy", symbol: "FSLR", price: 62.5, change: "Sell" },
        { sector: "Financials", symbol: "FIDS", price: 62.5, change: "Sell" },
        { sector: "Health Care", symbol: "FHLC", price: 62.5, change: "Buy" },
        { sector: "Industrials", symbol: "FLIN", price: 62.5, change: "Sell" },
        {
            sector: "Information Technology",
            symbol: "FTEK",
            price: 62.5,
            change: "Sell",
        },
        { sector: "Materials", symbol: "FLMV", price: 62.5, change: "Sell" },
        { sector: "Real Estate", symbol: "FREL", price: 62.5, change: "Buy" },
        { sector: "Utilities", symbol: "FLUV", price: 62.5, change: "Buy" },
        // Add more stock data as needed
    ];
    const navigate = useNavigate();

    return (
        <div>
            <Header active="portfolio" />
            <h1 className="text-3xl font-semibold text-black pt-20 mt-10 ml-12">
                USER: Veer Shah
            </h1>
            <h1 className="text-xl font-semibold text-black mt-2 ml-12">
                Risk Aversion Score: {Math.round(localStorage.risk * 100) / 100}
            </h1>
            <div className="flex mt-2">
                <div className="w-1/2 pr-10" style={{ marginTop: '20px' }}>
                    <PortfolioTable stocks={stocks} />
                </div>
                <div className="w-1/2">
                    <PortfolioChart />
                </div>
            </div>
        </div>
    );
}
