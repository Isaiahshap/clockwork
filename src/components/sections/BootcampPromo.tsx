'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BootcampPromo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/hero-bg3.webp"
                alt="BJJ Bootcamp"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-black/70 px-6 py-3">
                  <h3 className="font-bebas text-3xl text-white tracking-wider">BJJ BOOTCAMP</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-red-500/20 border border-red-500/50 px-3 py-1 font-bebas text-sm tracking-wider text-red-400">
                  ⚠️ JANUARY SOLD OUT IN WEEKS
                </span>
              </div>
              <h3 className="font-bebas text-2xl mb-4 tracking-wide">FEBRUARY BOOTCAMP NOW OPEN</h3>
              <p className="font-montserrat mb-6">
                Our January bootcamp sold out within a few weeks! Don&apos;t miss your chance to join our February 4-week Beginners Bootcamp:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-montserrat">8 small-group classes (Tuesdays & Thursdays)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-montserrat">A brand-new uniform valued at $150</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-montserrat">Step-by-step introduction to BJJ fundamentals</span>
                </li>
              </ul>
              <div className="bg-zinc-800/50 p-4 border border-zinc-700 mb-6">
                <p className="font-montserrat text-center">
                  <span className="font-bebas text-xl tracking-wide">ONLY $310</span> — everything included
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/bootcamp"
                  className="font-bebas inline-block bg-white text-black px-8 py-4 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200"
                >
                  SIGN UP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

