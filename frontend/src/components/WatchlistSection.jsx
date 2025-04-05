import React from 'react';
import WatchlistCard from './WatchlistCard';

const WatchlistSection = ({ watchlist, onRemove }) => {
  if (watchlist.length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">My Watchlist</h2>
        <p className="text-gray-500">You don't have any stocks in your watchlist yet.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">My Watchlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchlist.map(stock => (
          <WatchlistCard 
            key={stock.id} 
            stock={stock} 
            onRemove={onRemove} 
          />
        ))}
      </div>
    </div>
  );
};

export default WatchlistSection;
