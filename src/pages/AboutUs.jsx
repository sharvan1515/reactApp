import React from 'react';
import { FaUsers, FaRocket, FaHandshake } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1200x800")' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center text-white py-32 px-6">
                    <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">About Us</h1>
                    <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">Learn more about who we are, what we do, and our mission to bring positive change.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-lg">We aim to empower individuals through education, equipping them with the knowledge and skills to thrive in the digital age.</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
                            <p className="text-lg">To become the leading online platform that transforms lives by providing accessible, high-quality learning experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
                    <p className="text-lg text-gray-600 mb-12">Founded with a passion for education, our platform has grown into a trusted destination for learners worldwide. Here's a quick look at how we got started:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        <div className="bg-white shadow-xl rounded-lg p-6 w-100">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Beginning</h3>
                            <p className="text-gray-600">We started as a small team of educators with the goal of providing affordable, accessible learning resources for everyone.</p>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg p-6 w-100">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Growth</h3>
                            <p className="text-gray-600">Over the years, we’ve expanded our offerings, reaching thousands of students across the globe. Our impact continues to grow each day.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 mb-12">Our team is made up of passionate educators, innovators, and experts committed to making a difference.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {/* Team Member 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://placehold.co/600x400" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://placehold.co/600x400" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                            <p className="text-gray-600">Chief Learning Officer</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
                    <p className="text-lg mb-8">Ready to make an impact? Start learning with us today and take the first step towards transforming your future.</p>
                    <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
