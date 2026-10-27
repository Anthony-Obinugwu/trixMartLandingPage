"use client";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LegalNav from "@/components/legal-nav";
import Link from "next/link";

export default function AcceptableUsePolicyPage() {
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
              TRIX MART ACCEPTABLE USE POLICY
            </h1>
            <p className="text-gray-600 font-medium text-sm">
              Version 1.0 · Effective date: 26 October 2026
            </p>
          </div>

          <section className="mb-10" id="section-1">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              1. Purpose and Scope
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Acceptable Use Policy (&ldquo;Policy&rdquo;) outlines the standards of conduct, listing rules, and safety guidelines required of all users—including buyers, Student Sellers, Alumni Businesses, and visitors—of the Trix Mart application, website, and related services (the &ldquo;Services&rdquo;).
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Policy forms an integral part of the Trix Mart{" "}
              <Link href="/terms" className="text-[#0D6EFD] underline font-medium">
                Terms of Service
              </Link>. By accessing or using Trix Mart, you agree to comply with this Policy at all times.
            </p>
          </section>

          <section className="mb-10" id="section-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              2. User Eligibility &amp; Seller Categories
            </h2>
            <h3 className="text-lg font-semibold text-[#051650] mb-2">
              2.1 Student Sellers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Student Seller</strong> is an active, currently enrolled undergraduate or postgraduate student at a recognized tertiary institution who has undergone Trix Mart&rsquo;s Seller Verification process. Student Sellers must provide authentic student identification and required verification details.
            </p>

            <h3 className="text-lg font-semibold text-[#051650] mb-2">
              2.2 Alumni Businesses
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              An <strong>Alumni Business</strong> is a registered enterprise operated by verified graduates or alumni of a recognized higher education institution who wish to offer goods or professional services to university communities.
            </p>

            <h3 className="text-lg font-semibold text-[#051650] mb-2">
              2.3 Verification &amp; Seller IDs
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All sellers must pass verification checks prior to displaying a Verified Seller badge or Seller ID. Attempting to spoof identity, use falsified academic credentials, or misrepresent university affiliation will result in immediate disqualification and account termination.
            </p>
          </section>

          <section className="mb-10" id="section-3">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              3. Prohibited Products and Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users may not list, advertise, offer, or distribute any of the following items on Trix Mart:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Academic Dishonesty Materials:</strong> Pre-written essays, purchased term papers, examination leakages, fake certificates, or proxy-examination services;
              </li>
              <li>
                <strong>Illegal Drugs and Substances:</strong> Narcotics, controlled prescription medicines without licensed authorization, and related paraphernalia;
              </li>
              <li>
                <strong>Weapons &amp; Dangerous Items:</strong> Firearms, ammunition, knives, explosives, or hazardous chemicals;
              </li>
              <li>
                <strong>Counterfeit &amp; Stolen Goods:</strong> Replicas, pirated media, unauthorized intellectual property reproductions, or stolen electronic devices;
              </li>
              <li>
                <strong>Explicit Content:</strong> Pornography, adult services, or sexually explicit merchandise;
              </li>
              <li>
                <strong>Financial &amp; Regulated Instruments:</strong> Unregistered multi-level marketing (MLM) schemes, pyramid schemes, or unauthorized foreign exchange services; and
              </li>
              <li>
                <strong>Harmful or Defective Products:</strong> Expired food, unhygienic cosmetics, or recalled electronics.
              </li>
            </ul>
          </section>

          <section className="mb-10" id="section-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              4. Prohibited Platform Activities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to engage in any of the following activities:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Circumventing Payment Systems:</strong> Directing users off-platform or requesting direct bank transfers outside approved payment workflows to evade fees, commission, or buyer protections;
              </li>
              <li>
                <strong>Fraud &amp; Impersonation:</strong> Misrepresenting your identity, pretending to represent a student union or university faculty, or claiming false affiliations with Trix Mart staff;
              </li>
              <li>
                <strong>Scraping &amp; Platform Disruption:</strong> Using automated scrapers, bots, or scripts to harvest user data, overwhelm server infrastructure, or inject malware;
              </li>
              <li>
                <strong>Review Manipulation:</strong> Generating fake reviews, soliciting shill feedback, or threatening negative ratings to extort refunds or discounts; and
              </li>
              <li>
                <strong>Phishing &amp; Security Violations:</strong> Attempting to access other users&rsquo; login credentials, OTP codes, or personal records.
              </li>
            </ul>
          </section>

          <section className="mb-10" id="section-5">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              5. Community Conduct and Mutual Respect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trix Mart is dedicated to fostering an empowering, respectful community for campus entrepreneurs and students. Users must observe the following standards:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Treat all buyers, sellers, couriers, and staff with courtesy and professionalism;</li>
              <li>Strict zero tolerance for hate speech, harassment, tribalism, religious intolerance, sexism, cyberbullying, or threats of violence; and</li>
              <li>Refrain from spamming comment sections, community groups, or direct messaging channels with unsolicited promotional materials.</li>
            </ul>
          </section>

          <section className="mb-10" id="section-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              6. Enforcement and Penalties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trix Mart reserves the right to investigate any reported violation of this Policy. Depending on the gravity and frequency of the violation, we may take appropriate enforcement actions, including:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
              <li>Issuing a formal warning or compliance directive;</li>
              <li>Immediate takedown or de-listing of non-compliant product listings;</li>
              <li>Revocation or suspension of Verified Seller status and Seller ID;</li>
              <li>Temporary suspension or permanent ban of the user&rsquo;s account across all Trix Mart platforms; and</li>
              <li>Referral of unlawful conduct to university disciplinary boards, law enforcement agencies, or the Federal Competition and Consumer Protection Commission (FCCPC).</li>
            </ul>
          </section>

          <section className="mb-10" id="section-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#051650] mb-4">
              7. Reporting Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you identify a listing, user behavior, or communication that breaches this Acceptable Use Policy, please report it immediately:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-sm text-gray-800">
              <p><strong>Support &amp; Reporting Channel:</strong> <a href="tel:+2349030965445" className="text-[#0D6EFD] underline font-medium">+234 903 096 5445</a></p>
              <p><strong>Email:</strong> <a href="mailto:trixmartng@gmail.com" className="text-[#0D6EFD] underline font-medium">trixmartng@gmail.com</a></p>
              <p><strong>In-App Support:</strong> Use the &ldquo;Report&rdquo; button available on any seller profile or product listing.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}

