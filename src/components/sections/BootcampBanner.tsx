'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BootcampBanner() {
  return (
    <section className="w-full bg-black/40 border-y border-white/10 py-3 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <p className="font-bebas text-sm md:text-base lg:text-lg text-white/90 tracking-wide">
            <span className="inline-block">JANUARY BOOTCAMP IS SOLD OUT!</span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="block md:inline mt-1 md:mt-0">BUT FEBRUARY IS STILL OPEN </span>
            <span className="italic text-white/70">(FOR NOW)</span>
          </p>
          <Link
            href="/bootcamp"
            className="font-bebas inline-block bg-white/10 text-white px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm lg:text-base tracking-wider hover:bg-white/20 transition-all duration-300 border border-white/30 whitespace-nowrap"
          >
            SIGN UP NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

