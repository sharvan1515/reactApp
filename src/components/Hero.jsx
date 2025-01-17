import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchWebsiteContent } from '../redux/websiteContentSlice';

function Hero() {

    const dispatch = useDispatch();
    const { banner, isFetched } = useSelector((state) => state.websiteContent);

    useEffect(() => {
        // Fetch website content only if it's not already fetched
        if (!isFetched) {
            dispatch(fetchWebsiteContent());
        }
    }, [dispatch, isFetched]);

    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/536/354")' }}>
            {/* Overlay to darken background */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Hero content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 md:px-12">
                <div>
                    <h1 className="text-5xl font-bold mb-6">
                        {banner.title}
                    </h1>
                    <p className="text-lg mb-8">
                        {banner.subTitle}
                    </p>
                    <Link
                        to="/courses"
                        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-blue-700"
                    >
                        Explore Courses
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero