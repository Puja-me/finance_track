import React from "react";

const Watchlist = () => {
  // Sample watchlist data
  const watchlist = [
    { ticker: "AAPL", name: "Apple Inc.", price: 156.40, change: 1.2 },
    { ticker: "TSLA", name: "Tesla Inc.", price: 730.50, change: -2.1 },
    { ticker: "AMZN", name: "Amazon.com Inc.", price: 3400.75, change: 0.5 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Watchlist</h2>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Stock</th>
            <th className="border-b py-2 px-4">Ticker</th>
            <th className="border-b py-2 px-4">Price</th>
            <th className="border-b py-2 px-4">Change</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((stock, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{stock.name}</td>
              <td className="py-2 px-4 border-b">{stock.ticker}</td>
              <td className="py-2 px-4 border-b">${stock.price.toFixed(2)}</td>
              <td
                className={`py-2 px-4 border-b ${
                  stock.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.change >= 0 ? `+${stock.change}%` : `${stock.change}%`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
