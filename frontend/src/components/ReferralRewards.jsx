import React from "react";

const ReferralRewards = () => {
  // Sample referral progress data
  const referrals = [
    { id: 1, name: "John Doe", status: "Completed" },
    { id: 2, name: "Jane Smith", status: "Pending" },
    { id: 3, name: "Alice Johnson", status: "Completed" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Referral & Rewards</h2>
      
      {/* Referral Progress */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Your Referrals</h3>
        <ul className="mt-2">
          {referrals.map((referral) => (
            <li key={referral.id} className="p-2 border-b">
              {referral.name} - 
              <span className={`ml-2 font-semibold ${referral.status === "Completed" ? "text-green-500" : "text-yellow-500"}`}>
                {referral.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Reward Redemption */}
      <div>
        <h3 className="text-lg font-semibold">Redeem Your Rewards</h3>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Redeem Now
        </button>
      </div>
    </div>
  );
};

export default ReferralRewards;
