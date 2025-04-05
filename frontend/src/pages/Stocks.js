// Enhanced and Functional Stocks.jsx


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import WatchButton from '../components/WatchButton';
import WatchlistSection from '../components/WatchlistSection';
import StockPerformanceChart from '../components/StockPerformanceChart';
import MarketSummary from '../components/MarketSummary';
axios.defaults.baseURL = 'http://localhost:4000';
const Stocks = () => {
  // State variables
  const [stocks, setStocks] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useContext(AuthContext);
  
  // Enhanced features state variables
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  // Fetch stocks and watchlist data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all stocks
        const stocksRes = await axios.get('/api/stocks');
        setStocks(stocksRes.data.data);
        
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
  }, [isAuthenticated]);

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

  // Filter function for stocks
  const filteredStocks = stocks.filter(stock => {
    const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         stock.company.toLowerCase().includes(searchTerm.toLowerCase());
                         
    if (filterOption === 'all') return matchesSearch;
    if (filterOption === 'gainers') return matchesSearch && stock.change_percent > 0;
    if (filterOption === 'losers') return matchesSearch && stock.change_percent < 0;
    
    return matchesSearch;
  });

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4 w-1/4"></div>
      <div className="h-64 bg-gray-200 rounded mb-8"></div>
      <div className="h-8 bg-gray-200 rounded mb-4 w-1/4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );

  if (loading) return <LoadingSkeleton />;
  if (error) return <div className="text-center p-5 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Stock Market</h1>
      
      {/* Market Summary Component */}
      <MarketSummary />
      
      {/* Stock Performance Chart */}
      <div className="mb-8">
        <StockPerformanceChart />
      </div>
      
      {/* Stock List Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Stock List</h2>
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 rounded ${filterOption === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setFilterOption('all')}
            >
              All
            </button>
            <button 
              className={`px-3 py-1 rounded ${filterOption === 'gainers' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setFilterOption('gainers')}
            >
              Gainers
            </button>
            <button 
              className={`px-3 py-1 rounded ${filterOption === 'losers' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setFilterOption('losers')}
            >
              Losers
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search stocks by name or symbol..."
            className="p-2 border rounded-md w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Stock Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border text-left">Symbol</th>
                <th className="p-3 border text-left">Company</th>
                <th className="p-3 border text-left">Price</th>
                <th className="p-3 border text-left">Change</th>
                <th className="p-3 border text-left">Market Cap</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStocks.map(stock => (
                <tr key={stock.id} className="hover:bg-gray-50 border-b">
                  <td className="p-3 border-r font-medium">{stock.symbol}</td>
                  <td className="p-3 border-r">{stock.company}</td>
                  <td className="p-3 border-r">₹{typeof stock.price=== 'number' ? stock.price.toFixed(2): stock.price}</td>
                  <td className={`p-3 border-r ${stock.change_percent > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                    <div className="flex items-center">
                      {stock.change_percent > 0 ? 
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg> : 
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      }
                      {Math.abs(stock.change_percent).toFixed(2)}%
                    </div>
                  </td>
                  <td className="p-3 border-r">{stock.market_cap}</td>
                  <td className="p-3 text-center">
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
      </div>
      
      {/* Watchlist Section */}
      {isAuthenticated && (
        <WatchlistSection watchlist={watchlist} onRemove={removeFromWatchlist} />
      )}
    </div>
  );
};

export default Stocks;
