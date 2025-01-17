import React from 'react'

function MyAccount() {
    return (
        <div className="flex space-x-8">
            <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Account</h2>
                <ul className="space-y-4">
                    <li><a href="/profile" className="text-gray-800 hover:text-blue-600">Profile Overview</a></li>
                    <li><a href="/my-courses" className="text-gray-800 hover:text-blue-600">My Courses</a></li>
                    <li><a href="/settings" className="text-gray-800 hover:text-blue-600">Settings</a></li>
                </ul>
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6">Welcome, John Doe</h2>

                <div className="flex items-center space-x-6 mb-8">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-20 h-20 rounded-full" />
                    <div>
                        <h3 className="text-2xl font-semibold">John Doe</h3>
                        <p className="text-gray-600">Email: johndoe@example.com</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">My Courses</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <img src="https://placehold.co/600x400" alt="Course Image" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold">React for Beginners</h4>
                                <div className="mt-2">
                                    <p className="text-gray-600">Progress: 65%</p>
                                    <div className="h-2 bg-blue-200 rounded-full">
                                        <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <button className="mt-4 text-blue-600 hover:underline">Continue</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <img src="https://placehold.co/600x400" alt="Course Image" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold">Advanced JavaScript</h4>
                                <div className="mt-2">
                                    <p className="text-gray-600">Progress: 40%</p>
                                    <div className="h-2 bg-blue-200 rounded-full">
                                        <div className="h-2 bg-blue-600 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <button className="mt-4 text-blue-600 hover:underline">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
                    <a href="/settings" className="text-blue-600 hover:underline">Edit Profile</a>
                </div>
            </div>
        </div>
    )
}

export default MyAccount