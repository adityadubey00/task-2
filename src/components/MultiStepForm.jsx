import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [users, setUsers] = useState([{ name: '', email: '', phone: '' }]);


  // Step switching functions
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  // Handle user input changes
  const handleUserChange = (index, field, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  // Add a new user input field
  const addUser = () => {
    setUsers([...users, { name: '', email: '', phone: '' }]);
  };

  // Remove a user input field
  const removeUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl">
        {/* Step Indicator */}
        <div className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              1
            </div>
            <span className={`${currentStep === 1 ? 'text-blue-500' : 'text-gray-400'}`}>Your Profile</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              2
            </div>
            <span className={`${currentStep >= 2 ? 'text-blue-500' : 'text-gray-400'}`}>Business Information</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              3
            </div>
            <span className={`${currentStep === 3 ? 'text-blue-500' : 'text-gray-400'}`}>Additional Users</span>
          </div>
        </div>

        {/* Step 1: Your Profile */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Step 1: Your Profile</h2>
            <p className="text-gray-500 mb-6">
              Enter the login information for your account. You will be able to create additional users after registering.
            </p>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="input-style" />
                <input type="text" placeholder="Last Name" className="input-style" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email" className="input-style" />
                <input type="text" placeholder="Phone Number" className="input-style" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input type="password" placeholder="Password" className="input-style" />
                <input type="password" placeholder="Confirm Password" className="input-style" />
              </div>

              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-500 text-sm">Back to Login</a>
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Next Step</button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Business Information */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Step 2: Business Information</h2>
            <p className="text-gray-500 mb-6">Please, enter information about your company.</p>
            <form>
              <h3 className="text-lg font-semibold text-blue-500 mb-4">GENERAL INFORMATION</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Brand Name" className="input-style" />
                <input type="text" placeholder="Brand Type" className="input-style" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Street Address" className="input-style" />
                <input type="text" placeholder="City" className="input-style" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input type="text" placeholder="Zip Code" className="input-style" />
                <input type="text" placeholder="Tax ID Number" className="input-style" />
              </div>

              <h3 className="text-lg font-semibold text-blue-500 mb-4">DOCUMENTS</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Electronically sign the agreement(s)" className="input-style" />
                <input type="text" placeholder="Non adult beverage Kroger market supplier waiver and release" className="input-style" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input type="text" placeholder="COI PDF UPLOAD" className="input-style" />
                <input type="text" placeholder="Electronically sign the agreement(s)" className="input-style" />
              </div>

              <div className="flex justify-between items-center">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-400">Previous Step</button>
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Next Step</button>
              </div>
            </form>
          </div>
        )}

     {/* Step 3: Additional Users */}
     {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Step 3: Additional Users</h2>
            <p className="text-gray-500 mb-6">You can add multiple users for your account.</p>

            {/* Dynamic User Input Fields */}
            {users.map((user, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="User Name"
                  value={user.name}
                  onChange={(e) => handleUserChange(index, 'name', e.target.value)}
                  className="input-style"
                />
                <input
                  type="email"
                  placeholder="User Email"
                  value={user.email}
                  onChange={(e) => handleUserChange(index, 'email', e.target.value)}
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="User Phone Number"
                  value={user.phone}
                  onChange={(e) => handleUserChange(index, 'phone', e.target.value)}
                  className="input-style"
                />
                {index > 0 && (
                  <button type="button" onClick={() => removeUser(index)} className="text-red-500">
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addUser}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
            >
              Add Another User
            </button>

            <div className="flex justify-between items-center">
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-400">
                Previous Step
              </button>
              <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Tailwind CSS classes for input styles
const inputStyle = `border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`;

export default MultiStepForm;
