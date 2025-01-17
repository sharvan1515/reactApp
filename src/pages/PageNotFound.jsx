import React from 'react'

import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <section className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080")' }}>

            {/* Overlay to darken the background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Centered content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 md:px-12">
                <div>
                    <h1 className="text-8xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                        404
                    </h1>
                    <h2 className="text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-2s">
                        Oops! Page not found.
                    </h2>
                    <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-3s">
                        We couldn't find the page you were looking for. But don't worry, you can start fresh from here.
                    </p>
                    <Link to="/"
                        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-semibold transition-transform transform hover:scale-110 hover:bg-blue-700 animate__animated animate__fadeIn animate__delay-4s">
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PageNotFound