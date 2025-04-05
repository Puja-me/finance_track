import React from "react";

const MarketInsights = () => {
  // Sample market data
  const trendingStocks = [
    { name: "NVIDIA", ticker: "NVDA", change: "+5.2%" },
    { name: "Google", ticker: "GOOGL", change: "-1.8%" },
  ];

  const globalIndices = [
    { name: "NASDAQ", value: "15,200", change: "+1.2%" },
    { name: "NIFTY 50", value: "18,450", change: "-0.6%" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Market Insights</h2>
      
      <h3 className="font-semibold">Trending Stocks</h3>
      <ul>
        {trendingStocks.map((stock, index) => (
          <li key={index} className={stock.change.includes("+") ? "text-green-600" : "text-red-600"}>
            {stock.name} ({stock.ticker}): {stock.change}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Global Market Indices</h3>
      <ul>
        {globalIndices.map((index, i) => (
          <li key={i} className={index.change.includes("+") ? "text-green-600" : "text-red-600"}>
            {index.name}: {index.value} ({index.change})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketInsights;
