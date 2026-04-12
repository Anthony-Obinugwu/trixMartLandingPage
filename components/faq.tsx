"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How do I shop on Trix Mart?",
        answer: "Trix Mart services are primarily offered through our mobile app. You can browse products on this website, but for the full shopping experience, including secure payments and order tracking, please download the Trix Mart app from the App Store or Google Play Store."
    },
    {
        question: "How do I become a seller?",
        answer: "To become a seller, you must be a student or affiliated with a university. You can join our community by clicking the 'Join Trix Mart Community' button on the homepage and filling out the registration form. Once verified, you'll be able to set up your shop through the mobile app."
    },
    {
        question: "Is delivery available on campus?",
        answer: "Yes! Trix Mart is designed specifically for university environments. Most sellers offer hand-to-hand delivery at safe, designated campus locations or through our verified campus logistics partners."
    },
    {
        question: "Are my payments secure?",
        answer: "Absolutely. All transactions made through the Trix Mart mobile app are processed using secure payment gateways and are protected by our intermediary escrow service, ensuring your money is safe until your order is successfully delivered."
    },
    {
        question: "Can I return a product?",
        answer: "Yes, in accordance with the Federal Competition and Consumer Protection Act (FCCPA), you have the right to return defective or misrepresented goods. Please refer to our Terms and Conditions for the full return and refund policy."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-12 md:py-20 bg-gray-50 font-montserrat px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-[#051650] mb-8 md:mb-12 text-center underline decoration-[#FF8B2A] decoration-4 underline-offset-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-base md:text-lg font-semibold text-[#051650]">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-[#FF8B2A]" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
