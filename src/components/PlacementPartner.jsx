import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchWebsiteContent } from '../redux/websiteContentSlice';

function PlacementPartner() {


    const dispatch = useDispatch();
    const { placementPartners, isFetched } = useSelector((state) => state.websiteContent);

    useEffect(() => {
        // Fetch website content only if it's not already fetched
        if (!isFetched) {
            dispatch(fetchWebsiteContent());
        }
    }, [dispatch, isFetched]);


    console.log(placementPartners)

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Valuable Placement Partners</h2>
                <p className="text-lg text-gray-600 mb-12">We are proud to collaborate with leading industry players to provide the best opportunities for our students.</p>

                {/* Partner Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {
                        placementPartners && placementPartners.length > 0 ? (
                            placementPartners.map((item, index) => (
                                <div className="flex justify-center items-center" key={index}>
                                    <img
                                        src={item.company_logo || "https://growwithphp.in/uploads/images/client/5147193_1712295821_Untitled%20design%20(17).png"}
                                        alt={`Partner ${item.company_name}`}
                                        className="max-w-full h-16 object-contain"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No placement partners available.</p> // Fallback message or content
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default PlacementPartner