// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TradingViewWidget(props) {
    const container = useRef();
    const { symbol } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const script = document.createElement("script");
            script.src =
                "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
                "width": "980",
                "height": "610",
                "symbol": "${symbol}",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "hide_top_toolbar": true,
                "hide_legend": true,
                "allow_symbol_change": true,
                "save_image": false,
                "hide_volume": true,
                "support_host": "https://www.tradingview.com"
              }`;
            container.current.appendChild(script);

            return () => {
                container.current.removeChild(script);
            };
        } catch (error) {
            console.error("An error occurred while loading the script:", error);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-black mt-7 ml-10">
                TICKER: {symbol}
            </h1>
            <div
                className="flex-grow mt-3 tradingview-widget-container max-h-[575px]"
                ref={container}
            >
                <div className="tradingview-widget-container__widget"></div>
            </div>
            <a
                className="my-8 text-white hover:bg-[#359381] bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                href="/portfolio"
            >
                Go Back
            </a>
        </div>
    );
}

export default memo(TradingViewWidget);
