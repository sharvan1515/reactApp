import React, { useState } from 'react';
import { FaRegClock, FaChalkboardTeacher, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for plus and minus
import Testimonial from '../components/Testimonial';

const CourseDetail = () => {

    const [expandedModule, setExpandedModule] = useState(null);

    const toggleModule = (moduleIndex) => {
        setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex);
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/1200/600?random=1")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white py-32">
                    <h1 className="text-5xl font-bold mb-4">Master Web Development</h1>
                    <p className="text-lg mb-6">Start your journey toward becoming a skilled full-stack developer with this comprehensive course.</p>
                    <Link
                        to="/courses/learn-more"
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                    >
                        Enroll Now
                    </Link>
                </div>
            </section>

            {/* Course Overview Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Course Overview</h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                        This course will teach you the skills needed to become a proficient web developer, from HTML and CSS to JavaScript and React.js.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* What You Will Learn */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You Will Learn</h3>
                            <ul className="list-inside list-disc text-gray-600">
                                <li>Responsive Web Design</li>
                                <li>Frontend Frameworks (React)</li>
                                <li>Backend Development with Node.js</li>
                                <li>Database Management (MongoDB)</li>
                            </ul>
                        </div>

                        {/* Course Duration */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Duration</h3>
                            <div className="flex items-center text-gray-600">
                                <FaRegClock className="text-xl mr-2" />
                                <span>8 Weeks - Self-paced</span>
                            </div>
                        </div>

                        {/* Instructor */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instructor</h3>
                            <div className="flex items-center">
                                <FaChalkboardTeacher className="text-xl mr-2" />
                                <span>John Doe - Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Course Content</h2>
                    <p className="text-lg text-gray-600 mb-12">Here’s what you’ll learn in each module of the course:</p>

                    <div className="flex flex-wrap justify-center gap-12">
                        {/* Module 1 */}
                        <div
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm w-full cursor-pointer"
                            onClick={() => toggleModule(1)}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
                                Module 1: HTML & CSS Basics
                                {expandedModule === 1 ? (
                                    <FaMinus className="text-xl" />
                                ) : (
                                    <FaPlus className="text-xl" />
                                )}
                            </h3>
                            {expandedModule === 1 && (
                                <p className="text-gray-600 mb-4">
                                    Learn the fundamentals of web development with HTML5 and CSS3 to create beautiful and responsive websites.
                                </p>
                            )}
                        </div>

                        {/* Module 2 */}
                        <div
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm w-full cursor-pointer"
                            onClick={() => toggleModule(2)}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
                                Module 2: JavaScript Basics
                                {expandedModule === 2 ? (
                                    <FaMinus className="text-xl" />
                                ) : (
                                    <FaPlus className="text-xl" />
                                )}
                            </h3>
                            {expandedModule === 2 && (
                                <p className="text-gray-600 mb-4">
                                    Dive deep into JavaScript to add interactivity to your websites and understand core programming concepts.
                                </p>
                            )}
                        </div>

                        {/* Module 3 */}
                        <div
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm w-full cursor-pointer"
                            onClick={() => toggleModule(3)}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
                                Module 3: React.js
                                {expandedModule === 3 ? (
                                    <FaMinus className="text-xl" />
                                ) : (
                                    <FaPlus className="text-xl" />
                                )}
                            </h3>
                            {expandedModule === 3 && (
                                <p className="text-gray-600 mb-4">
                                    Learn how to build modern, dynamic, and responsive user interfaces using React, the most popular JavaScript library.
                                </p>
                            )}
                        </div>

                        {/* Module 4 */}
                        <div
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm w-full cursor-pointer"
                            onClick={() => toggleModule(4)}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
                                Module 4: Node.js & Express
                                {expandedModule === 4 ? (
                                    <FaMinus className="text-xl" />
                                ) : (
                                    <FaPlus className="text-xl" />
                                )}
                            </h3>
                            {expandedModule === 4 && (
                                <p className="text-gray-600 mb-4">
                                    Learn how to use Node.js and Express.js to build a scalable backend for your web applications.
                                </p>
                            )}
                        </div>

                        {/* Module 5 */}
                        <div
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm w-full cursor-pointer"
                            onClick={() => toggleModule(5)}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
                                Module 5: MongoDB & Database Management
                                {expandedModule === 5 ? (
                                    <FaMinus className="text-xl" />
                                ) : (
                                    <FaPlus className="text-xl" />
                                )}
                            </h3>
                            {expandedModule === 5 && (
                                <p className="text-gray-600 mb-4">
                                    Learn how to manage and query databases using MongoDB, a NoSQL database used in full-stack web development.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Your Learning Journey</h2>
                    <div className="relative">
                        <div className="flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0">
                            {/* Phase 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phase 1: HTML & CSS Basics</h3>
                                <p className="text-gray-600 mb-4">Learn the foundation of web development by mastering HTML and CSS to create stunning, responsive webpages.</p>
                            </div>
                            {/* Phase 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phase 2: JavaScript Fundamentals</h3>
                                <p className="text-gray-600 mb-4">Dive into JavaScript to make your website interactive with essential programming concepts.</p>
                            </div>
                            {/* Phase 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phase 3: React.js Development</h3>
                                <p className="text-gray-600 mb-4">Master React and learn how to build dynamic, modern web applications using the most popular frontend library.</p>
                            </div>
                            {/* Phase 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phase 4: Full-Stack Development</h3>
                                <p className="text-gray-600 mb-4">Learn backend development with Node.js and MongoDB to become a full-stack developer capable of building end-to-end applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Pricing Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Student Projects Showcase</h2>
                    <p className="text-lg text-gray-600 mb-12">Explore some of the amazing projects built by our students after completing the course.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Project 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://via.placeholder.com/400" alt="Project 1" className="mb-4 rounded-lg" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Portfolio Website</h3>
                            <p className="text-gray-600 mb-4">A clean, modern portfolio website showcasing HTML, CSS, and JavaScript skills.</p>
                            <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-300">View Project</a>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://via.placeholder.com/400" alt="Project 2" className="mb-4 rounded-lg" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Weather App</h3>
                            <p className="text-gray-600 mb-4">A weather app built using JavaScript and APIs, providing real-time weather information.</p>
                            <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-300">View Project</a>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img src="https://via.placeholder.com/400" alt="Project 3" className="mb-4 rounded-lg" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">React Dashboard</h3>
                            <p className="text-gray-600 mb-4">A dynamic dashboard built with React.js, allowing users to track analytics data in real-time.</p>
                            <a href="#" className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-300">View Project</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonial Section */}
            <Testimonial />

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="border-b">
                            <h3 className="text-2xl font-semibold text-gray-800 cursor-pointer">What will I learn in this course?</h3>
                            <p className="text-gray-600 mt-2">You will learn everything from web basics like HTML & CSS to advanced JavaScript concepts and React.js.</p>
                        </div>
                        <div className="border-b">
                            <h3 className="text-2xl font-semibold text-gray-800 cursor-pointer">Do I need prior programming experience?</h3>
                            <p className="text-gray-600 mt-2">No! This course is designed for both beginners and intermediate learners. We will guide you through all the concepts.</p>
                        </div>
                        <div className="border-b">
                            <h3 className="text-2xl font-semibold text-gray-800 cursor-pointer">How long will it take to complete?</h3>
                            <p className="text-gray-600 mt-2">On average, it takes about 2-3 months to complete the course if you follow the recommended pace.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;
