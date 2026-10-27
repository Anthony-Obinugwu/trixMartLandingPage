"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LegalNav from "@/components/legal-nav";

export default function TermsOfServicePage() {
  return (
    <Layout>
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16 font-montserrat min-h-screen">
        <div className="max-w-4xl mx-auto">
          <LegalNav />
          
          <div className="mb-8 border-b pb-6">
            <span className="inline-block px-3 py-1 bg-[#051650]/10 text-[#051650] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
              Official Legal Document
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#051650] mb-2">
              TRIX MART TERMS OF SERVICE
            </h1>
            <p className="text-gray-600 font-medium text-sm">
              Version 1.0 · Effective date: 26 October 2026
            </p>
          </div>

          <section className="mb-10" id="section-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Welcome to Trix Mart. Trix Mart is a university-centred marketplace that connects buyers with verified student businesses within and beyond their universities. These Terms of Service (“Terms”) set out the agreement between you and Trix Solutions Ltd, a company registered in Nigeria under RC 8423912, with its registered office at Federal Housing Phase 2, Karu, Abuja, Federal Capital Territory, Nigeria, which operates Trix Mart (“Trix Mart”, “we”, “us” or “our”). These Terms apply when you use the Trix Mart application, website, communities, marketplace, seller services and any other services we provide (together, the “Services”). By creating an account, registering as a seller, joining a Trix Mart community or using the Services, you agree to these Terms. If you do not agree, you must not use the Services.</p>
          </section>

          <section className="mb-10" id="section-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">2. Definitions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">In these Terms:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Buyer means a person who uses the Services to discover, enquire about or purchase a product or service from a Seller.</li>
              <li>Seller means a Student Seller or Alumni Business that has registered to list products or services on Trix Mart.</li>
              <li>Student Seller and Alumni Business have the meanings given in the Trix Mart Acceptable Use Policy.</li>
              <li>Listing means any product, service, price, image, description or other information a Seller publishes on Trix Mart.</li>
              <li>Verification means Trix Mart’s process for checking a Seller’s identity and student or alumni status, and Verified Seller means a Seller whose Verification has been approved and not withdrawn.</li>
              <li>Seller ID means the verification identifier Trix Mart issues to a Verified Seller.</li>
              <li>Support Ticket means a complaint or request logged through Trix Mart’s official support channel.</li>
              <li>Policies means the Trix Mart Acceptable Use Policy, Returns &amp; Refunds Policy, Shipping &amp; Delivery Policy and Privacy Policy, as updated from time to time.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">3. Who Can Use Trix Mart</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart is primarily designed for students, alumni businesses and university communities. Buyers may be within or outside a university community. To create an account you must:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Be at least 18 years old;</li>
              <li>Be able to enter into a binding contract under Nigerian law;</li>
              <li>Provide accurate, current and complete information; and</li>
              <li>Not have been previously suspended or removed from Trix Mart. Sellers must also meet the eligibility and Verification requirements in the Acceptable Use Policy. Trix Mart is an independent platform. Unless we expressly state otherwise, Trix Mart is not affiliated with, endorsed by or acting on behalf of any university, and a Seller’s association with a university does not mean that university endorses Trix Mart or the Seller.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">4. Your Account</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You are responsible for keeping your login details secure and for activity on your account. You must not share your account, transfer it or allow another person to use your verified seller identity. You must tell us promptly through the official support channel if you believe your account has been compromised. You must keep your account information up to date, including your phone number, university and student or alumni status.</p>
          </section>

          <section className="mb-10" id="section-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">5. Trix Mart’s Role</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart provides a platform where Sellers can list products and services and Buyers can discover and contact them. Unless Trix Mart expressly states that it is selling something itself:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Trix Mart is not the seller of products or services listed by Sellers;</li>
              <li>The contract of sale is between the Buyer and the Seller, and Trix Mart is not a party to it;</li>
              <li>Sellers are responsible for their Listings, products, services, pricing, fulfilment and any return, replacement or refund;</li>
              <li>Trix Mart does not process, issue or pay refunds for purchases from Sellers. See the Returns &amp; Refunds Policy; and</li>
              <li>Where a Buyer pays through Trix Mart, Trix Mart receives the payment on the Seller’s behalf through its payment processor, Paystack, and pays it out to the Seller as described in section 9. Receiving a payment on a Seller’s behalf does not make Trix Mart the seller. Trix Mart may help Buyers and Sellers resolve problems through its Support Ticket process and may take action under the Acceptable Use Policy, but it does not guarantee the outcome of any transaction.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">6. Seller Verification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Verification is central to trust on Trix Mart. To become a Verified Seller you must complete our Verification process, which may include providing student identification information, a live facial photograph taken through your device camera, business information and, where supported, verification through a third-party student verification provider such as SheerID. Trix Mart does not require a National Identification Number (NIN) for Verification. A verification fee applies to become a Verified Seller (see section 10). Trix Mart will review your submission and may approve, reject or ask for more information. A Seller ID is issued only after Verification is approved. Until then, your account is pending and must not be presented as verified. Trix Mart may require you to re-verify, for example when your student status changes, and may withdraw Verification if information is found to be false, out of date or unverifiable. If your Verification is rejected or withdrawn, you may ask us to review the decision through the official support channel. Verification confirms only that the information you provided met our checks at the time of review. It does not mean Trix Mart guarantees the quality, legality, safety or availability of any product or service, or that a transaction will be free from fraud. How we handle Verification information, including facial photographs and student ID information, is explained in the Privacy Policy.</p>
          </section>

          <section className="mb-10" id="section-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">7. Seller Obligations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As a Seller you must:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Keep your Listings accurate, clear and not misleading, including price, condition, availability and delivery arrangements;</li>
              <li>Only sell products and services you are legally allowed to sell, and hold any licence or authorisation required;</li>
              <li>Fulfil orders you accept, within the stated or agreed timeframe;</li>
              <li>Package items properly and hand over the correct order for delivery;</li>
              <li>State your return conditions clearly before purchase;</li>
              <li>Respond to Support Tickets in good faith and within the timelines in the Returns &amp; Refunds Policy;</li>
              <li>Provide any return, replacement or refund owed to a Buyer directly to that Buyer;</li>
              <li>Comply with applicable law, including consumer protection, tax and data protection law; and</li>
              <li>Use Buyer information only to complete the relevant transaction, and not for unsolicited marketing.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">8. Buyer Obligations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As a Buyer you must:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Read the Listing and the Seller’s stated terms before purchasing;</li>
              <li>Pay for orders you place using the agreed method;</li>
              <li>Provide accurate delivery and contact information and be available to receive orders;</li>
              <li>Inspect orders promptly and report any problem within 24 hours through the official support channel; and</li>
              <li>Not misuse the complaint process.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-9">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">9. Orders, Prices and Payments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Sellers set the prices of their products and services. Prices are in Nigerian Naira (₦) unless stated otherwise. An order is accepted when the Seller confirms it. A Buyer may cancel an order before the Seller confirms it. After that, cancellation is at the Seller’s discretion, as set out in the Returns &amp; Refunds Policy. Payments for orders are processed by Paystack, Trix Mart’s payment processor. Trix Mart receives the payment on the Seller’s behalf and the order is shown as pending. An order is no longer pending once delivery or collection has been confirmed. Trix Mart then pays the Seller's proceeds out through Paystack in accordance with standard settlement processing, less any applicable Trix Mart commission or fees. Payouts are not delayed or withheld because a complaint has been raised. Any remedy owed to a Buyer is provided by the Seller directly. Paystack’s own terms also apply to payments made through it. Sellers must provide accurate bank account details for payouts. Trix Mart never asks you to send money to a personal account in the name of a Trix Mart staff member. Be cautious of anyone who does.</p>
          </section>

          <section className="mb-10" id="section-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">10. Fees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Creating a Buyer account is free. Sellers pay a verification fee, shown in the app at the time of registration, to become Verified Sellers. Trix Mart may also charge Sellers other fees, such as subscription fees or fees for promotional and other paid services. Applicable fees will be communicated before you incur them. The verification fee is non-refundable. Other fees paid to Trix Mart are non-refundable except as set out in the Returns &amp; Refunds Policy or where required by law. Paying for a Trix Mart service gives access to that service and does not guarantee any number of customers, sales, revenue or level of visibility.</p>
          </section>

          <section className="mb-10" id="section-11">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">11. Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Delivery may be arranged by the Seller, agreed between the Buyer and Seller, or coordinated by Trix Mart through third-party delivery providers where available. Trix Mart does not operate its own delivery fleet. Where Trix Mart coordinates delivery, it collects the delivery fee from the Buyer and pays the delivery provider. Delivery is governed by the Shipping &amp; Delivery Policy.</p>
          </section>

          <section className="mb-10" id="section-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">12. Complaints, Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If something goes wrong with an order, the Buyer must raise a complaint through the in-app complaint feature or the official support channel within 24 hours, as set out in the Returns &amp; Refunds Policy. Trix Mart will handle it as a Support Ticket, contact the Seller and recommend a resolution. Any refund is paid by the Seller, not by Trix Mart. Where a transaction is completed outside Trix Mart, we may not be able to investigate it or take action.</p>
          </section>

          <section className="mb-10" id="section-13">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">13. Content You Upload</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You keep ownership of the content you upload, such as product photographs, logos, descriptions, videos and reviews. You grant Trix Mart a non-exclusive, royalty-free, worldwide licence to host, store, reproduce, display, adapt (for example, resize or crop) and distribute that content to operate and promote the Services, including in Trix Mart marketing featuring your business. This licence ends when you delete the content or your account, except for content already shared with others or retained as required by law. You confirm that you have the right to upload your content and that it complies with the Acceptable Use Policy. We may remove content that breaches these Terms or the Policies.</p>
          </section>

          <section className="mb-10" id="section-14">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">14. Trix Mart’s Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The Trix Mart name, logo, application, website, design and software belong to Trix Mart or its licensors. You may not copy, modify, reverse engineer or use them except as needed to use the Services, or use the Trix Mart brand in a way that suggests a partnership or endorsement without our written permission.</p>
          </section>

          <section className="mb-10" id="section-15">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">15. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You must comply with the Trix Mart Acceptable Use Policy, which forms part of these Terms. It covers prohibited activities, fraud, false information, harassment, platform manipulation, prohibited products and community conduct.</p>
          </section>

          <section className="mb-10" id="section-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">16. Reviews and Ratings</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Where Trix Mart provides reviews or ratings, they must reflect genuine experience. We may remove reviews that breach the Acceptable Use Policy. Reviews are the opinions of users, not of Trix Mart.</p>
          </section>

          <section className="mb-10" id="section-17">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">17. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The Services may rely on or link to third-party services, including payment providers, delivery providers, student verification providers, app stores and messaging platforms such as WhatsApp. Those services are governed by their own terms, and Trix Mart is not responsible for them.</p>
          </section>

          <section className="mb-10" id="section-18">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">18. Suspension and Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart may take action under the Acceptable Use Policy, including removing content or Listings, withdrawing Verification, restricting, suspending or terminating your account, where you breach these Terms or the Policies, where required by law, or where necessary to protect users or the platform. Where reasonable, we will tell you why and give you the opportunity to respond. You may close your account at any time by contacting Trix Mart through the in-app complaint feature or the official support channel. Closing your account does not cancel obligations from earlier transactions, such as completing accepted orders or providing a remedy owed to a Buyer.</p>
          </section>

          <section className="mb-10" id="section-19">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">19. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart provides the Services on an “as is” and “as available” basis. We work to keep the Services available and secure but do not guarantee that they will be uninterrupted or error-free. To the extent permitted by law, Trix Mart does not guarantee the quality, safety, legality or accuracy of Listings, products or services offered by Sellers, or the conduct of any user.</p>
          </section>

          <section className="mb-10" id="section-20">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">20. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">To the extent permitted by law:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Trix Mart is not liable for losses arising from a transaction between a Buyer and a Seller, including a Seller’s failure to deliver, refund or provide a remedy;</li>
              <li>Trix Mart is not liable for indirect or consequential losses, or loss of profit, revenue, business or opportunity; and</li>
              <li>Trix Mart’s total liability to you in connection with the Services is limited to the greater of the fees you paid to Trix Mart in the 12 months before the claim arose and ₦1,000,000. Nothing in these Terms limits liability for fraud, for death or personal injury caused by negligence, or for any liability that cannot be limited under Nigerian law, including the Federal Competition and Consumer Protection Act 2018.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-21">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">21. Indemnity</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to compensate Trix Mart for reasonable losses, costs and claims arising from your breach of these Terms or the Policies, your Listings or content, or your transactions with other users, except to the extent caused by Trix Mart.</p>
          </section>

          <section className="mb-10" id="section-22">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">22. Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart processes personal data in accordance with the Trix Mart Privacy Policy and the Nigeria Data Protection Act 2023.</p>
          </section>

          <section className="mb-10" id="section-23">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">23. Changes to the Services and These Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart is an evolving marketplace and may change, add or remove features. We may update these Terms from time to time. Where changes are significant, we will notify you through the application, website, email or community channels before they take effect. Continued use of the Services after updated Terms take effect means you accept them.</p>
          </section>

          <section className="mb-10" id="section-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">24. Governing Law and Disputes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">These Terms are governed by the laws of the Federal Republic of Nigeria. If you have a dispute with Trix Mart, please contact us first so we can try to resolve it. If it is not resolved within 30 days, either party may refer it to mediation at the Abuja Multi-Door Courthouse before starting court proceedings. The courts of the Federal Capital Territory, Abuja have jurisdiction, without affecting your right to complain to the FCCPC, the Nigeria Data Protection Commission or any other regulator.</p>
          </section>

          <section className="mb-10" id="section-25">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">25. General</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>These Terms and the Policies form the whole agreement between you and Trix Mart about the Services. If there is a conflict, these Terms apply, except that the Privacy Policy governs how personal data is handled.</li>
              <li>If any part of these Terms is found invalid, the rest remains in effect.</li>
              <li>If we do not enforce a right immediately, we have not waived it.</li>
              <li>You may not transfer your rights under these Terms. Trix Mart may transfer its rights as part of a reorganisation or sale of its business, with notice to you.</li>
              <li>Trix Mart is not responsible for delays or failures caused by events outside its reasonable control.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-26">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">26. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you have questions about these Terms, please contact Trix Mart through our official support channels. Trix Mart Email: trixmartng@gmail.com Website: trixmart.ng Support/Report Channel: +234 903 096 5445</p>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
