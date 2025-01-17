import React from 'react';
import Login from './Login';
import Register from './Register';

const Modal = ({ isOpen, closeModal, title, children }) => {
    if (!isOpen) return null;  // This will prevent the modal from rendering when it's not open

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <span className="sr-only">Close</span>&#10005;
                    </button>
                </div>
                <div className="mb-4">
                    {/* {children} */}

                    {title === 'Login' ? <Login closeModal={closeModal} /> : <Register closeModal={closeModal} />}


                </div>
            </div>
        </div>
    );
};

export default Modal;
