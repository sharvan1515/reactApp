import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formError, setFormError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
            setFormError('');
        } else {
            setFormError('Please fill in all fields.');
        }
    };

    return (
        <div className="bg-gray-50">
            {/* Contact Info Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h2>
                    <p className="text-lg text-gray-600 mb-12">We'd love to hear from you! Whether you have questions or just want to say hello, feel free to contact us.</p>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaPhone className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Call Us</h3>
                            <p className="text-gray-600">+1 800 123 4567</p>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaEnvelope className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email Us</h3>
                            <p className="text-gray-600">support@yourdomain.com</p>
                        </div>

                        {/* Location */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
                            <p className="text-gray-600">123 Street, City, Country</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
                    {formError && <p className="text-red-500 mb-4">{formError}</p>}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="6"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Find Us On The Map</h2>
                    <div className="w-full h-96 mb-8">
                        {/* Google Maps Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.954593540025!2d73.14054727459329!3d22.317556942271043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9ec951d999b%3A0x1c71d34335355e43!2sGrow%20With%20PHP!5e0!3m2!1sen!2sin!4v1736962822925!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
