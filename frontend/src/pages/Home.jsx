import { useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

const Home = () => {
  const [watchlist, setWatchlist] = useState([]);

  const handleWatch = (symbol) => {
    setWatchlist((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center bg-gray-100 min-h-[58vh] pt-20 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Track, Analyze, and Grow Your Investments</h1>
        <p className="text-gray-600 mt-2">Get real-time stock updates, portfolio analysis, and financial insights.</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Market Overview Section */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "NIFTY 50", price: "22,456.80", change: "+0.75%" },
            { name: "SENSEX", price: "73,890.24", change: "+0.82%" },
            { name: "USD/INR", price: "74.25", change: "-0.12%" },
            { name: "Gold", price: "62,450", change: "+0.35%" },
          ].map((stock, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">{stock.name}</h3>
              <p className="text-xl font-bold">{stock.price}</p>
              <p className={stock.change.includes("+") ? "text-green-500" : "text-red-500"}>{stock.change}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Stocks Table with Horizontal Scroll */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Trending Stocks</h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left whitespace-nowrap">Symbol</th>
                <th className="p-3 text-left whitespace-nowrap">Company</th>
                <th className="p-3 text-left whitespace-nowrap">Price</th>
                <th className="p-3 text-left whitespace-nowrap">Change</th>
                <th className="p-3 text-left whitespace-nowrap">Market Cap</th>
                <th className="p-3 text-left whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { symbol: "RELIANCE", company: "Reliance Industries", price: "₹2456.75", change: "+1.24%", cap: "16.5L Cr" },
                { symbol: "TCS", company: "Tata Consultancy Services", price: "₹3752.10", change: "+0.88%", cap: "13.8L Cr" },
                { symbol: "HDFCBANK", company: "HDFC Bank", price: "₹1678.45", change: "-0.32%", cap: "12.3L Cr" },
                { symbol: "INFY", company: "Infosys", price: "₹1456.20", change: "+0.56%", cap: "6.2L Cr" },
                { symbol: "BHARTIARTL", company: "Bharti Airtel", price: "₹865.30", change: "+1.12%", cap: "4.8L Cr" },
              ].map((stock) => (
                <tr key={stock.symbol} className="border-b">
                  <td className="p-3 whitespace-nowrap">{stock.symbol}</td>
                  <td className="p-3 whitespace-nowrap">{stock.company}</td>
                  <td className="p-3 whitespace-nowrap">{stock.price}</td>
                  <td className={`p-3 whitespace-nowrap ${stock.change.includes("+") ? "text-green-500" : "text-red-500"}`}>
                    {stock.change}
                  </td>
                  <td className="p-3 whitespace-nowrap">{stock.cap}</td>
                  <td className="p-3 whitespace-nowrap">
                    <button
                      onClick={() => handleWatch(stock.symbol)}
                      className={`px-3 py-1 rounded-md border ${
                        watchlist.includes(stock.symbol)
                          ? "bg-green-500 text-white"
                          : "bg-white border-blue-600 text-blue-600"
                      }`}
                    >
                      {watchlist.includes(stock.symbol) ? "Watching" : "Watch"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
