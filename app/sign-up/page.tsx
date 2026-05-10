import { SignupForm } from '@/features/auth/presentation/components/signup-form';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link href="/" className="flex justify-center">
          <Image 
            src="/Trix-Mart-Logo-Blue.png" 
            alt="TrixMart Logo" 
            width={150} 
            height={150} 
            className="w-40"
          />
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/50 sm:rounded-2xl sm:px-10 border border-gray-100">
          <Suspense fallback={<div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0D6EFD]"></div></div>}>
            <SignupForm />
          </Suspense>
          
          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-[#0D6EFD] hover:text-[#0b5ed7] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
