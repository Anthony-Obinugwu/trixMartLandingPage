import { DeleteAccountForm } from '@/features/auth/presentation/components/delete-account-form';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-montserrat">
      {/* Header */}
      <header className="px-6 py-6 border-b border-gray-50 flex items-center justify-between">
        <Link href="/profile">
          <Button variant="ghost" size="sm" className="rounded-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
        </Link>
        <Link href="/">
          <Image 
            src="/Trix-Mart-Logo-Blue.png" 
            alt="TrixMart Logo" 
            width={120} 
            height={120} 
            className="w-28"
          />
        </Link>
        <div className="w-24" /> {/* Spacer */}
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4 md:py-20">
        <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">We're sorry to see you go</h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Please complete the steps below to permanently delete your Trix Mart account.
            </p>
          </div>
          
          <DeleteAccountForm />
          
          <div className="mt-12 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Trix Mart. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
}
