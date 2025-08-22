'use client';

import { useState, useRef } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SchedulePage() {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsCalendarLoaded(true);
  };

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
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">FIND YOUR NEXT CLASS</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                View our complete class schedule below. We offer classes for all skill levels, from beginners to advanced practitioners. 
                Click on any class for more details or to reserve your spot.
              </p>
            </motion.div>

            {/* Calendar Container with Custom Styling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Loading Indicator */}
              {!isCalendarLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                    <p className="font-montserrat text-white/80">Loading calendar...</p>
                  </div>
                </div>
              )}

              {/* Calendar Container */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-xl shadow-black/30">
                {/* Calendar Header */}
                <div className="bg-black p-6 border-b border-zinc-800">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <h3 className="font-bebas text-2xl tracking-wide mb-4 md:mb-0">CLOCKWORK BJJ CLASS SCHEDULE</h3>
                    <Link 
                      href="/free-trial"
                      className="font-bebas inline-block bg-white text-black px-6 py-2 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200"
                    >
                      START FREE TRIAL
                    </Link>
                  </div>
                </div>

                {/* ZenPlanner Calendar Iframe */}
                <div className="w-full">
                  <iframe 
                    ref={iframeRef}
                    src="https://ClockworkBJJ.zenplanner.com/zenplanner/portal/prospect.cfm?programId=3EEAAD9D-76A1-4A1D-8C07-531F7B5CE891&frame=true"
                    width="100%" 
                    height="800"
                    style={{ 
                      border: 0,
                      background: '#111'
                    }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    onLoad={handleIframeLoad}
                    title="Clockwork BJJ Class Schedule"
                    className="bg-black"
                  ></iframe>
                </div>
                
                {/* Calendar Footer */}
                <div className="bg-black p-6 border-t border-zinc-800">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="font-montserrat text-sm text-white/70 mb-4 md:mb-0">
                      Schedule subject to change on holidays. Please check our social media for updates.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://instagram.com/clockworkbjj" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 rounded-full"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://facebook.com/clockworkbjj" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 rounded-full"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                viewport={{ once: true }}
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
