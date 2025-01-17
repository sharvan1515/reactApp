import React from 'react'

import { Link } from 'react-router-dom'

function Course() {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
            <div className="container mx-auto px-6 text-center text-white">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-8">Explore Our Courses</h2>
                <p className="text-lg mb-12">We offer a wide range of courses designed to help you advance your skills and career. Start learning today!</p>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {/* Course 1 */}
                    <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://growwithphp.in/uploads/images/course/7990656_1712033661_Untitled%20design%20(8).png"
                            alt="Course 1"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">React for Beginners</h3>
                            <p className="text-gray-600 mb-4">Learn the basics of React, one of the most popular JavaScript libraries for building user interfaces.</p>
                            <Link
                                to="/course/react-for-beginners"
                                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://growwithphp.in/uploads/images/course/8685898_1712034099_Laravell.png"
                            alt="Course 2"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced JavaScript</h3>
                            <p className="text-gray-600 mb-4">Dive deep into JavaScript and learn advanced topics like closures, promises, and async programming.</p>
                            <Link
                                to="/course/Linkdvanced-javascript"
                                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Course 3 */}
                    <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        <img
                            src="https://growwithphp.in/uploads/images/course/4712789_1711978430_php-course.jpg"
                            alt="Course 3"
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Full-Stack Web Development</h3>
                            <p className="text-gray-600 mb-4">Become a full-stack developer by learning both front-end and back-end development technologies.</p>
                            <Link
                                to="/course/full-stack-web-development"
                                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Explore All Courses Button */}
                <div className="mt-12">
                    <Link
                        to="/courses"
                        className="inline-block bg-white text-blue-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
                    >
                        Explore All Courses
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Course