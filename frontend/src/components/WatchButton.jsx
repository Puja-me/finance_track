// frontend/src/components/WatchButton.jsx
import React from 'react';

const WatchButton = ({ stockId, isInWatchlist, onAdd, onRemove }) => {
  const handleClick = () => {
    if (isInWatchlist) {
      onRemove(stockId);
    } else {
      onAdd(stockId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-1 rounded ${
        isInWatchlist 
          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
          : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
    >
      {isInWatchlist ? 'Unwatch' : 'Watch'}
    </button>
  );
};

export default WatchButton;
