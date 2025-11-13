'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AuthPage = () => {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState<'buyer' | 'seller' | null>(null)

  const handleContinue = () => {
    if (selectedType) {
      // Store user type in localStorage for demo purposes
      localStorage.setItem('userType', selectedType)
      // Navigate to university selection
      router.push('/select-university')
    }
  }

  return (
    <div className='font-montserrat min-h-screen bg-white'>
      {/* Header */}
      <header className='relative flex justify-center px-4 pt-4 mb-7'>
        <Link href="/">
          <div className='absolute left-4 flex justify-center items-center w-9 border border-gray-300 rounded-full aspect-square hover:bg-gray-100 transition-colors'>
            <Image src='/page-vectors/back-arrow.svg' width={20} height={20} alt='Back' />
          </div>
        </Link>
        <Link href="/">
          <Image src='/Trix-Mart-Logo-Blue.png' className='w-32' width={700} height={700} alt='TrixMart Logo' />
        </Link>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 py-8'>
        {/* Title Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h1 className='font-bold text-3xl md:text-4xl mb-4'>Welcome to Trix Mart</h1>
          <p className='text-lg md:text-xl text-gray-600'>Choose how you want to join our community</p>
        </motion.section>

        {/* User Type Selection Cards */}
        <section className='grid md:grid-cols-2 gap-6 mb-8'>
          {/* Buyer Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelectedType('buyer')}
            className={`relative cursor-pointer rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
              selectedType === 'buyer' 
                ? 'border-[#0D6EFD] bg-blue-50 shadow-lg' 
                : 'border-gray-200 hover:border-[#0D6EFD]'
            }`}
          >
            {/* Selection Indicator */}
            {selectedType === 'buyer' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute top-4 right-4 w-8 h-8 bg-[#0D6EFD] rounded-full flex items-center justify-center'
              >
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </motion.div>
            )}

            {/* Icon */}
            <div className='flex justify-center mb-6'>
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                selectedType === 'buyer' ? 'bg-[#0D6EFD]' : 'bg-blue-100'
              }`}>
                <svg className={`w-12 h-12 ${selectedType === 'buyer' ? 'text-white' : 'text-[#0D6EFD]'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className='text-center'>
              <h2 className='font-bold text-2xl mb-3 text-[#0D6EFD]'>I'm a Buyer</h2>
              <p className='text-gray-600 mb-4'>
                Shop from amazing student businesses on campus
              </p>
              <ul className='text-left space-y-2 text-sm text-gray-600'>
                <li className='flex items-start'>
                  <span className='text-[#0D6EFD] mr-2'>✓</span>
                  <span>Browse products from student sellers</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#0D6EFD] mr-2'>✓</span>
                  <span>Get affordable deals on campus</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#0D6EFD] mr-2'>✓</span>
                  <span>Support student entrepreneurs</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Seller Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelectedType('seller')}
            className={`relative cursor-pointer rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
              selectedType === 'seller' 
                ? 'border-[#FF7A00] bg-orange-50 shadow-lg' 
                : 'border-gray-200 hover:border-[#FF7A00]'
            }`}
          >
            {/* Selection Indicator */}
            {selectedType === 'seller' && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute top-4 right-4 w-8 h-8 bg-[#FF7A00] rounded-full flex items-center justify-center'
              >
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </motion.div>
            )}

            {/* Icon */}
            <div className='flex justify-center mb-6'>
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                selectedType === 'seller' ? 'bg-[#FF7A00]' : 'bg-orange-100'
              }`}>
                <svg className={`w-12 h-12 ${selectedType === 'seller' ? 'text-white' : 'text-[#FF7A00]'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className='text-center'>
              <h2 className='font-bold text-2xl mb-3 text-[#FF7A00]'>I'm a Seller</h2>
              <p className='text-gray-600 mb-4'>
                Grow your business and reach students on campus
              </p>
              <ul className='text-left space-y-2 text-sm text-gray-600'>
                <li className='flex items-start'>
                  <span className='text-[#FF7A00] mr-2'>✓</span>
                  <span>List your products and services</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#FF7A00] mr-2'>✓</span>
                  <span>Connect with campus buyers</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#FF7A00] mr-2'>✓</span>
                  <span>Build your student business</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex justify-center'
        >
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className={`px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              selectedType
                ? selectedType === 'buyer'
                  ? 'bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white shadow-lg hover:shadow-xl'
                  : 'bg-[#FF7A00] hover:bg-[#e67000] text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue as {selectedType ? (selectedType === 'buyer' ? 'Buyer' : 'Seller') : 'User'}
          </button>
        </motion.div>

        
      </main>
    </div>
  )
}

export default AuthPage

