"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LegalNav from "@/components/legal-nav";

export default function PrivacyPolicyPage() {
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
              TRIX MART PRIVACY POLICY
            </h1>
            <p className="text-gray-600 font-medium text-sm">
              Version 1.0 · Effective date: 26 October 2026
            </p>
          </div>

          <section className="mb-10" id="section-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              1. About This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy explains how Trix Mart collects, uses, shares, protects and retains personal data when you use the Trix Mart application, website, communities, marketplace, seller services and other services (the &ldquo;Services&rdquo;), and the rights you have over your personal data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process personal data in accordance with the Nigeria Data Protection Act 2023 (&ldquo;NDPA&rdquo;) and the General Application and Implementation Directive 2025 issued by the Nigeria Data Protection Commission (&ldquo;NDPC&rdquo;).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Words such as Buyer, Seller, Verification and Seller ID have the meanings given in the Trix Mart Terms of Service.
            </p>
          </section>

          <section className="mb-10" id="section-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              2. Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The data controller responsible for your personal data is Trix Solutions Ltd, RC 8423912, Federal Housing Phase 2, Karu, Abuja, Federal Capital Territory, Nigeria, which operates Trix Mart (&ldquo;Trix Mart&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p className="text-gray-700 leading-relaxed">
              For any privacy question or request, contact us at{" "}
              <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline font-medium">
                trixmartng@gmail.com
              </a>.
            </p>
          </section>

          <section className="mb-10" id="section-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              3. Personal Data We Collect
            </h2>
            <h3 className="text-lg font-semibold text-[#051650] mb-3">
              3.1 Information you give us
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Account information:</strong> name, email address, phone number, password, university, and whether you are a Buyer or Seller.
              </li>
              <li>
                <strong>Seller registration information:</strong> business name, description, category, logo, business social media handles, product or service images, and student or alumni status.
              </li>
              <li>
                <strong>Verification information:</strong> student ID card details and image, matriculation or registration number, expected graduation date, and a live facial photograph taken through your device camera. Trix Mart does not require your National Identification Number (NIN).
              </li>
              <li>
                <strong>Payout information (Sellers):</strong> bank name, account number and account name, used to pay out Seller proceeds.
              </li>
              <li>
                <strong>Order and delivery information:</strong> items ordered, prices, delivery address, recipient details and delivery instructions.
              </li>
              <li>
                <strong>Support and complaint information:</strong> Support Tickets, reports, messages, photographs, videos and other evidence you send us.
              </li>
              <li>
                <strong>Communications:</strong> messages sent through the Services, reviews, survey responses and event registrations.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[#051650] mb-3">
              3.2 Information collected automatically
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Device and app information:</strong> such as device model, operating system, app version and push notification tokens;
              </li>
              <li>
                <strong>Log and usage information:</strong> such as IP address, pages and Listings viewed, searches, and dates and times of access; and
              </li>
              <li>
                <strong>Cookie and similar technology information:</strong> on our website (see section 13).
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-[#051650] mb-3">
              3.3 Information from third parties
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                <strong>Student verification providers:</strong> such as SheerID, where supported, which confirm whether you are an enrolled student;
              </li>
              <li>
                <strong>Paystack:</strong> our payment processor, which tells us whether a payment succeeded and the status of Seller payouts;
              </li>
              <li>
                <strong>Delivery providers:</strong> which share delivery status and proof of delivery; and
              </li>
              <li>
                <strong>Other users:</strong> for example when a Buyer reports a Seller or a Seller responds to a Support Ticket.
              </li>
            </ul>
          </section>

          <section className="mb-10" id="section-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              4. How We Use Your Data and Our Lawful Basis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We only process personal data where we have a lawful basis under section 25 of the NDPA.
            </p>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-[#051650] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                    <th className="px-4 py-3 text-left font-semibold">Data used</th>
                    <th className="px-4 py-3 text-left font-semibold">Lawful basis</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Create and manage your account</td>
                    <td className="px-4 py-3">Account information, device information</td>
                    <td className="px-4 py-3">Performance of a contract (our Terms of Service)</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Publish Seller profiles and Listings</td>
                    <td className="px-4 py-3">Seller registration information</td>
                    <td className="px-4 py-3">Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Verify Sellers and issue Seller IDs</td>
                    <td className="px-4 py-3">Verification information, verification provider results</td>
                    <td className="px-4 py-3">Consent (explicit consent for the facial photograph and other sensitive data); legitimate interest in preventing fraud for the remaining checks</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Enable orders, messaging and delivery</td>
                    <td className="px-4 py-3">Account, order and delivery information</td>
                    <td className="px-4 py-3">Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Collect payments and pay out Seller proceeds</td>
                    <td className="px-4 py-3">Order, payment and payout information</td>
                    <td className="px-4 py-3">Performance of a contract; legal obligation</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Handle complaints and Support Tickets</td>
                    <td className="px-4 py-3">Support and complaint information, order information</td>
                    <td className="px-4 py-3">Performance of a contract; legitimate interest in resolving disputes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Prevent fraud, enforce our Policies and keep the platform safe</td>
                    <td className="px-4 py-3">Account, Verification, usage and complaint information</td>
                    <td className="px-4 py-3">Legitimate interest; legal obligation where applicable</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Send service messages (order updates, security alerts, policy changes)</td>
                    <td className="px-4 py-3">Contact details, push tokens</td>
                    <td className="px-4 py-3">Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Send marketing about Trix Mart events, campaigns and features</td>
                    <td className="px-4 py-3">Name, contact details, university</td>
                    <td className="px-4 py-3">Consent (you can opt out at any time)</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Improve and secure the Services, and produce statistics</td>
                    <td className="px-4 py-3">Usage and device information</td>
                    <td className="px-4 py-3">Legitimate interest</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Keep financial and tax records and respond to lawful requests</td>
                    <td className="px-4 py-3">Order, fee and payment records</td>
                    <td className="px-4 py-3">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Where we rely on legitimate interest, we have considered whether our interest is outweighed by your rights and whether you would reasonably expect the processing. You can object to this processing (see section 11).
            </p>
          </section>

          <section className="mb-10" id="section-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              5. Verification Data and Facial Photographs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Student ID information and facial photographs need special care. Facial images used to identify a person may be sensitive personal data under the NDPA. We therefore:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>
                Collect the facial photograph only with your explicit consent, given at the point of capture, for the purpose of confirming that the person registering is the person on the student ID;
              </li>
              <li>
                Do not use Verification information for marketing, advertising or any purpose unrelated to Verification, fraud prevention and safety;
              </li>
              <li>
                Never display your student ID or facial photograph to Buyers or other users;
              </li>
              <li>
                Restrict access to a small number of authorised Trix Mart reviewers who are bound by confidentiality;
              </li>
              <li>
                Store this information encrypted and separate from public profile data;
              </li>
              <li>
                Delete the facial photograph and ID images within 120 days of the Verification decision, keeping only a record that Verification was approved or rejected, the date and the reviewer, unless we need them longer to investigate suspected fraud or meet a legal obligation; and
              </li>
              <li>
                Review Verification manually. We do not use automated facial recognition or facial matching software.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can withdraw consent at any time. If you do so before Verification is complete, we will not be able to verify you as a Seller.
            </p>
          </section>

          <section className="mb-10" id="section-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              6. Children
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Services are intended for people aged 18 and over. You must be at least 18 to create an account. We do not knowingly collect personal data from anyone under 18. If we learn that we hold data about a child without appropriate consent, we will delete it. Please contact us if you believe this has happened.
            </p>
          </section>

          <section className="mb-10" id="section-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              7. Who We Share Your Data With
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal data. We share it only as described below.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li>
                <strong>Other users:</strong> Buyers can see a Seller&rsquo;s business name, logo, Listings, university, Verified Seller status, Seller ID and contact details the Seller chooses to display. When an order is placed, the Seller receives the Buyer details needed to fulfil it.
              </li>
              <li>
                <strong>Service providers acting on our behalf (data processors):</strong> including Supabase (database, account login and file storage) and other service providers we engage to operate the Services. They may only use the data to provide services to us and must protect it under written agreements.
              </li>
              <li>
                <strong>Student verification providers:</strong> such as SheerID, where you choose to verify through them.
              </li>
              <li>
                <strong>Delivery providers:</strong> who receive the name, phone number and address needed to deliver an order.
              </li>
              <li>
                <strong>Paystack:</strong> which processes Buyer payments and Seller payouts.
              </li>
              <li>
                <strong>Parties to a complaint:</strong> when handling a Support Ticket, we may share relevant information with the other party, the delivery provider or a payment provider.
              </li>
              <li>
                <strong>Authorities:</strong> where required by law or to protect users, for example the police, the FCCPC, the NDPC or a court.
              </li>
              <li>
                <strong>Business transfers:</strong> a buyer or successor if Trix Mart is reorganised, merged or sold, subject to this Policy.
              </li>
            </ul>
          </section>

          <section className="mb-10" id="section-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              8. International Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Some of our service providers, such as SheerID (United States), where used, and Supabase, which may store data on servers outside Nigeria, may store or process data outside Nigeria. We transfer personal data outside Nigeria only where permitted under Part VIII of the NDPA, for example where the recipient country has adequate data protection, where appropriate contractual safeguards are in place, or with your consent after we have explained the risks. You can ask us for details of the safeguards we use.
            </p>
          </section>

          <section className="mb-10" id="section-9">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              9. How Long We Keep Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We keep personal data only as long as needed for the purposes described in this Policy.
            </p>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-[#051650] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Data</th>
                    <th className="px-4 py-3 text-left font-semibold">Retention period</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Facial photograph and student ID images</td>
                    <td className="px-4 py-3">120 days after the Verification decision, unless needed for a fraud investigation</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Verification outcome record (status, date, reviewer)</td>
                    <td className="px-4 py-3">For the life of the Seller account plus 2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Account and profile information</td>
                    <td className="px-4 py-3">For the life of the account, then deleted or anonymised within 90 days of closure</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Order, fee and payment records</td>
                    <td className="px-4 py-3">6 years after the transaction, for tax and accounting purposes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Support Tickets and complaint evidence</td>
                    <td className="px-4 py-3">2 years after the ticket is closed</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Records of enforcement action (suspension, removal)</td>
                    <td className="px-4 py-3">5 years, to prevent repeat abuse</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Marketing preferences</td>
                    <td className="px-4 py-3">Until you withdraw consent, plus a suppression record so we do not contact you again</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Website and app logs</td>
                    <td className="px-4 py-3">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" id="section-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              10. How We Protect Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use technical and organisational measures appropriate to the risk, including encryption in transit and at rest, role-based access controls, restricted access to Verification information, secure authentication, logging of access to sensitive data, and staff confidentiality obligations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No system is completely secure. If a personal data breach is likely to put your rights at risk, we will notify the NDPC within 72 hours of becoming aware of it and inform you without undue delay where the risk is high.
            </p>
          </section>

          <section className="mb-10" id="section-11">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              11. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under the NDPA, you have the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Be informed about how your data is used;</li>
              <li>Access a copy of your personal data;</li>
              <li>Correct inaccurate or incomplete data;</li>
              <li>Have your data deleted where there is no longer a lawful reason to keep it;</li>
              <li>Restrict processing in certain circumstances;</li>
              <li>Object to processing based on legitimate interest, and to direct marketing at any time;</li>
              <li>Receive your data in a commonly used, machine-readable format (data portability);</li>
              <li>Withdraw consent at any time, without affecting processing that took place before withdrawal;</li>
              <li>Not be subject to a decision based solely on automated processing that significantly affects you; and</li>
              <li>Lodge a complaint with the Nigeria Data Protection Commission (<a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] underline">ndpc.gov.ng</a>).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise a right, contact us at{" "}
              <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline font-medium">
                trixmartng@gmail.com
              </a>{" "}
              or through the in-app complaint feature. We may need to confirm your identity. We will respond within 30 days and will tell you if we need more time or cannot meet your request, and why.
            </p>
          </section>

          <section className="mb-10" id="section-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              12. Marketing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We will send you marketing messages, for example about campaigns, workshops or trade fairs, only if you have agreed. You can opt out at any time using the unsubscribe link, by replying STOP where offered, by changing your settings or by contacting us. Joining a Trix Mart WhatsApp or community group is separate and is also subject to that platform&rsquo;s terms.
            </p>
          </section>

          <section className="mb-10" id="section-13">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              13. Cookies and Similar Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses strictly necessary cookies to make it work. We use any other cookies, such as analytics cookies, only with your consent, which you can give or refuse through the cookie banner and change at any time.
            </p>
          </section>

          <section className="mb-10" id="section-14">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              14. Links to Other Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Services may link to third-party websites and apps, such as a Seller&rsquo;s social media pages or WhatsApp. Their privacy practices are their own, and we encourage you to read their policies.
            </p>
          </section>

          <section className="mb-10" id="section-15">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              15. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy as the Services develop or the law changes. We will tell you about significant changes through the application, website, email or community channels before they take effect, and we will ask for fresh consent where the law requires it.
            </p>
          </section>

          <section className="mb-10" id="section-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              16. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For privacy questions or to exercise your rights:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-sm text-gray-800">
              <p><strong>Entity:</strong> Trix Solutions Ltd (Trix Mart)</p>
              <p><strong>Address:</strong> Federal Housing Phase 2, Karu, Abuja, FCT, Nigeria</p>
              <p><strong>Email:</strong> <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline">trixmartng@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+2349030965445" className="text-[#0D6EFD] underline">+234 903 096 5445</a></p>
              <p><strong>Website:</strong> <a href="https://trixmart.ng" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] underline">trixmart.ng</a></p>
            </div>
            <p className="text-gray-600 text-xs mt-4">
              If you are not satisfied with our response, you can complain to the Nigeria Data Protection Commission at <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] underline">ndpc.gov.ng</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

