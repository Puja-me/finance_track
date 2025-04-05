import { useState } from "react";
import { IoClose } from 'react-icons/io5';
import axios from "axios";

const Register = ({ switchToLogin, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
    pan: "",
    aadhar: "",
    bank_account: "",
    experience: "",
    investment_pref: "",
    password: "",
  });

  const [message, setMessage] = useState(null); // To display success/error messages
  const [loading, setLoading] = useState(false); // Show loading while API call is happening

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("http://localhost:4000/auth/register", formData);
      setMessage({ type: "success", text: response.data.message });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Registration failed. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="bg-white p-6 rounded-md shadow-lg relative w-full max-w-md max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>

        {message && (
          <p className={`text-center p-2 rounded-md mb-2 ${message.type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
            {message.text}
          </p>
        )}

<form onSubmit={handleSubmit} className="space-y-3">
  <input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded-md" onChange={handleChange} required />
  <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" onChange={handleChange} required />
  <input type="tel" name="phone" placeholder="Phone Number" pattern="[0-9]{10}" maxLength="10" className="w-full p-2 border rounded-md" onChange={handleChange} required />
  <input type="date" name="dob" className="w-full p-2 border rounded-md" onChange={handleChange} required />
  <input type="text" name="pan" placeholder="PAN Card Number" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" maxLength="10" className="w-full p-2 border rounded-md uppercase" onChange={handleChange} required />
  <input type="text" name="aadhar" placeholder="Aadhar Card Number" pattern="[0-9]{12}" maxLength="12" className="w-full p-2 border rounded-md" onChange={handleChange} required />
  <input type="text" name="bankAccount" placeholder="Bank Account Number" maxLength="11" className="w-full p-2 border rounded-md" onChange={handleChange} required />
  <select name="experience" className="w-full p-2 border rounded-md" onChange={handleChange} required>
    <option value="">Trading Experience</option>
    <option value="Beginner">Beginner</option>
    <option value="Intermediate">Intermediate</option>
    <option value="Expert">Expert</option>
  </select>

  <select name="investmentPref" className="w-full p-2 border rounded-md" onChange={handleChange} required>
    <option value="">Investment Preference</option>
    <option value="Stocks">Stocks</option>
    <option value="Mutual Funds">Mutual Funds</option>
    <option value="Crypto">Crypto</option>
    <option value="Bonds">Bonds</option>
  </select>
  
  <input type="password" name="password" placeholder="Password" minLength="6" className="w-full p-2 border rounded-md" onChange={handleChange} required />

  <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" disabled={loading}>
    {loading ? "Registering..." : "Register"}
  </button>
</form>


        <p className="text-center mt-4">
          Already have an account?{" "}
          <button className="text-blue-600 underline" onClick={switchToLogin}>
            Login
          </button>
        </p>
      </div>
  );
};

export default Register;
