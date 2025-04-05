import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const UserPerformanceAnalytics = () => {
  // Sample investment growth data
  const investmentGrowth = [
    { month: "Jan", value: 10000 },
    { month: "Feb", value: 11000 },
    { month: "Mar", value: 10500 },
    { month: "Apr", value: 12000 },
    { month: "May", value: 13000 },
  ];

  // Sample asset allocation data
  const assetAllocation = [
    { name: "Stocks", value: 60 },
    { name: "Bonds", value: 25 },
    { name: "Crypto", value: 10 },
    { name: "Cash", value: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">User Performance Analytics</h2>
      
      {/* Investment Growth Chart */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Investment Growth</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={investmentGrowth}>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Asset Allocation Pie Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Asset Allocation</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={assetAllocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {assetAllocation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserPerformanceAnalytics;
