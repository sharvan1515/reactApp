import React from 'react';

function Testimonial() {
    return (
        <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16">
            <div className="container mx-auto px-6 text-center text-white">
                <h2 className="text-4xl font-bold mb-8">What Our Students Say</h2>
                <p className="text-lg mb-12">Hear from our happy students about their experience with our courses!</p>

                {/* Marquee Testimonial Cards Grid */}
                <div className="overflow-hidden">
                    <div className="flex animate-marquee space-x-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://randomuser.me/api/portraits/men/2.jpg"
                                    alt="Student 1"
                                    className="w-16 h-16 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-semibold mb-4">John Doe</h3>
                                <p className="text-gray-600 text-lg italic">
                                    "The course was fantastic! The content was clear, and I was able to apply what I learned right away. Highly recommend!"
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold text-xl text-blue-600">Software Developer</span>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://randomuser.me/api/portraits/men/2.jpg"
                                    alt="Student 2"
                                    className="w-16 h-16 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-semibold mb-4">Jane Smith</h3>
                                <p className="text-gray-600 text-lg italic">
                                    "The course was fantastic! The content was clear, and I was able to apply what I learned right away. Highly recommend!"
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold text-xl text-blue-600">UX Designer</span>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://randomuser.me/api/portraits/men/2.jpg"
                                    alt="Student 3"
                                    className="w-16 h-16 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-semibold mb-4">Alice Brown</h3>
                                <p className="text-gray-600 text-lg italic">
                                    "The course was fantastic! The content was clear, and I was able to apply what I learned right away. Highly recommend!"
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold text-xl text-blue-600">Data Scientist</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
