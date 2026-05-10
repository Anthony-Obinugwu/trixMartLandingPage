"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
    return (
        <Layout>
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-16 font-montserrat">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#051650] mb-8">Terms and Conditions and End-User License Agreement (EULA)</h1>
                    <p className="text-gray-600 mb-6 font-medium">Effective Date: April 12, 2026</p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Welcome to TrixMart. This combined Terms and Conditions and End-User License Agreement ("Agreement") constitutes a legally binding contract between you ("User", "Buyer", or "Seller") and TrixMart ("Company", "we", "us", or "our") governing your use of the TrixMart mobile application, website, and related digital infrastructure (collectively, "The Platform").
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-10">
                        By registering an account, accessing, or utilizing The Platform, you affirmatively agree to be bound by the terms contained herein. If you do not agree to these terms, you must immediately cease use of The Platform and delete the application from your device.
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">1. Apple App Store and Google Play Store Mandatory Disclosures</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To comply with the distribution requirements of the Apple App Store and Google Play Store, the following terms apply to your use of The Platform:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-3">
                            <li><strong>Acknowledgment:</strong> You acknowledge that this Agreement is concluded solely between you and TrixMart, and not with Apple Inc. ("Apple") or Google LLC ("Google"). TrixMart, not Apple or Google, is solely responsible for The Platform and the content thereof.</li>
                            <li><strong>Scope of License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to use The Platform on any Apple-branded or Android-branded products that you own or control, strictly as permitted by the Usage Rules set forth in the respective App Store Terms of Service.</li>
                            <li><strong>Maintenance and Support:</strong> TrixMart is solely responsible for providing any maintenance and support services with respect to The Platform. You acknowledge that Apple and Google have absolutely no obligation whatsoever to furnish any maintenance and support services for The Platform.</li>
                            <li><strong>Warranty and Product Claims:</strong> TrixMart is solely responsible for addressing any claims you or any third party may have relating to The Platform, including but not limited to: (i) product liability claims; (ii) any claim that The Platform fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. Apple and Google are entirely absolved of these responsibilities.</li>
                            <li><strong>Third-Party Beneficiary:</strong> You acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of this EULA. Upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third-party beneficiary.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">2. Intellectual Property and Software Restrictions</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The underlying architecture of The Platform is proprietary. You are strictly prohibited from:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                            <li>Reverse-engineering, decompiling, or disassembling the compiled application binaries or the underlying source code.</li>
                            <li>Utilizing automated data scraping, extraction tools, or participating in Distributed Denial of Service (DDoS) attacks against our servers.</li>
                            <li>Creating derivative works, distributing unauthorized modified versions of the application, or utilizing the platform to infringe upon the copyright or intellectual property rights of others.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-[#051650] mt-6 mb-3">Prohibited Academic and Illicit Listings</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Given the academic nature of our community, Sellers are strictly prohibited from listing items that facilitate academic dishonesty. This includes, but is not limited to, the sale of pre-written essays, thesis projects, stolen examination materials, or proxy-examination services. Furthermore, the sale of illicit substances, weapons, and counterfeit institutional merchandise is strictly forbidden and will result in an immediate, permanent ban.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Notice and Takedown:</strong> We operate a strict takedown policy. If we receive a valid notification of copyright infringement, we will expeditiously remove the infringing content and permanently suspend the accounts of repeat infringers.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">3. Intermediary Status and Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TrixMart operates exclusively as a digital intermediary. We provide the technological infrastructure (hosted via Supabase and AWS) to connect independent third-party Sellers with Buyers within academic communities.
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                            <li><strong>No Seller Liability:</strong> TrixMart is not a party to the actual sales transaction. The contract formed at the completion of a purchase exists solely between the Buyer and the Seller. TrixMart is not vicariously or strictly liable for unlawful user-generated content, defamatory reviews, or defective products listed by third-party Sellers.</li>
                            <li><strong>Indemnification:</strong> Sellers agree to fully indemnify and hold TrixMart harmless against any third-party claims, regulatory fines, or legal expenses arising from their product listings, digital storefronts, or failure to fulfill orders.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-[#051650] mt-6 mb-3">Escrow and Payout Clearing Period</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To ensure marketplace integrity and buyer satisfaction, TrixMart utilizes a temporary fund-holding mechanism. All funds generated from a completed transaction are held in a pending escrow state for a mandatory clearing period of three (3) calendar days (72 hours) following the order completion. During this three-day window, the Buyer retains the right to inspect the goods and report any defects, non-delivery, or misrepresentation to initiate a dispute. If no dispute is formally lodged within this 72-hour period, the funds will be automatically cleared and released to the Seller's withdrawable wallet balance.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">4. Consumer Rights, Returns, and Refunds (FCCPA Compliance)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In strict compliance with the Federal Competition and Consumer Protection Act (FCCPA) of 2018, TrixMart enforces the fundamental statutory rights of all Buyers.
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                            <li><strong>Prohibition of "No-Refund" Policies:</strong> Sellers on TrixMart are strictly prohibited from enforcing blanket "no-refund" policies.</li>
                            <li><strong>Right to Return Defective Goods:</strong> Buyers are legally entitled to return physical products and receive a full refund from the Seller if the product is found to be defective, unsafe, or materially fails to correspond to the digital description provided on The Platform.</li>
                            <li><strong>Timely Performance:</strong> If a Seller offers services, Buyers have the right to timely performance. Failure to complete services as agreed entitles the Buyer to a reasonable, proportionate refund.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">5. Seller Obligations, KYC, and Cybersecurity</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To protect our ecosystem from digital fraud and comply with the Cybercrimes (Prohibition, Prevention, etc.) Amendment Act of 2024, Sellers are subject to strict regulatory oversight:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                            <li><strong>Identity Verification (KYC):</strong> Sellers must provide accurate legal identities. TrixMart reserves the right to mandate the biometric matching and real-time database verification of government-issued identification (such as the NIN or BVN) before granting storefront visibility.</li>
                            <li><strong>Fraud Prevention:</strong> Any manipulation or fraudulent exploitation of our payment technology gateways will result in immediate account termination, and the preservation of digital evidence (including IP addresses and traffic logs) for handover to national law enforcement and cybersecurity agencies.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-[#051650] mt-6 mb-3">Account Suspension and Financial Freezes</h3>
                        <p className="text-gray-700 leading-relaxed">
                            In the event that our automated risk algorithms or administrative personnel flag a Seller's account for suspected fraudulent activity, severe policy violations, or anomalous transaction patterns, TrixMart reserves the right to immediately suspend the account. Furthermore, to protect consumers and facilitate internal review, any pending wallet payouts and escrowed funds will be frozen for a period of up to ninety (90) days. This administrative hold allows us to conduct a comprehensive investigation, process necessary buyer chargebacks, and, if required, liaise with regulatory and law enforcement authorities. Upon the successful resolution of the investigation and exoneration of the Seller, all frozen, legitimate funds will be released.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">6. Cloud Infrastructure and Force Majeure</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The operational continuity of TrixMart relies on third-party cloud infrastructure and database providers.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Force Majeure:</strong> TrixMart shall not be held liable, nor be deemed to have defaulted under or breached this Agreement, for any delay or failure in performance resulting from causes beyond our reasonable control. This explicitly includes, but is not limited to: system downtime, AWS server failures, database rate-limiting, telecommunications breakdowns, internet service provider outages, and elements of nature.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            These events automatically suspend our performance obligations and do not constitute a "frustration" of the contract.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">7. Data Privacy and Account Deletion</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your use of The Platform is also governed by our Privacy Policy, which is aligned with the Nigeria Data Protection Act (NDPA) 2023. You retain the right to request the deletion of your account at any time via the application settings. Please note that while public profile data will be removed, specific financial transaction ledgers and KYC artifacts may be retained securely offline for up to ten (10) years to comply with national Anti-Money Laundering (AML) statutory retention mandates.
                        </p>
                        <h3 className="text-xl font-semibold text-[#051650] mt-6 mb-3">Prerequisites for Account Deletion</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While you retain the right to request account deletion, this action is strictly contingent upon the resolution of all active contractual obligations. Users may only initiate a permanent account deletion if:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                            <li><strong>Buyers:</strong> Have no pending, unfulfilled, or actively disputed orders.</li>
                            <li><strong>Sellers:</strong> Have successfully fulfilled all active orders, resolved any open buyer disputes, and successfully withdrawn all cleared funds from their platform wallet.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            The Platform's system will automatically block and reject any account deletion request until all active orders and financial obligations are fully resolved.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">8. Governing Law and Dispute Resolution</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This Agreement shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or in connection with this Agreement, including any question regarding its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the Nigerian courts.
                        </p>
                        <h3 className="text-xl font-semibold text-[#051650] mt-6 mb-3">Mandatory Internal Mediation</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Before initiating any formal legal proceedings, Users agree to first attempt to resolve any disputes arising from Platform transactions through TrixMart's internal support channels. Upon filing a formal dispute, TrixMart will act as a neutral mediator for a period of up to fourteen (14) days to facilitate an amicable resolution between the Buyer and Seller. Only after this internal mediation period has been exhausted may a User pursue external legal remedies.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">9. Prohibited Goods and Services</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sellers are strictly prohibited from listing, selling, or facilitating the exchange of the following age-restricted or regulated items on TrixMart:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-4">
                            <li><strong>Alcohol & Tobacco:</strong> Any alcoholic beverages, tobacco products, cigarettes, e-cigarettes, vapes, or related paraphernalia.</li>
                            <li><strong>Weapons & Explosives:</strong> Firearms, ammunition, tactical knives (excluding kitchen cutlery), explosives, or any item designed to cause bodily harm.</li>
                            <li><strong>Pharmaceuticals:</strong> Prescription-only medications, illegal drugs, or controlled substances.</li>
                            <li><strong>Adult Content:</strong> Pornographic material, sexually explicit services, or adult-oriented "novelty" items.</li>
                            <li><strong>Gambling:</strong> Lottery tickets, betting credits, or any form of organized gambling.</li>
                            <li><strong>Regulated Financial Products:</strong> Cryptocurrency, stocks, or credit services.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Enforcement:</strong> TrixMart reserves the right to immediately suspend any seller account and remove listings found in violation of these restrictions without prior notice.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">10. User Eligibility and Age Requirements</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By creating an account or using the TrixMart platform, you represent and warrant that:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-4">
                            <li><strong>Minimum Age:</strong> You are at least <strong>18 years of age</strong>.</li>
                            <li><strong>Contractual Capacity:</strong> You have the full legal capacity to enter into a binding contract and are not barred from using the services under applicable laws.</li>
                            <li><strong>Parental Supervision:</strong> If you are under the age of 18, you may only use TrixMart under the direct supervision of a parent or legal guardian who agrees to be bound by these Terms. However, <strong>all financial transactions</strong> must be conducted by the parent or guardian.</li>
                            <li><strong>Verification:</strong> TrixMart reserves the right to request proof of age at any time to ensure compliance with this section.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-[#051650] mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For any questions regarding these Terms or support requests, please contact us at:<br />
                            <strong>Email:</strong> trixmartng@gmail.com<br />
                            <strong>Address:</strong> Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass, Abuja FCT, 900001, Nigeria.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </Layout>
    );
}
