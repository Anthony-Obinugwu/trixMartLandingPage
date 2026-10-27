"use client";
import Header from "@/components/header";
import { submitFormData } from "@/features/waitlist/domain/actions/submit_form";
import React, { useState } from "react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    university: "",
    userType: "",
  });

  // UI States for feedback
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Capture the form data to send to your server action
    const form = new FormData(event.currentTarget);

    try {
      const response = await submitFormData(form);

      if (response.success) {
        setIsSuccess(true);
        // Optional: clear the form
        setFormData({
          fullName: "",
          email: "",
          whatsapp: "",
          university: "",
          userType: "",
        });
      } else {
        setErrorMessage(
          response.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto p-8 mt-10 bg-white rounded-xl shadow-lg font-sans">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Find It. Discover It. Shop It.
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Student and young businesses are building amazing things. TrixMart
            makes it easier to discover them — on campus and beyond.
          </p>
          <p className="text-gray-800 font-bold text-lg">
            Join the waitlist for the TrixMart app.
          </p>
        </div>

        {/* Success Message */}
        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">You're on the list!</h2>
            <p>
              Thank you for joining. We will notify you as soon as we launch.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-4 text-sm font-semibold text-green-700 underline"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {errorMessage}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="+234..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            {/* University Dropdown */}
            <div>
              <label
                htmlFor="university"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                University
              </label>
              <select
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              >
                <option value="" disabled>
                  Select your university
                </option>
                <option value="Nile University">Nile University</option>
                <option value="Baze University">Baze University</option>
                <option value="University of Abuja">University of Abuja</option>
                <option value="Veritas University">Veritas University</option>
                <option value="Other University">Other University</option>
              </select>
            </div>

            {/* User Type Dropdown */}
            <div>
              <label
                htmlFor="userType"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                I am a:
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Student Buyer">Student Buyer</option>
                <option value="Student Business Owner">
                  Student Business Owner
                </option>
                <option value="All of the above">All of the above</option>
                <option value="Outside Buyer">Outside Buyer</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-6 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Join the Waitlist"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default WaitlistForm;
