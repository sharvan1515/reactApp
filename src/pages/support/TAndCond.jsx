import React from 'react';

const TAndCond = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
                <p className="text-lg text-gray-600 mb-12">
                    Please read these Terms and Conditions carefully before using our website and services.
                </p>

                <div className="space-y-10">
                    {/* Section 1: Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                        <p className="text-gray-700 mb-4">
                            These Terms and Conditions govern your use of our website and services. By accessing or using the site,
                            you agree to comply with these terms. If you do not agree, do not use the website.
                        </p>
                    </section>

                    {/* Section 2: Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
                        <p className="text-gray-700 mb-4">
                            By accessing or using our services, you agree to comply with these terms. If you do not agree, you must
                            not use the website or services. Your continued use of the website constitutes acceptance of these terms.
                        </p>
                    </section>

                    {/* Section 3: Changes to Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
                        <p className="text-gray-700 mb-4">
                            We reserve the right to modify or update these terms at any time. Any changes will be posted on this page,
                            and the date of the most recent update will be reflected at the top of the page. By continuing to use our
                            website after changes are posted, you agree to the revised terms.
                        </p>
                    </section>

                    {/* Section 4: User Obligations */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Obligations</h2>
                        <p className="text-gray-700 mb-4">
                            You agree to use the website and services only for lawful purposes. You are prohibited from using our
                            services for any illegal activity or in a way that may harm others or violate their rights.
                        </p>
                    </section>

                    {/* Section 5: Account Registration */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Registration</h2>
                        <p className="text-gray-700 mb-4">
                            In order to access certain features, you may need to create an account. You agree to provide accurate and
                            complete information during registration and to keep your account details up to date.
                        </p>
                    </section>

                    {/* Section 6: Payment Terms */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Terms</h2>
                        <p className="text-gray-700 mb-4">
                            All payments for services are due in advance unless otherwise specified. You agree to pay the fees as
                            outlined in the payment plan or subscription agreement.
                        </p>
                    </section>

                    {/* Section 7: Limitations of Liability */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitations of Liability</h2>
                        <p className="text-gray-700 mb-4">
                            We are not liable for any direct, indirect, incidental, special, or consequential damages arising from
                            your use of our website or services. Our liability is limited to the maximum extent permitted by law.
                        </p>
                    </section>

                    {/* Section 8: Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
                        <p className="text-gray-700 mb-4">
                            These terms will be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any
                            disputes arising under these terms will be subject to the exclusive jurisdiction of the courts located in
                            [Your Jurisdiction].
                        </p>
                    </section>

                    {/* Section 9: Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
                        </p>
                        <p className="text-gray-700">Email: [email@example.com]</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TAndCond;
