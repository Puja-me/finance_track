// frontend/src/pages/Stocks.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import WatchButton from '../components/WatchButton';
import WatchlistSection from '../components/WatchlistSection';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useContext(AuthContext);

  // Fetch stocks and watchlist data
  useEffect(() => {
 console.log("Stocks data:",stocks);
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all stocks
        const stocksRes = await axios.get('/api/stocks');
        setStocks(stocksRes.data);
        
        // Fetch user watchlist if authenticated
        if (isAuthenticated) {
          const watchlistRes = await axios.get('/api/watchlist');
          setWatchlist(watchlistRes.data);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
        console.error(err);
      }
    };
    
    fetchData();
  },[isAuthenticated]);

  // Add stock to watchlist
  const addToWatchlist = async (stockId) => {
    if (!isAuthenticated) {
      alert('Please log in to add stocks to your watchlist');
      return;
    }
    
    try {
      await axios.post('/api/watchlist', { stockId });
      
      // Refetch watchlist
      const watchlistRes = await axios.get('/api/watchlist');
      setWatchlist(watchlistRes.data);
      
      // Update stock's watchlist status
      setStocks(prevStocks => 
        prevStocks.map(stock => 
          stock.id === stockId ? { ...stock, isInWatchlist: true } : stock
        )
      );
    } catch (err) {
      console.error('Error adding to watchlist:', err);
    }
  };

  // Remove stock from watchlist
  const removeFromWatchlist = async (stockId) => {
    try {
      await axios.delete(`/api/watchlist/${stockId}`);
      
      // Update watchlist
      setWatchlist(prevWatchlist => 
        prevWatchlist.filter(stock => stock.id !== stockId)
      );
      
      // Update stock's watchlist status
      setStocks(prevStocks => 
        prevStocks.map(stock => 
          stock.id === stockId ? { ...stock, isInWatchlist: false } : stock
        )
      );
    } catch (err) {
      console.error('Error removing from watchlist:', err);
    }
  };

  if (loading) return <div className="text-center p-5">Loading...</div>;
  if (error) return <div className="text-center p-5 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Stock List</h1>
      
      {/* Stock Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border text-left">Symbol</th>
              <th className="p-2 border text-left">Company</th>
              <th className="p-2 border text-left">Price</th>
              <th className="p-2 border text-left">Change</th>
              <th className="p-2 border text-left">Market Cap</th>
              <th className="p-2 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map(stock => (
              <tr key={stock.id} className="hover:bg-gray-50">
                <td className="p-2 border font-medium">{stock.symbol}</td>
                <td className="p-2 border">{stock.company}</td>
                <td className="p-2 border">₹{stock.price.toFixed(2)}</td>
                <td className={`p-2 border ${stock.change_percent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stock.change_percent > 0 ? '+' : ''}{stock.change_percent.toFixed(2)}%
                </td>
                <td className="p-2 border">{stock.market_cap}</td>
                <td className="p-2 border text-center">
                  <WatchButton 
                    stockId={stock.id} 
                    isInWatchlist={watchlist.some(item => item.id === stock.id)}
                    onAdd={() => addToWatchlist(stock.id)}
                    onRemove={() => removeFromWatchlist(stock.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Watchlist Section */}
      {isAuthenticated && (
        <WatchlistSection watchlist={watchlist} onRemove={removeFromWatchlist} />
      )}
    </div>
  );
};

export default Stocks;
