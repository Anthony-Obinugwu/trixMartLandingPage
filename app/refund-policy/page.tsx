"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LegalNav from "@/components/legal-nav";

export default function ReturnsAndRefundsPolicyPage() {
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
              TRIX MART RETURNS &amp; REFUNDS POLICY
            </h1>
            <p className="text-gray-600 font-medium text-sm">
              Version 2.0 · Effective date: 26 October 2026 · Replaces version 1.1
            </p>
          </div>

          <section className="mb-10" id="section-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">1. About This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">This Returns &amp; Refunds Policy explains what a buyer should do when there is a problem with a purchase made through Trix Mart, how Trix Mart handles complaints, and who is responsible for returns, replacements and refunds. Trix Mart is a university-centred marketplace connecting buyers with verified student businesses. Products and services listed on Trix Mart are supplied by independent sellers, not by Trix Mart. Trix Mart does not process, issue or pay refunds. Where a buyer is entitled to a return, replacement or refund, that remedy is provided by the seller. Trix Mart’s role is to receive complaints, investigate them through its support ticket process, help the buyer and seller reach a resolution, and take action against sellers who do not meet their obligations. This Policy replaces version 1.1 of the Trix Mart Returns &amp; Refunds Policy.</p>
          </section>

          <section className="mb-10" id="section-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">2. Key Points</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Report any problem with an order within 24 hours of receiving it (or, for an order that never arrives, within 24 hours of the expected delivery or collection date).</li>
              <li>Complaints are raised through Trix Mart’s official support channel and handled as a support ticket.</li>
              <li>Refunds, returns and replacements are provided by the seller, not by Trix Mart.</li>
              <li>Trix Mart does not pay refunds, either from its own funds or from payments it receives on a seller’s behalf.</li>
              <li>Trix Mart may take action against a seller who refuses a fair resolution, including warnings, listing removal, removal of verification status, suspension or termination.</li>
              <li>Nothing in this Policy removes rights a buyer has under Nigerian consumer protection law.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">3. Trix Mart’s Role</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart is a marketplace platform. It does not manufacture, own, stock or independently supply the products and services listed by sellers, and it is not a party to the contract of sale between a buyer and a seller. When a problem is reported in time, Trix Mart may:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Open a support ticket and acknowledge the complaint;</li>
              <li>Contact the seller and, where relevant, the delivery provider;</li>
              <li>Request and review evidence from both parties;</li>
              <li>Recommend a fair resolution based on this Policy, the listing and the evidence;</li>
              <li>Record the outcome of the ticket; and</li>
              <li>Take enforcement action against a seller or buyer under the Trix Mart Acceptable Use Policy. Where a buyer pays through Trix Mart, Trix Mart receives the payment on the seller’s behalf through its payment processor, Paystack, and pays it out to the seller once the order is no longer pending. Raising a complaint does not delay or stop the payout to the seller, and Trix Mart does not use those payments to refund buyers. Trix Mart will not:</li>
              <li>Pay refunds from its own funds;</li>
              <li>Credit a buyer’s account, wallet or balance as a refund; or</li>
              <li>Guarantee that a seller will provide a refund.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">4. When a Buyer May Be Entitled to a Remedy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A buyer may be entitled to a return, replacement, repair, re-delivery or refund from the seller where:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>The wrong product was supplied.</li>
              <li>The product received is materially different from its listing or description.</li>
              <li>The product arrives damaged.</li>
              <li>The product is defective or does not function as reasonably described.</li>
              <li>The order is incomplete or an item is missing.</li>
              <li>The seller fails to fulfil an order after payment has been made.</li>
              <li>A service was not provided, or was not provided as described.</li>
              <li>The seller and buyer agree to another appropriate resolution. Whether a remedy is appropriate will depend on the circumstances of the transaction, the nature of the product or service, the evidence provided and applicable law. Product images may be illustrative. A difference in minor details such as packaging, shade or presentation will not on its own make a product materially different, unless the listing promised that detail.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">5. Reporting a Problem: the 24-Hour Window</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A buyer must report a problem with an order through Trix Mart’s official support channel within 24 hours of:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Receiving or collecting the order; or</li>
              <li>The expected delivery or collection date, where the order has not arrived; or</li>
              <li>The scheduled completion of a service. Problems that are visible on delivery, such as a wrong, damaged or missing item, should be reported as soon as possible and, where practical, before the buyer uses the product. Trix Mart may decline to open or progress a support ticket for a complaint received after the 24hour window, unless the buyer can show that the problem could not reasonably have been discovered or reported within that time (for example, a hidden defect that only became apparent on first use). This time limit applies to Trix Mart’s complaint process only. It does not remove any right a buyer may have against the seller under applicable law.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">6. How to Submit a Complaint</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Complaints should be submitted through the in-app complaint feature, or by email to trixmartng@gmail.com, or through the support channel on +234 903 096 5445. Each complaint is logged as a support ticket with a reference number. The buyer should provide, where applicable:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Order details or reference;</li>
              <li>The seller’s name or business name and Seller ID;</li>
              <li>A description of the problem;</li>
              <li>Clear photographs or a short video showing the issue, including the packaging;</li>
              <li>Proof of payment;</li>
              <li>Delivery information; and</li>
              <li>Any relevant communication with the seller. The buyer should keep the product and its packaging in the condition in which it was received until the ticket is resolved. A product that has been used, altered or tampered with after a problem was noticed may not be eligible for a remedy.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">7. How Trix Mart Handles a Support Ticket</h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-3 mb-4">
              <li>Acknowledgement. Trix Mart acknowledges the ticket within 24 hours and may ask for further information.</li>
              <li>Seller response. Trix Mart notifies the seller, who must respond within 48 hours. A seller who does not respond may be treated as not disputing the complaint.</li>
              <li>Review. Trix Mart reviews what was advertised, what was ordered, what was supplied, the evidence from both parties, delivery information and the seller’s stated terms.</li>
              <li>Recommended resolution. Trix Mart recommends an outcome, such as a replacement, return, partial or full refund from the seller, re-delivery, or rejection of the complaint.</li>
              <li>Closure. The ticket is closed once the parties confirm the resolution, or once Trix Mart has made its recommendation and taken any enforcement action it considers appropriate. involving a delivery provider, may take longer.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">Trix Mart aims to resolve tickets within 7 working days, but complex cases, especially those</p>
          </section>

          <section className="mb-10" id="section-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">8. Seller Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Sellers are responsible for the products and services they sell. A seller must provide an appropriate remedy where a problem results from:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Sending the wrong item;</li>
              <li>Misrepresenting a product or service;</li>
              <li>Failing to disclose a material condition of a product;</li>
              <li>Supplying a defective or damaged product;</li>
              <li>Inadequate packaging;</li>
              <li>Failing to fulfil a paid order; or</li>
              <li>Another issue attributable to the seller. Where a refund is due, the seller must pay it directly to the buyer, by the method agreed between them or the original payment method, within 3 working days of agreeing to the resolution or of Trix Mart’s recommendation. The seller should share proof of the refund in the support ticket. Sellers must respond to support tickets in good faith and within the stated timelines.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-9">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">9. If a Seller Does Not Cooperate</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If a seller refuses to engage, ignores a support ticket, or refuses a resolution that Trix Mart considers fair, Trix Mart may, depending on the seriousness and history of the matter:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Issue a warning;</li>
              <li>Remove or restrict the seller’s listings;</li>
              <li>Display a notice or reduce the seller’s visibility on the platform;</li>
              <li>Suspend or remove the seller’s verification status;</li>
              <li>Suspend or permanently terminate the seller’s account; and</li>
              <li>Provide the buyer with the information needed to pursue the matter with the seller, the Federal Competition and Consumer Protection Commission (FCCPC), the police or the courts, subject to the Trix Mart Privacy Policy and applicable law. These actions do not oblige Trix Mart to pay the buyer.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">10. Change-of-Mind Returns</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A buyer is not automatically entitled to a return or refund because they have changed their mind. Whether a change-of-mind return is available is a matter for the seller and may depend on:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>The seller’s stated return terms;</li>
              <li>The nature of the product;</li>
              <li>Whether the product has been used;</li>
              <li>Whether the product can reasonably be resold; and</li>
              <li>Whether the product was made or customised specifically for the buyer. Buyers should review the seller’s stated terms before completing a purchase.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-11">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">11. Products That May Not Be Eligible for Return</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Unless they are defective, incorrectly supplied or otherwise covered by applicable law, the following may not be eligible for a return or refund:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Custom-made or personalised products;</li>
              <li>Products prepared specifically for a particular buyer;</li>
              <li>Perishable products, including food;</li>
              <li>Digital products or services that have already been provided or accessed;</li>
              <li>Completed services;</li>
              <li>Event tickets or registrations where the applicable terms do not permit refunds;</li>
              <li>Products that have been used, damaged or altered by the buyer; and</li>
              <li>Other products or services where a return would not reasonably be possible. Sellers should clearly communicate these restrictions before or at the point of purchase.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">12. Cancellations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">A buyer may cancel an order without penalty before the seller has accepted or confirmed it. After the seller has accepted the order, cancellation is at the seller’s discretion, particularly where the seller has started preparing, customising or dispatching the order. Where a seller cancels or cannot fulfil an order that has been paid for, the seller must return the buyer’s payment in full.</p>
          </section>

          <section className="mb-10" id="section-13">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">13. Returning a Product</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Where the buyer and seller agree to a return, or Trix Mart recommends one:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>The buyer should return the correct item, in the condition received, with any accessories and packaging;</li>
              <li>The buyer and seller should agree how the item will be returned (collection, drop-off or delivery);</li>
              <li>Return delivery costs are the seller’s responsibility where the problem was caused by the seller, and the buyer’s responsibility in a change-of-mind return unless agreed otherwise; and</li>
              <li>Any refund should be paid once the seller has received and checked the item, unless the parties agree otherwise. During university breaks, the return arrangement may depend on the location of the buyer and seller. Trix Mart may help arrange collection through a third-party delivery provider where available, but the cost of that delivery is not paid by Trix Mart.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-14">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">14. Delivery Problems</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Where Trix Mart coordinates delivery through a third-party delivery provider, a delivery issue may be investigated separately from a product issue.</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Where the seller caused the problem, for example by handing over the wrong order or packaging it inadequately, the seller is responsible for the remedy.</li>
              <li>Where a properly prepared order is lost or damaged while in the custody of a delivery provider, any compensation is subject to that provider’s terms. Trix Mart will share the information it holds to support a claim but does not itself pay compensation.</li>
              <li>Where a delivery fails because of the buyer, for example an incorrect address, an unreachable or unavailable recipient, or refusal of the order, the buyer is not entitled to a refund of the order or delivery fee and may have to pay for a further attempt. See the Trix Mart Shipping &amp; Delivery Policy for more detail.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-15">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">15. Delivery Fees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Where Trix Mart coordinates delivery, it collects the delivery fee from the buyer and pays it to the delivery provider. Trix Mart does not refund delivery fees. Where a delivery problem was caused by the seller, the seller may be asked to cover the buyer’s delivery or re-delivery costs as part of the resolution.</p>
          </section>

          <section className="mb-10" id="section-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">16. Trix Mart Fees and Paid Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Fees paid to Trix Mart, including the seller verification fee and any service or platform fees, and payments for Trix Mart seller subscriptions, workshops, trade fairs, promotional periods, business tools or other paid services, are non-refundable, except where:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Trix Mart cancels the service and does not offer a reasonable alternative;</li>
              <li>The specific terms communicated for that service expressly provide for a refund; or</li>
              <li>A refund is required by applicable law. Trix Mart will not provide a refund because a seller did not reach expected sales, audience, engagement or business targets. Participation in a Trix Mart service does not guarantee any particular business result.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-17">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">17. Card, Bank and Payment Provider Disputes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">This Policy does not prevent a buyer from using any dispute or chargeback process offered by their bank or payment provider. Where such a dispute concerns a seller, Trix Mart may share relevant ticket information with the payment provider, and the outcome is determined by that provider. A seller whose conduct results in disputes, chargebacks or related costs may be required to bear those costs and may face enforcement action.</p>
          </section>

          <section className="mb-10" id="section-18">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">18. Fraudulent or Unauthorised Transactions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If a buyer believes they have been defrauded, charged without authorisation or involved in a fraudulent transaction, they should report it to Trix Mart immediately, and also contact their bank or payment provider and, where appropriate, the police. Trix Mart may investigate the account, transaction and relevant communications, suspend the account involved, and refer the matter to the appropriate authorities.</p>
          </section>

          <section className="mb-10" id="section-19">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">19. Transactions Completed Outside Trix Mart</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart’s complaint and support ticket process applies to transactions made through Trix Mart’s approved marketplace processes. Where a buyer and seller complete payment or the transaction outside Trix Mart, Trix Mart may not be able to investigate the transaction or take action on it.</p>
          </section>

          <section className="mb-10" id="section-20">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">20. Abuse of the Complaint Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Buyers must not misuse Trix Mart’s complaint process. Examples of misuse include:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Making false claims about a product;</li>
              <li>Providing fabricated or edited evidence;</li>
              <li>Returning a different product from the one purchased;</li>
              <li>Repeatedly filing unfounded complaints;</li>
              <li>Damaging a product intentionally and then complaining; or</li>
              <li>Attempting to obtain both the product and a refund through dishonest means. Trix Mart may restrict, suspend or terminate accounts where there is evidence of abuse or fraudulent activity.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-21">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">21. Seller Return Policies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Sellers may set reasonable return conditions for their businesses, provided they are clearly communicated before purchase and do not conflict with this Policy or applicable law. Trix Mart may require sellers to state:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Whether returns are accepted;</li>
              <li>Applicable return conditions and timelines;</li>
              <li>Products that cannot be returned; and</li>
              <li>Any return costs. A seller’s return policy does not allow the seller to avoid responsibility for fraud, misrepresentation, defective products, incorrect orders or obligations imposed by applicable law or Trix Mart policy.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-22">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">22. Your Legal Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Nothing in this Policy excludes or limits any right or remedy a buyer has under the Federal Competition and Consumer Protection Act 2018 or other applicable Nigerian law that cannot lawfully be excluded. Buyers may also raise a complaint with the FCCPC.</p>
          </section>

          <section className="mb-10" id="section-23">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">23. Policy Changes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Trix Mart may update this Policy as its marketplace, payment, delivery and seller systems develop. Significant changes will be communicated through the Trix Mart application, website or community channels. The version in force at the time of a transaction applies to that transaction, where legally permitted.</p>
          </section>

          <section className="mb-10" id="section-24">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">24. Relationship With Other Trix Mart Policies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">This Policy should be read together with the Trix Mart Terms of Service, Acceptable Use Policy, Shipping &amp; Delivery Policy and Privacy Policy.</p>
          </section>

          <section className="mb-10" id="section-25">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">25. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">To report a problem with an order, contact Trix Mart through the official support channel:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-sm text-gray-800">
              <p><strong>Entity:</strong> Trix Mart</p>
              <p><strong>Email:</strong> <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline font-medium">trixmartng@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://trixmart.ng" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] underline font-medium">trixmart.ng</a></p>
              <p><strong>Support/Report Channel:</strong> <a href="tel:+2349030965445" className="text-[#0D6EFD] underline font-medium">+234 903 096 5445</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
