import React from 'react';

const MarketSummary = () => {
  // Sample data - replace with real API data
  const indices = [
    { name: 'NIFTY 50', value: 22345.30, change: 1.2 },
    { name: 'SENSEX', value: 73480.10, change: 0.9 },
    { name: 'NIFTY BANK', value: 48975.65, change: -0.4 }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold mb-4">Market Summary</h2>
      <div className="flex flex-wrap">
        {indices.map((index, i) => (
          <div key={i} className={`w-full md:w-1/3 ${i < indices.length - 1 ? 'md:border-r' : ''} px-4 py-2`}>
            <div className="text-center">
              <h3 className="font-medium text-gray-800">{index.name}</h3>
              <p className="text-xl font-bold">{index.value.toLocaleString()}</p>
              <p className={`text-sm font-medium ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {index.change >= 0 ? '+' : ''}{index.change}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketSummary;
