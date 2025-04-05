import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockPerformanceChart = () => {
  // Sample data - replace with real API data
  const [timeframe, setTimeframe] = useState('1W');
  
  // Mock data for different timeframes
  const data = {
    '1D': [
      { date: '9:30', value: 156.12 },
      { date: '10:30', value: 157.35 },
      { date: '11:30', value: 158.21 },
      { date: '12:30', value: 157.40 },
      { date: '13:30', value: 159.03 },
      { date: '14:30', value: 158.60 },
      { date: '15:30', value: 159.75 },
      { date: '16:00', value: 160.10 }
    ],
    '1W': [
      { date: 'Mon', value: 155.20 },
      { date: 'Tue', value: 156.80 },
      { date: 'Wed', value: 158.30 },
      { date: 'Thu', value: 157.50 },
      { date: 'Fri', value: 160.10 }
    ],
    '1M': [
      { date: 'Week 1', value: 152.30 },
      { date: 'Week 2', value: 155.80 },
      { date: 'Week 3', value: 157.20 },
      { date: 'Week 4', value: 160.10 }
    ],
    '3M': [
      { date: 'Jan', value: 145.70 },
      { date: 'Feb', value: 152.30 },
      { date: 'Mar', value: 160.10 }
    ],
    '1Y': [
      { date: 'Apr', value: 142.50 },
      { date: 'Jul', value: 148.90 },
      { date: 'Oct', value: 153.40 },
      { date: 'Jan', value: 156.80 },
      { date: 'Apr', value: 160.10 }
    ]
  };

  const currentData = data[timeframe];
  const startValue = currentData[0].value;
  const endValue = currentData[currentData.length - 1].value;
  const change = endValue - startValue;
  const changePercent = (change / startValue) * 100;
  const isPositive = change >= 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Market Performance</h2>
        <div>
          <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <span className="text-lg font-bold mr-2">₹{endValue.toFixed(2)}</span>
            <span className="flex items-center">
              {isPositive ? (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
              {Math.abs(changePercent).toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={currentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
          <Tooltip 
            formatter={(value) => [`₹${value}`, 'Price']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={isPositive ? "#10B981" : "#EF4444"} 
            strokeWidth={2} 
            dot={false} 
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-center mt-4 space-x-2">
        {['1D', '1W', '1M', '3M', '1Y'].map((option) => (
          <button
            key={option}
            className={`px-4 py-1 rounded ${
              timeframe === option
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setTimeframe(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockPerformanceChart;
