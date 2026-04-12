"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
    return (
        <Layout>
            <Header />
            <main className="container mx-auto px-4 py-16 font-montserrat">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#051650] mb-8">Terms and Conditions</h1>
                    <p className="text-gray-600 mb-6 font-medium">Last Updated: April 2026</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By accessing or using Trix Mart, you agree to be bound by these Terms and Conditions.
                            If you disagree with any part of the terms, then you may not access the service.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">2. Use of the Service</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Trix Mart is a marketplace for university students. You must be a student or affiliated with
                            a university to use this platform as a seller. Buyers must also adhere to community standards.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">3. User Accounts</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you create an account with us, you must provide information that is accurate, complete,
                            and current at all times. Failure to do so constitutes a breach of the Terms, which may result
                            in immediate termination of your account.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">4. Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Service and its original content, features, and functionality are and will remain the
                            exclusive property of Trix Mart and its licensors.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">5. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In no event shall Trix Mart, nor its directors, employees, partners, agents, suppliers, or affiliates,
                            be liable for any indirect, incidental, special, consequential or punitive damages.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">6. Changes</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                            What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </Layout>
    );
}
