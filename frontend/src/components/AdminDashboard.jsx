import React from "react";

const AdminDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      
      {/* User Management */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">User Management</h3>
        <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Ban User
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Approve Contest
        </button>
      </div>
      
      {/* Stock Data Management */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Stock Data Management</h3>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Stock Data
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
          Update Stock Data
        </button>
      </div>
      
      {/* Contest Management */}
      <div>
        <h3 className="text-lg font-semibold">Contest Management</h3>
        <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Create Contest
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
          Monitor Contests
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
