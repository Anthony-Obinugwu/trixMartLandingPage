"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-16 font-montserrat">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#051650] mb-8">Privacy Policy for TrixMart</h1>
                    <p className="text-gray-600 mb-6 font-medium">Effective Date: April 12, 2026</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">1. Introduction and Scope of Application</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This Privacy Policy delineates the data governance protocols, processing activities, and privacy safeguards implemented by TrixMart (hereinafter referred to as "The Organization", "we", "us", or "our"). This document governs the collection, utilization, storage, and cross-border transfer of personal data across the TrixMart application, website, and related digital services (collectively, "The Platform").
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart utilizes a multi-tenant architecture designed to serve distinct educational institutions globally. As we expand across various academic campuses and international jurisdictions, we remain committed to localized data isolation and global privacy standards. Within Nigeria, The Organization operates formally as a Data Controller of Major Importance as defined by the Nigeria Data Protection Act (NDPA) 2023 and the General Application and Implementation Directive (GAID) 2025.
                        </p>
                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">Cross-Border Data Transfers and Hosting</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The primary database infrastructure and servers supporting the TrixMart platform are hosted in the West EU region (specifically Ireland). By registering an account and utilizing The Platform, you explicitly consent to the cross-border transfer, processing, and storage of your personal data in this jurisdiction. These transfers are executed in compliance with standard data protection frameworks ensuring a level of security commensurate with the NDPA 2023.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This Policy applies to all registered users, encompassing academic consumers ("Buyers"), marketplace merchants ("Sellers"), and authorized administrative personnel ("Admins").
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">2. Categories of Personal Data Collected</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We collect data through direct user provision, automated generation during platform usage, and via secure integration with authorized third-party service providers.
                        </p>

                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">2.1 Information Directly Provided by the User</h3>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Profile Identity Data:</strong> Full legal name, username, and associated academic affiliations (School ID) utilized to verify presence within specific educational communities.</li>
                            <li><strong>Contact Information:</strong> Valid email addresses and localized phone numbers utilized for account verification, security alerts, and transactional communications.</li>
                            <li><strong>Authentication Data:</strong> Cryptographic hashes of passwords and security credentials. We do not store plain-text passwords.</li>
                            <li><strong>User-Generated Content:</strong> Profile avatars, product reviews, supplementary JSON metadata, and peer-to-peer communications. This also includes **Social Metrics** such as follower counts, which are publicly visible to other users within your institution's partition.</li>
                            <li><strong>Dispute & Reporting Data:</strong> Information collected via the 'Report Product' or 'Process Dispute' features, including narrative reports, evidence of non-conformity, and communications during a mediation process.</li>
                        </ul>

                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">2.2 Payment Integration & Tokenization (Paystack)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart integrates with Paystack for secure transaction processing. While we do not store full credit or debit card numbers, we do manage:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Authorization Tokens:</strong> Secure recurring payment tokens provided by Paystack to facilitate "saved account" functionality.</li>
                            <li><strong>Transaction Metadata:</strong> Authorization codes and reference IDs necessary for payment reconciliation and refunds.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            All payment tokens and authorization metadata are permanently disabled and purged upon the successful deletion of a user account.
                        </p>

                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">2.3 Specialized Information Collected from Marketplace Sellers</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To ensure marketplace integrity and comply with national financial regulations, Sellers are subject to enhanced data collection:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Commercial Identity:</strong> Registered shop names, operational email addresses, business phone numbers, external website links, and detailed shop descriptions.</li>
                            <li><strong>Verification and Financial Data:</strong> Government-issued identification documentation, Bank Verification Numbers (BVN), and National Identity Numbers (NIN) required to facilitate payouts and complete mandatory Know Your Customer (KYC) onboarding.</li>
                            <li><strong>Operational Metrics:</strong> System-generated data including cumulative completed orders, calculated average ratings, and applied shipping fee structures.</li>
                        </ul>

                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">2.4 Automated Data Generation and Telemetry</h3>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>System Telemetry:</strong> IP addresses, device fingerprints, session durations, and interaction logs.</li>
                            <li><strong>Logistics & Delivery Tracking:</strong> Data related to order fulfillment, including delivery status, timestamps, and physical receipt confirmations utilized to trigger the release of escrowed funds.</li>
                            <li><strong>Algorithmic Risk Scoring:</strong> TrixMart dynamically calculates risk assessment scores for Sellers based on account modifications, verification status, and transactional histories.</li>
                            <li><strong>Operational Logs:</strong> Timestamp data detailing account creation, profile modifications, suspension events, and product visibility states.</li>
                        </ul>
                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">Cookies, Local Storage, and Device Tracking</h3>
                        <p className="text-gray-700 leading-relaxed">
                            The Platform utilizes local device storage and secure mobile caching mechanisms (rather than traditional web cookies) to maintain active user sessions, store authentication tokens, and optimize app performance. We may also utilize authorized third-party software development kits (SDKs) to collect anonymized crash reports and screen-view analytics to continuously improve the user experience.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">3. Lawful Basis and Purpose of Processing</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart processes personal data strictly upon the establishment of a recognized lawful basis:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-[#051650] uppercase tracking-wider border">Purpose</th>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-[#051650] uppercase tracking-wider border">Data Categories</th>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-[#051650] uppercase tracking-wider border">Lawful Basis</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Account Creation & Platform Access</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Profile Identity, Authentication Data</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Contractual Necessity</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Marketplace Transactions</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Contact Info, Commercial Identity</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Contractual Necessity</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Financial Settlement & KYC</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Verification and Financial Data</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Legal Obligation</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Security & Risk Mitigation</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Algorithmic Scoring, Operational Logs</td>
                                        <td className="px-4 py-2 text-sm text-gray-700 border">Legitimate Interest</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">4. Automated Decision-Making and Algorithmic Profiling</h2>
                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">4.1 Seller Risk Scoring and Visibility Cascading</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Platform utilizes an automated risk assessment algorithm to continuously evaluate the operational integrity of registered Sellers. The algorithm processes variables such as the frequency of profile modifications and verification protocols. This automated processing dynamically determines the public visibility status of a Seller's store.
                        </p>
                        <h3 className="text-xl font-medium text-[#051650] mt-6 mb-3">4.2 Rights Regarding Automated Processing</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sellers possess statutory rights concerning these algorithmic operations and hold the right to:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li>Obtain an explanation of the underlying logic utilized by the risk-scoring algorithm.</li>
                            <li>Formally contest the automated decision.</li>
                            <li>Request human intervention and a manual review.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">5. Multi-Tenancy, Third-Party Disclosures, and Data Sharing</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell personal data. However, the operational reality of maintaining a secure, global e-commerce environment necessitates controlled data sharing with:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Academic Institutions:</strong> TrixMart partitions data via specific School IDs. We cooperate with university authorities only in cases of severe disciplinary infractions or fraud.</li>
                            <li><strong>Transactional Disclosure:</strong> To facilitate post-purchase communication and fulfillment, contact information is shared between Buyers and Sellers via transactional documents, such as receipts and invoices generated by The Platform.</li>
                            <li><strong>Financial Processors:</strong> We integrate with licensed payment service providers for transaction execution and KYC compliance.</li>
                            <li><strong>Law Enforcement:</strong> We will disclose personal data to regulatory and legal authorities when served with a valid court order.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">6. Data Retention Protocols and Financial Archiving</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>6.1 Right to Erasure (Data Deletion) and Operational Limits:</strong> Users can exercise their right to data deletion directly within the TrixMart application by navigating to the 'Account Settings' and selecting 'Delete Account'. <strong>Please note:</strong> This right to erasure cannot be exercised if a User has active, unfulfilled orders, unresolved disputes, or pending wallet balances. All active marketplace contracts must be concluded before the system will process a deletion request. Upon successfully triggering this action, non-financial profile data is permanently erased or irreversibly anonymized within ninety (90) days.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>6.2 Extended Retention:</strong> Pursuant to AML legislation, financial records and KYC artifacts are legally mandated to be maintained for ten (10) years.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">7. Statutory Rights of the Data Subject</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You are granted comprehensive rights including: Information and Access, Rectification, Erasure (Right to be Forgotten), Data Portability, and the Right to Object/Withdraw Consent.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">8. Age Requirements and Protection of Minors</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart is a marketplace designed specifically for university students. By registering an account on The Platform, you represent that you are at least eighteen (18) years of age, or that you have obtained the explicit consent and supervision of your parent or legal guardian to use our services. We do not knowingly collect personal data from children under the age of thirteen (13). If we become aware that we have inadvertently collected personal data from a child under 13, we will take immediate steps to delete such information.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">9. Data Security and Breach Notification</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In the event of a severe security incident, TrixMart will officially notify the relevant data protection authorities within seventy-two (72) hours.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">10. Governance, Complaints, and Contact Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Email:</strong> trixmartng@gmail.com<br />
                            <strong>Physical Address:</strong> Plot 681, Cadastral Zone C-OO Research & Institution Area, Jabi Airport Bypass, Abuja FCT, 900001, Nigeria
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </Layout>
    );
}
