"use client";

import type { NextPage } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { Hourglass, ArrowLeft } from 'lucide-react';

const ComingSoon: NextPage = () => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative min-h-screen z-10">
        <Navbar />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 flex flex-col items-center justify-center">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-8">
                <Hourglass className="h-10 w-10 text-blue-500" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
                Coming Soon
              </h1>
            </div>
            
            <div className="w-full max-w-md">
              
              <div className="mt-8 text-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ComingSoon;