import React, { useState } from 'react';

function Register({ closeModal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form fields
        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }

        if (!email.includes('@')) {
            setError("Please enter a valid email!");
            return;
        }

        if (mobile.length < 10) {
            setError("Please enter a valid mobile number!");
            return;
        }

        // Handle registration logic here (e.g., sending data to the server)
        console.log('Registration submitted', { name, email, mobile, password });

        // Reset the form and close the modal
        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        closeModal();  // Close modal after submission
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field */}
            <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Email field */}
            <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Mobile field */}
            <div>
                <label htmlFor="mobile" className="block text-gray-700">Mobile</label>
                <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Password field */}
            <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Confirm Password field */}
            <div>
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>

            {/* Error message */}
            {error && <div className="text-red-500 text-sm">{error}</div>}

            {/* Buttons */}
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Register
                </button>
            </div>
        </form>
    );
}

export default Register;
