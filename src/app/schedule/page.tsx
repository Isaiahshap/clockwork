'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Calendar from '@/components/Calendar';

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - 40vh with large text */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/Clockwork7.webp"
            alt="Clockwork BJJ Schedule"
            fill
            priority
            className="object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CLASS SCHEDULE
            </motion.h1>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-10 md:py-20 px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-12 text-center px-2"
            >
              <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 tracking-wider">FIND YOUR NEXT CLASS</h2>
              <p className="font-montserrat text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
                View our complete class schedule below. We offer classes for all skill levels, from beginners to advanced practitioners.
              </p>
            </motion.div>

            {/* Custom Calendar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Calendar />
            </motion.div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg"
              >
                <h3 className="font-bebas text-2xl mb-4 tracking-wide">FIRST TIME VISITOR?</h3>
                <p className="font-montserrat mb-6">
                  New to Clockwork BJJ? We recommend arriving 15 minutes before your first class to complete registration and get oriented with our facility.
                </p>
                <Link 
                  href="/free-trial"
                  className="font-bebas inline-block border border-white px-6 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
                >
                  START FREE TRIAL
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg"
              >
                <h3 className="font-bebas text-2xl mb-4 tracking-wide">HAVE QUESTIONS?</h3>
                <p className="font-montserrat mb-6">
                  Not sure which class is right for you? Our team is here to help you find the perfect fit for your skill level and goals.
                </p>
                <Link 
                  href="/contact"
                  className="font-bebas inline-block border border-white px-6 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
