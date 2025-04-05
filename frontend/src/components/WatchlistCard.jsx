import React from 'react';

const WatchlistCard = ({ stock, onRemove }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{stock.symbol}</h3>
        <button 
          onClick={() => onRemove(stock.id)}
          className="text-gray-400 hover:text-red-500"
          aria-label="Remove from watchlist"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <p className="text-gray-600">{stock.company}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="font-medium">₹{stock.price?.toFixed(2)}</span>
        <span className={`${stock.change_percent > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
          {stock.change_percent > 0 ? '+' : ''}{stock.change_percent?.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default WatchlistCard;
