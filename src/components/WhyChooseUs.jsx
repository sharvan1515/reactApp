import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchWebsiteContent } from '../redux/websiteContentSlice';

function WhyChooseUs() {

    const dispatch = useDispatch();
    const { whyChooseUs, isFetched } = useSelector((state) => state.websiteContent);

    useEffect(() => {
        if (!isFetched) {
            dispatch(fetchWebsiteContent());
        }
    }, [dispatch, isFetched]);

    return (
        <section className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
                <p className="text-lg mb-12">We provide top-notch online courses designed to help you learn and grow your skills with ease. Here's why our platform stands out:</p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {
                        whyChooseUs ? (
                            whyChooseUs.map((item, index) => (
                                <div key={index} className="bg-white text-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
                                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                    <p className="text-lg">{item.content}</p> {/* Assuming 'item' has a 'description' */}
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )
                    }
                </div>

                {/* Call to Action */}
                <div className="mt-12">
                    <Link to="/courses" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        Explore Our Courses
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs