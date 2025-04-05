import React from "react";

const AccountManagement = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Account Management</h2>
      
      {/* Profile Settings */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Profile Settings</h3>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
      
      {/* Bank Details / Wallet Integration */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Bank Details / Wallet</h3>
        <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Update Bank Details
        </button>
      </div>
      
      {/* Security Options */}
      <div>
        <h3 className="text-lg font-semibold">Security Options</h3>
        <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Enable 2FA
        </button>
        <button className="mt-2 ml-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default AccountManagement;
