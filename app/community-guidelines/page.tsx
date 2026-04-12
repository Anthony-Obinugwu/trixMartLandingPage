"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CommunityGuidelines() {
    return (
        <Layout>
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-16 font-montserrat">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#051650] mb-8">TrixMart Community Guidelines</h1>
                    <p className="text-gray-600 mb-6 font-medium">Last Updated: April 12, 2026</p>

                    <p className="text-gray-700 leading-relaxed mb-8 italic">
                        These Community Guidelines are designed to ensure TrixMart remains a safe, transparent, and respectful marketplace for all university students. These guidelines work in conjunction with our <strong>Terms and Conditions (EULA)</strong> and <strong>Privacy Policy</strong>. By using the Platform, you agree to adhere to these standards.
                    </p>

                    <section className="mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#051650] mb-4">1. Student Integrity and Respect</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart is built on student trust. We expect all users to:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Treat all community members with dignity. Harassment, cyber-bullying, or hate speech based on ethnicity, religion, or gender is strictly prohibited.</li>
                            <li>Use professional and respectful language in all communications, including product reviews and direct messages.</li>
                            <li>Maintain the academic integrity of the university environment; the sale of academic papers, exam answers, or unauthorized educational materials is forbidden.</li>
                        </ul>
                    </section>

                    <section className="mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#051650] mb-4">2. Authenticity and Digital Identity</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To maintain a secure ecosystem, we enforce strict identity standards:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Real Identities:</strong> Users must use their real names as they appear on university records.</li>
                            <li><strong>KYC Compliance:</strong> Sellers must complete identity verification. Attempting to bypass these security protocols with forged documents will result in a permanent ban and reporting to university authorities.</li>
                            <li><strong>No Impersonation:</strong> Do not impersonate university staff, student union representatives, or TrixMart employees.</li>
                        </ul>
                    </section>

                    <section className="mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#051650] mb-4">3. Safe Physical Transactions</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart facilitates campus commerce, which often involves physical meetings. For your safety:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Always meet in well-lit, public locations on campus (e.g., student centers, library lobbies, or designated TrixMart pickup points).</li>
                            <li>Verify the item's condition before confirming delivery in the app.</li>
                            <li>Do not share sensitive location data (like hostel room numbers) until you are certain of the other party's verified status.</li>
                        </ul>
                    </section>

                    <section className="mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#051650] mb-4">4. Honest Commerce and Quality Standards</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Transparency is key to a healthy marketplace:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Accurate Listings:</strong> Sellers must provide original photos and honest descriptions. Stock photos that misrepresent the actual state of a used item are prohibited.</li>
                            <li><strong>Price Transparency:</strong> Hidden fees are not allowed. All delivery costs must be clearly stated before the transaction.</li>
                            <li><strong>Fair Reviews:</strong> Feedback must be based on actual transactions. Manipulating ratings through "shill" accounts or retaliatory negative reviews is a violation of these guidelines.</li>
                        </ul>
                    </section>

                    <section className="mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#051650] mb-4">5. Data Privacy and Communication</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Protecting student data is a collaborative effort:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Never share sensitive financial identifiers (BVN, NIN, Pin codes) in chat windows.</li>
                            <li>Do not scrape or store other users' contact information for marketing purposes outside of TrixMart.</li>
                            <li>Report any data breaches or suspicious phishing attempts immediately to our security team.</li>
                        </ul>
                    </section>

                    <section className="mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#051650] mb-4">6. Reporting and Enforcement</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Violating these guidelines can result in warnings, temporary suspension, or permanent termination of platform access. If you encounter any issues:
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>Email:</strong> trixmartng@gmail.com<br />
                            <strong>In-App Support:</strong> Use the "Report User" feature on a seller's profile or product page.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </Layout>
    );
}
