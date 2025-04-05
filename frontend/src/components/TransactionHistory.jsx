import React from "react";

const TransactionHistory = () => {
  // Sample transaction data
  const transactions = [
    { id: 1, date: "2025-03-10", stock: "AAPL", type: "Buy", quantity: 10, price: 150.0 },
    { id: 2, date: "2025-03-12", stock: "TSLA", type: "Sell", quantity: 5, price: 720.0 },
    { id: 3, date: "2025-03-15", stock: "AMZN", type: "Buy", quantity: 2, price: 3400.75 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Date</th>
            <th className="border-b py-2 px-4">Stock</th>
            <th className="border-b py-2 px-4">Type</th>
            <th className="border-b py-2 px-4">Quantity</th>
            <th className="border-b py-2 px-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.date}</td>
              <td className="py-2 px-4 border-b">{transaction.stock}</td>
              <td
                className={`py-2 px-4 border-b ${
                  transaction.type === "Buy" ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.type}
              </td>
              <td className="py-2 px-4 border-b">{transaction.quantity}</td>
              <td className="py-2 px-4 border-b">${transaction.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
