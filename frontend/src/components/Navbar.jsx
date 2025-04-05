import { useState, useEffect } from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Navbar = () => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on page load
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Website Name */}
        <div className="flex items-center space-x-2">
          <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-serif">
            TW
          </span>
          <span className="text-xl font-semibold text-black">TradeWise</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 text-black font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/Dashboard" className="hover:text-blue-600">Dashboard</a>
          <a href="/stocks" className="hover:text-blue-600">Stocks</a>
          <a href="/contest" className="hover:text-blue-600">Contest</a>
          <a href="#" className="hover:text-blue-600">Financial Tools</a>
          <a href="#" className="hover:text-blue-600">Learn</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <>
              <a href="/profile" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
                Profile
              </a>
              <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setRegisterOpen(true)} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
                Register
              </button>
              <button onClick={() => setLoginOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Login
              </button>
            </>
          )}
        </div>
      </div>

      {/* Login & Register Modals */}
      {isRegisterOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg relative w-full max-w-md">
            <button className="absolute top-2 right-2 text-gray-600" onClick={() => setRegisterOpen(false)}>✖</button>
            <Register switchToLogin={() => { setRegisterOpen(false); setTimeout(() => setLoginOpen(true), 200); }} />
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg relative w-full max-w-md">
            <button className="absolute top-2 right-2 text-gray-600" onClick={() => setLoginOpen(false)}>✖</button>
            <Login switchToRegister={() => { setLoginOpen(false); setTimeout(() => setRegisterOpen(true), 200); }} onLogin={() => setIsLoggedIn(true)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
