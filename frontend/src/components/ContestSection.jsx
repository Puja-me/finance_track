import React from "react";

const ContestSection = () => {
  // Sample contest data
  const ongoingContests = [
    { name: "Monthly Trading Challenge", timeLeft: "5d 12h 30m", rank: 12, portfolioValue: "$15,300" },
    { name: "Crypto Trading League", timeLeft: "2d 8h 15m", rank: 5, portfolioValue: "$9,750" },
  ];

  const leaderboard = [
    { rank: 1, name: "TraderX", portfolioValue: "$20,500" },
    { rank: 2, name: "AlphaBull", portfolioValue: "$19,800" },
    { rank: 3, name: "InvestKing", portfolioValue: "$18,900" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contest Section</h2>
      
      <h3 className="font-semibold">Ongoing Contests</h3>
      <ul>
        {ongoingContests.map((contest, index) => (
          <li key={index} className="mt-2">
            <strong>{contest.name}</strong> - Time Left: {contest.timeLeft} - Rank: {contest.rank} - Portfolio: {contest.portfolioValue}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Leaderboard</h3>
      <ul>
        {leaderboard.map((entry, i) => (
          <li key={i} className="mt-1">
            #{entry.rank} {entry.name} - Portfolio: {entry.portfolioValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestSection;
