'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function GoodbyePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-montserrat">
      {/* Dynamic Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-12"
        >
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Link href="/">
              <Image 
                src="/Trix-Mart-Logo-Blue.png" 
                alt="TrixMart Logo" 
                width={150} 
                height={150} 
                className="w-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </Link>
          </div>

          {/* Icon/Emoji */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-rose-200 blur-2xl opacity-30 rounded-full" />
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-rose-100/50 relative">
                <Heart className="h-12 w-12 text-rose-500 fill-rose-500" />
              </div>
            </div>
          </motion.div>

          {/* Main Text */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
            >
              It's hard to say goodbye.
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto font-medium"
            >
              Your account has been deleted. Thank you for being part of the Trix Mart community. 
              We'll miss you, but the door is always open.
            </motion.p>
          </div>

          {/* Emotional Message */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="h-20 w-20 text-indigo-500" />
            </div>
            <p className="text-gray-600 italic text-lg leading-relaxed relative z-10">
              "Every ending is a new beginning. We hope our paths cross again soon."
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <Link href="/">
              <Button className="h-14 px-10 rounded-2xl bg-gray-900 hover:bg-black text-white font-bold text-lg shadow-xl shadow-gray-200 transition-all hover:scale-105 active:scale-95 group">
                Back to Homepage
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-8 text-gray-400 text-sm">
              Changed your mind? <Link href="/auth" className="text-indigo-600 font-bold hover:underline">Create a new account</Link> anytime.
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer Branding */}
      <footer className="absolute bottom-0 w-full py-8 text-center border-t border-gray-50">
        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">
          © {new Date().getFullYear()} Trix Mart Global
        </p>
      </footer>
    </div>
  );
}
