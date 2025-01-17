import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
                <p className="text-lg text-gray-600 mb-12">
                    This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>

                <div className="space-y-10">
                    {/* Section 1: Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                        <p className="text-gray-700 mb-4">
                            We value your privacy and are committed to protecting your personal information.
                            This Privacy Policy describes the types of information we collect from you and how
                            we use, share, and protect that information.
                        </p>
                    </section>

                    {/* Section 2: Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                        <p className="text-gray-700 mb-4">
                            We collect personal information when you visit our website, register for an account, or make a purchase. The types of information we may collect include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Personal Information: Name, email address, etc.</li>
                            <li>Payment Information: Credit card details, billing address, etc.</li>
                            <li>Usage Data: Information about how you interact with our website.</li>
                        </ul>
                    </section>

                    {/* Section 3: How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 mb-4">
                            We may use your personal information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>To process and fulfill your orders.</li>
                            <li>To send you marketing communications, if you opt-in.</li>
                            <li>To improve our services and user experience.</li>
                        </ul>
                    </section>

                    {/* Section 4: How We Protect Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Protect Your Information</h2>
                        <p className="text-gray-700 mb-4">
                            We implement a variety of security measures to ensure the protection of your personal
                            information, including encryption and secure data storage. However, no method of
                            transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    {/* Section 5: Sharing Your Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing Your Information</h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell, rent, or trade your personal information to third parties. However, we may
                            share your information with trusted third-party service providers for the purposes outlined in
                            this Privacy Policy.
                        </p>
                    </section>

                    {/* Section 6: Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
                        <p className="text-gray-700 mb-4">
                            You have the right to access, correct, and delete your personal information. If you would like to
                            exercise these rights, please contact us at [email@example.com].
                        </p>
                    </section>

                    {/* Section 7: Changes to This Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 mb-4">
                            We reserve the right to update this Privacy Policy from time to time. We will notify you of any
                            significant changes by posting the new policy on this page.
                        </p>
                    </section>

                    {/* Section 8: Contact Us */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-gray-700">Email: [email@example.com]</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
