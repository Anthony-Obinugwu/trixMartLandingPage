"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Header />
      <main className="container mx-auto px-4 py-16 font-montserrat">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#051650] mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-6 font-medium">Last Updated: April 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#051650] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Trix Mart. We are committed to protecting your personal information and your right to privacy. 
              If you have any questions or concerns about our policy, or our practices with regards to your personal 
              information, please contact us at trixmartng@gmail.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#051650] mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when registering at Trix Mart, 
              expressing an interest in obtaining information about us or our products and services, when participating 
              in activities on the website or otherwise contacting us.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Name and Contact Data (email address, phone number, etc.)</li>
              <li>Credentials (passwords and similar security information)</li>
              <li>Payment Data (processed by our payment providers)</li>
              <li>Student Verification Data (to ensure community safety)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#051650] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To post testimonials with your consent.</li>
              <li>To deliver targeted advertising to you.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#051650] mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We only share information with your consent, to comply with laws, to provide you with services, 
              to protect your rights, or to fulfill business obligations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#051650] mb-4">5. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or comments about this policy, you may email us at trixmartng@gmail.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
