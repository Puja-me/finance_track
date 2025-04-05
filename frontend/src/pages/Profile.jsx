import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: 'JohnDoe123',
    email: 'john.doe@example.com',
    phoneNumber: '+91 9876543210',
    dateOfBirth: '15-05-1990',
    panCardNumber: 'ABCDE1234F',
    aadharCardNumber: '1234 5678 9012',
    bankAccountNumber: '1234567890123456',
    tradingExperience: 'Intermediate',
    investmentPreference: 'Moderate Risk'
  });

  const [formData, setFormData] = useState({...userData});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({...formData});
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
    alert('Profile updated successfully!');
  };

  const toggleEdit = () => {
    setFormData({...userData});
    setIsEditing(!isEditing);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">My Profile</h2>
          <button 
            onClick={toggleEdit} 
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition shadow-md"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="relative">
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="dd-mm-yyyy"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PAN Card Number</label>
                <input
                  type="text"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Card Number</label>
                <input
                  type="text"
                  name="aadharCardNumber"
                  value={formData.aadharCardNumber}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Number</label>
                <input
                  type="text"
                  name="bankAccountNumber"
                  value={formData.bankAccountNumber}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trading Experience</label>
                <div className="relative">
                  <select
                    name="tradingExperience"
                    value={formData.tradingExperience}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Professional">Professional</option>
                  </select>
                  <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Investment Preference</label>
                <div className="relative">
                  <select
                    name="investmentPreference"
                    value={formData.investmentPreference}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="Conservative">Conservative</option>
                    <option value="Moderate Risk">Moderate Risk</option>
                    <option value="Aggressive">Aggressive</option>
                    <option value="Very Aggressive">Very Aggressive</option>
                  </select>
                  <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
              >
                Update Profile
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Username</p>
                <p className="text-lg font-semibold text-gray-800">{userData.username}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                <p className="text-lg font-semibold text-gray-800">{userData.email}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Phone Number</p>
                <p className="text-lg font-semibold text-gray-800">{userData.phoneNumber}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Date of Birth</p>
                <p className="text-lg font-semibold text-gray-800">{userData.dateOfBirth}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">PAN Card Number</p>
                <p className="text-lg font-semibold text-gray-800">{userData.panCardNumber}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Aadhar Card Number</p>
                <p className="text-lg font-semibold text-gray-800">{userData.aadharCardNumber}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Bank Account Number</p>
                <p className="text-lg font-semibold text-gray-800">{userData.bankAccountNumber}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Trading Experience</p>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-800">{userData.tradingExperience}</span>
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {userData.tradingExperience === 'Beginner' && '0-1 years'}
                    {userData.tradingExperience === 'Intermediate' && '1-3 years'}
                    {userData.tradingExperience === 'Advanced' && '3-5 years'}
                    {userData.tradingExperience === 'Professional' && '5+ years'}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">Investment Preference</p>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-800">{userData.investmentPreference}</span>
                  <span className={`ml-2 px-2 py-1 text-xs font-medium rounded
                    ${userData.investmentPreference === 'Conservative' ? 'bg-green-100 text-green-800' : ''}
                    ${userData.investmentPreference === 'Moderate Risk' ? 'bg-blue-100 text-blue-800' : ''}
                    ${userData.investmentPreference === 'Aggressive' ? 'bg-orange-100 text-orange-800' : ''}
                    ${userData.investmentPreference === 'Very Aggressive' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {userData.investmentPreference}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
