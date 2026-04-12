"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CommunityGuidelines() {
    return (
        <Layout>
            <Header />
            <main className="container mx-auto px-4 py-16 font-montserrat">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#051650] mb-8">Community Guidelines</h1>
                    <p className="text-gray-600 mb-6 font-medium">Last Updated: April 2026</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">1. Respect Each Other</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Trix Mart is a community of students. We expect all users to treat each other with respect and dignity.
                            Harassment, bullying, or hate speech will not be tolerated.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">2. Authenticity</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Be yourself. Use your real name and information. Do not create fake accounts or impersonate other students.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">3. Honest Trading</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sellers must provide accurate descriptions and images of their products. Buyers should honor their
                            commitments. Fraudulent activities will result in immediate suspension.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">4. Safety First</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When meeting to complete a transaction, always choose safe, public locations on campus.
                            Inform a friend about your meeting if possible.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">5. Reporting Issues</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you encounter a user violating these guidelines, please report them through the platform
                            or email us at trixmartng@gmail.com.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </Layout>
    );
}
