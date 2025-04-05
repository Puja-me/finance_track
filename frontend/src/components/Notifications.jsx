import React from "react";

const NotificationsAlerts = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: "AAPL reached your target price of $160!", type: "Price Alert", time: "2h ago" },
    { id: 2, message: "Your rank in the contest has improved to #5!", type: "Contest Update", time: "4h ago" },
    { id: 3, message: "TSLA declared a dividend payout of $1.50 per share.", type: "Dividend Announcement", time: "1d ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Notifications & Alerts</h2>
      <ul className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li key={notification.id} className="py-3">
            <p className="font-medium">{notification.type}</p>
            <p className="text-gray-600">{notification.message}</p>
            <p className="text-sm text-gray-400">{notification.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsAlerts;