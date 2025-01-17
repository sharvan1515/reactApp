import React from 'react'

import { Link } from 'react-router-dom'

function YouTube() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Watch Our Latest Videos</h2>
                <p className="text-lg text-gray-600 mb-12">Check out some of our latest videos to help you learn and grow your skills with ease.</p>

                {/* YouTube Videos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Video 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                            title="YouTube video 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="text-2xl font-semibold text-gray-800 mt-4">Video Title 1</h3>
                    </div>

                    {/* Video 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                            title="YouTube video 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="text-2xl font-semibold text-gray-800 mt-4">Video Title 2</h3>
                    </div>

                    {/* Video 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
                            title="YouTube video 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="text-2xl font-semibold text-gray-800 mt-4">Video Title 3</h3>
                    </div>
                </div>

                {/* View All Videos Button */}
                <div className="mt-12">
                    <Link
                        to="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg"
                    >
                        View All Videos
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default YouTube