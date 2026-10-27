"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LegalNav from "@/components/legal-nav";
import Link from "next/link";

export default function ShippingAndDeliveryPolicyPage() {
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
              TRIX MART SHIPPING &amp; DELIVERY POLICY
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
              This Shipping &amp; Delivery Policy sets out the terms, responsibilities, and procedures applicable to the dispatch, delivery, and collection of products purchased on the Trix Mart marketplace.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trix Mart is a university-centred marketplace connecting buyers with verified student businesses and alumni sellers. Products listed on Trix Mart are fulfilled by independent sellers. Trix Mart does not operate its own delivery fleet; deliveries are either fulfilled directly by sellers or coordinated through approved third-party delivery providers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Policy forms part of the Trix Mart{" "}
              <Link href="/terms" className="text-[#0D6EFD] underline font-medium">
                Terms of Service
              </Link>{" "}
              and should be read alongside the{" "}
              <Link href="/refund-policy" className="text-[#0D6EFD] underline font-medium">
                Returns &amp; Refunds Policy
              </Link>.
            </p>
          </section>

          <section className="mb-10" id="section-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              2. Fulfilment and Delivery Methods
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on the campus location, item type, and seller arrangements, orders placed on Trix Mart may be fulfilled via:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-4">
              <li>
                <strong>On-Campus Pickup / Handover:</strong> The buyer and seller agree on a mutually convenient, safe public campus meeting point (such as a university library lobby, student union building, faculty quad, or designated pickup station).
              </li>
              <li>
                <strong>Seller-Direct Delivery:</strong> The seller (or their representative) personally delivers the order to the buyer&rsquo;s specified campus hostel, off-campus residence, or department.
              </li>
              <li>
                <strong>Coordinated Third-Party Logistics:</strong> Where available, Trix Mart facilitates delivery via independent third-party dispatch and courier partners. Trix Mart collects the applicable delivery fee on behalf of the logistics provider and remits it directly to the provider.
              </li>
            </ul>
          </section>

          <section className="mb-10" id="section-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              3. Seller Dispatch Obligations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All Verified Sellers on Trix Mart are obligated to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Confirm and accept orders promptly upon receipt;</li>
              <li>Properly package items to prevent loss, damage, or contamination in transit;</li>
              <li>Hand over or dispatch the exact items ordered within the stated or agreed fulfilment timeframe;</li>
              <li>Provide accurate dispatch confirmation or tracking details where applicable; and</li>
              <li>Ensure food or perishable items are handled in accordance with necessary hygiene and temperature standards.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              4. Buyer Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure smooth order fulfilment, buyers must:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate, complete delivery information (including specific campus hostel, block, room number, or street address);</li>
              <li>Maintain an active, reachable phone number for delivery coordination;</li>
              <li>Be available to receive or collect the order at the agreed time; and</li>
              <li>Promptly inspect the order upon physical handover.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              5. The 24-Hour Inspection &amp; Complaint Window
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buyers must inspect orders immediately upon physical handover or delivery confirmation. Any problem with an order—such as missing items, severe damage in transit, or a wrong product delivered—must be reported within <strong>24 hours</strong>:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Within 24 hours of receiving or collecting the order; or</li>
              <li>Within 24 hours of the expected delivery date, where an order has not arrived.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Complaints should be submitted through the in-app support feature or by email to{" "}
              <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline font-medium">
                trixmartng@gmail.com
              </a>.
            </p>
          </section>

          <section className="mb-10" id="section-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              6. Delivery Issues &amp; Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where issues arise during the delivery process:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-4">
              <li>
                <strong>Seller Error:</strong> If the seller hands over the wrong item, packages goods inadequately, or fails to dispatch the order, the seller is solely responsible for providing an appropriate remedy (such as replacement, re-delivery, or refund).
              </li>
              <li>
                <strong>Courier Loss or Damage:</strong> Where a properly prepared package is damaged or lost while in the custody of a third-party delivery provider, compensation is subject to the delivery provider&rsquo;s operating terms and transit insurance policies. Trix Mart will provide relevant transaction records to support the claim.
              </li>
              <li>
                <strong>Failed Delivery Due to Buyer:</strong> If a delivery attempt fails because of an inaccurate address provided by the buyer, an unreachable recipient, or refusal to accept a properly fulfilled order, the buyer is not entitled to a refund of the product or delivery fee, and must cover any re-delivery charges.
              </li>
            </ul>
          </section>

          <section className="mb-10" id="section-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              7. Delivery Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where Trix Mart coordinates delivery, the applicable fee is collected from the buyer at checkout and paid to the delivery provider. Delivery fees are non-refundable once the courier has accepted and commenced the dispatch journey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Where a delivery failure or delay is directly attributable to seller fault, the seller may be required to cover the buyer&rsquo;s subsequent re-delivery costs as part of the support ticket resolution.
            </p>
          </section>

          <section className="mb-10" id="section-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              8. University Breaks &amp; Cross-Campus Logistics
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During semester breaks, national holidays, or university vacations, physical campus handovers may be limited. Buyers and sellers should confirm their respective locations prior to order confirmation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Where inter-state or long-distance courier delivery is required during holiday periods, delivery schedules and transit times may vary according to commercial carrier timelines.
            </p>
          </section>

          <section className="mb-10" id="section-9">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any questions regarding shipping, logistics coordination, or delivery disputes:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-sm text-gray-800">
              <p><strong>Entity:</strong> Trix Mart Logistics Support</p>
              <p><strong>Email:</strong> <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline font-medium">trixmartng@gmail.com</a></p>
              <p><strong>Support Channel:</strong> <a href="tel:+2349030965445" className="text-[#0D6EFD] underline font-medium">+234 903 096 5445</a></p>
              <p><strong>Website:</strong> <a href="https://trixmart.ng" target="_blank" rel="noopener noreferrer" className="text-[#0D6EFD] underline font-medium">trixmart.ng</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

