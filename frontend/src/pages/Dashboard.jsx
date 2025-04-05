import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioOverview from "../components/PortfolioOverview";
import MarketInsights from "../components/MarketInsights";
import Watchlist from "../components/Watchlist";
import TransactionHistory from "../components/TransactionHistory";
import Notifications from "../components/Notifications";
import PerformanceAnalytics from "../components/PerformanceAnalytics";
import ReferralRewards from "../components/ReferralRewards";
import AdminDashboard from "../components/AdminDashboard";
import AccountManagement from "../components/AccountManagement";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-6 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioOverview />
          <MarketInsights />
          <Watchlist />
          <TransactionHistory />
          <Notifications />
          <PerformanceAnalytics />
          <ReferralRewards />
          <AdminDashboard />
          <AccountManagement />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
