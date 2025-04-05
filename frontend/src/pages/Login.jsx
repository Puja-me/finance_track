import { useState } from "react";

const Login = ({ switchToRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
  
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Server error");
      }
  
      if (data.userId) {
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        throw new Error("User ID missing from response");
      }
  
      onLogin();
      window.location.href = "/profile"; // Redirect to profile page
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div className="p-8 bg-white shadow-lg rounded-xl w-96 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Login</h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200">
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{" "}
        <button className="text-blue-600 underline" onClick={switchToRegister}>
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;
