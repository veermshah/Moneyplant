import React from "react";
import { useNavigate } from "react-router-dom";

const StockTable = ({ stocks }) => {
    const navigate = useNavigate();
    return (
        <div className="max-w-md mx-auto ml-12 mt-15">
            {" "}
            {/* Adjust max width as needed */}
            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sector</th>
                        <th className="border p-2">Symbol</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Buy/Short</th>
                        <th className="border p-2">Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-gray-100" : ""}
                        >
                            <td className="border p-7">{stock.sector}</td>
                            <td className="border p-7">{stock.symbol}</td>
                            <td className="border p-7">{stock.price}</td>
                            <td
                                className={`border p-2 ${
                                    stock.change >= 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {stock.change}
                            </td>
                            <td className="border p-2">
                                <button
                                    className="bg-[#359381] text-white px-4 py-2 rounded"
                                    onClick={() =>
                                        navigate(`/portfolio/${stock.symbol}`)
                                    }
                                >
                                    Chart
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;
