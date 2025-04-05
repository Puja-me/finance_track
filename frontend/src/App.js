import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import Home from "./pages/Home"; // Home page co
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import UserProfile from "./pages/UserProfile";  // Fixed import path
import ContestSection from "./components/ContestSection";

function App() {
  return (
    <AuthProvider>{/* ✅ Wrap everything in AuthProvider */}
      <Router>
        {/* Page Routing - All routes inside ONE <Routes> block */}
        <Routes>
          <Route path="/" element={<Home />} />           {/* Home page route */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard route */}
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/contest" element={<ContestSection />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
