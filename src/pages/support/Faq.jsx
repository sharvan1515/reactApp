import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
    // State to manage expanded questions
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        // If the clicked question is already active, close it, else open it
        setActiveIndex(activeIndex === index ? null : index);
    };

    // FAQ data array
    const faqData = [
        {
            question: "What is the return policy?",
            answer: "You can return any product within 30 days for a full refund or exchange. Make sure the product is unused and in its original packaging."
        },
        {
            question: "How do I track my order?",
            answer: "You will receive a tracking number via email once your order has shipped. You can use this number to track the status of your delivery."
        },
        {
            question: "Can I change my course after enrolling?",
            answer: "Yes! You can change your course at any time, depending on availability. Please reach out to our support team for assistance."
        },
        {
            question: "How do I get a certificate?",
            answer: "Once you complete your course, you can download your certificate from your dashboard under the 'My Courses' section."
        },
        {
            question: "Do you offer any discounts?",
            answer: "We regularly offer discounts and promotions. Make sure to subscribe to our newsletter to stay updated on the latest deals."
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 mb-12">Find answers to the most common questions our users ask.</p>

                <div className="space-y-4">
                    {/* FAQ List */}
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => toggleQuestion(index)}>
                                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                                <div className="text-gray-500">
                                    {activeIndex === index ? (
                                        <FaChevronUp size={20} />
                                    ) : (
                                        <FaChevronDown size={20} />
                                    )}
                                </div>
                            </div>

                            {activeIndex === index && (
                                <p className="text-gray-700 mt-4">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
