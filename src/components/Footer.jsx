import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchWebsiteContent } from '../redux/websiteContentSlice';

const Footer = () => {

    const dispatch = useDispatch();
    const { socialMedia, footer, isFetched } = useSelector((state) => state.websiteContent);

    useEffect(() => {
        // Fetch website content only if it's not already fetched
        if (!isFetched) {
            dispatch(fetchWebsiteContent());
        }
    }, [dispatch, isFetched]);
    
    
    return (
        <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
            <div className="container mx-auto px-6 md:px-12">
                {/* Footer Top - Company Information and Logo */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
                    <div className="mb-8 md:mb-0">
                        <img src={footer.logo} alt="Logo" className="w-40 mb-4" />
                        <p className="text-lg">{footer.title}</p>
                    </div>

                    {/* Footer Navigation */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
                            <ul>
                                <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                                <li><Link to="/courses" className="hover:text-yellow-400">Courses</Link></li>
                                <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-4">Support</h3>
                            <ul>
                                <li><Link to="/faq" className="hover:text-yellow-400">FAQ</Link></li>
                                <li><Link to="/TermsAndConditions" className="hover:text-yellow-400">Terms & Conditions</Link></li>
                                <li><Link to="/PrivacyPolicy" className="hover:text-yellow-400">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
                            <div className="flex space-x-6">
                                <Link to={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition duration-300">
                                    <FaFacebook />
                                </Link>
                                <Link to={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition duration-300">
                                    <FaTwitter />
                                </Link>
                                <Link to={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-700 transition duration-300">
                                    <FaInstagram />
                                </Link>
                                <Link to={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-500 transition duration-300">
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subscribe Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-semibold mb-4">Stay Updated</h3>
                    <p className="text-lg mb-6">Subscribe to our newsletter to get the latest courses, blog updates, and offers delivered to your inbox.</p>
                    <form className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 rounded-l-md w-1/3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-r-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Footer Bottom - Copyright and Additional Info */}
                <div className="border-t border-gray-800 pt-6 mt-6 text-center">
                    <p className="text-sm text-gray-300">
                        {footer.copyright}
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
