import React from 'react';
import Hero from '../components/Hero';
import Course from '../components/Course';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';
import PlacementPartner from '../components/PlacementPartner';
import YouTube from '../components/YouTube';

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Hero />
            <Course />
            <WhyChooseUs />
            <Testimonial />
            <PlacementPartner />
            <YouTube />
        </div>
    );
};

export default Home;
