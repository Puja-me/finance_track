import React from "react";

const PortfolioOverview = () => {
  // Sample portfolio data
  const totalInvestment = 10000;
  const currentValue = 12000;
  const profitLoss = currentValue - totalInvestment;
  const profitLossPercentage = ((profitLoss / totalInvestment) * 100).toFixed(2);

  const topPerforming = [
    { name: "Apple Inc.", ticker: "AAPL", gain: "+12%" },
    { name: "Tesla Inc.", ticker: "TSLA", gain: "+9%" },
  ];

  const worstPerforming = [
    { name: "Amazon Inc.", ticker: "AMZN", loss: "-6%" },
    { name: "Meta Inc.", ticker: "META", loss: "-4%" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Portfolio Overview</h2>
      <p>Total Investment: <span className="font-semibold">${totalInvestment}</span></p>
      <p>Current Value: <span className="font-semibold">${currentValue}</span></p>
      <p className={profitLoss >= 0 ? "text-green-600" : "text-red-600"}>
        Profit/Loss: ${profitLoss} ({profitLossPercentage}%)
      </p>
      <h3 className="font-semibold mt-4">Top Performing Stocks</h3>
      <ul>
        {topPerforming.map((stock, index) => (
          <li key={index} className="text-green-600">{stock.name} ({stock.ticker}): {stock.gain}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4">Worst Performing Stocks</h3>
      <ul>
        {worstPerforming.map((stock, index) => (
          <li key={index} className="text-red-600">{stock.name} ({stock.ticker}): {stock.loss}</li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioOverview;
