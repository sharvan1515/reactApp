import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  // For hamburger icon and close icon

import { Link } from 'react-router-dom';
import Modal from './Modal';

import { useTheme } from '../contexts/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWebsiteContent } from '../redux/websiteContentSlice';


const Header = () => {

    const dispatch = useDispatch();
    const { title, isFetched } = useSelector((state) => state.websiteContent);
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState('login');

    const isLogin = false;

    const openModal = (type) => {
        setType(type);
        setIsModalOpen(true)

    }
    const closeModal = () => setIsModalOpen(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (!isFetched) {
            dispatch(fetchWebsiteContent());
        }
    }, [dispatch, isFetched]);

    return (
        <>
            <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo with Name */}
                    <div className="flex items-center space-x-3">
                        {/* Logo Image */}
                        <img src="/path-to-your-logo.png" alt="Logo" className="w-10 h-10" /> {/* Replace with your logo */}
                        {/* Logo Name */}
                        <span className="text-2xl font-bold">{title}</span> {/* Replace with your brand name */}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/" className="py-3 px-6 bg-gray-800 hover:bg-blue-600 text-white rounded-md transition duration-300">
                            Home
                        </Link>
                        <Link to="/courses" className="py-3 px-6 bg-gray-800 hover:bg-blue-600 text-white rounded-md transition duration-300">
                            Courses
                        </Link>
                        <Link to="/contact" className="py-3 px-6 bg-gray-800 hover:bg-blue-600 text-white rounded-md transition duration-300">
                            Contact
                        </Link>
                        {/* Login and Register as Rectangular Buttons */}

                        {
                            isLogin ? (
                                <Link to="/my-account" className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300">
                                    My Account
                                </Link>
                            ) : (
                                <>
                                    <Link onClick={() => openModal('Login')} className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300">
                                        Login
                                    </Link>
                                    <Link onClick={() => openModal('Register')} className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300">
                                        Register
                                    </Link>
                                </>
                            )
                        }

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="text-xl text-white bg-transparent border-none"
                            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>

                    </nav>

                    {/* Mobile Hamburger Icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white text-2xl">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-800 p-4">
                        <nav className="flex flex-col space-y-4">
                            <Link to="/" className="text-white py-3 px-6 bg-gray-800 hover:bg-blue-600 rounded-md transition duration-300">
                                Home
                            </Link>
                            <Link to="/courses" className="text-white py-3 px-6 bg-gray-800 hover:bg-blue-600 rounded-md transition duration-300">
                                Courses
                            </Link>
                            <Link to="/contact" className="text-white py-3 px-6 bg-gray-800 hover:bg-blue-600 rounded-md transition duration-300">
                                Contact
                            </Link>

                            {/* Login and Register as Rectangular Buttons */}
                            {
                                isLogin ? (
                                    // When the user is logged in, show the "My Account" link
                                    <Link to="/my-account" className="text-white py-3 px-6 bg-green-600 hover:bg-green-700 rounded-md transition duration-300">
                                        My Account
                                    </Link>
                                ) : (
                                    <>
                                        {/* If not logged in, show the Login and Register links */}
                                        <Link onClick={() => openModal('Login')} className="text-white py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300">
                                            Login
                                        </Link>
                                        <Link onClick={() => openModal('Register')} className="text-white py-3 px-6 bg-green-600 hover:bg-green-700 rounded-md transition duration-300">
                                            Register
                                        </Link>
                                    </>
                                )
                            }
                        </nav>

                    </div>
                )}
            </header>
            <Modal isOpen={isModalOpen} closeModal={closeModal} title={type}>
            </Modal>
        </>
    );
};

export default Header;
