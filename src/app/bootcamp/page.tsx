'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BootcampPage() {
  const [isSchedulerLoaded, setIsSchedulerLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsSchedulerLoaded(true);
  };
  
  // Simple useEffect for iframe loading
  useEffect(() => {
    // No height adjustment needed as we want the iframe to be scrollable
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - 40vh with large text */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/hero-bg2.webp"
            alt="Clockwork BJJ Bootcamp"
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
              BJJ BOOTCAMP
            </motion.h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">4-WEEK BEGINNERS COURSE</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                If you&apos;ve ever thought about trying Brazilian Jiu Jitsu, here&apos;s your chance. 
                We&apos;re starting a 4-week Beginners Course at Clockwork Jiu Jitsu — designed specifically for people who are brand new to BJJ.
              </p>
            </motion.div>

            {/* Bootcamp Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zinc-900 border border-zinc-800 p-8"
              >
                <h3 className="font-bebas text-3xl mb-6 tracking-wide text-center">WHAT&apos;S INCLUDED</h3>
                
                {/* Feature items with enhanced styling */}
                <div className="grid grid-cols-1 gap-6 mb-8">
                  {/* Item 1 */}
                  <div className="bg-black/30 p-5 border border-zinc-700">
                    <div className="flex items-start">
                      <div className="bg-green-500/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <span className="text-green-500 text-xl">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bebas text-xl mb-2">8 SMALL-GROUP CLASSES</h4>
                        <p className="font-montserrat text-white/80">
                          Attend classes twice a week (Tuesdays & Thursdays at 7:30 PM) for a comprehensive introduction to BJJ.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="bg-black/30 p-5 border border-zinc-700">
                    <div className="flex items-start">
                      <div className="bg-green-500/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <span className="text-green-500 text-xl">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bebas text-xl mb-2">FREE BJJ GI UNIFORM</h4>
                        <p className="font-montserrat text-white/80">
                          Receive a brand-new uniform valued at $150 — yours to keep and use throughout your BJJ journey.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="bg-black/30 p-5 border border-zinc-700">
                    <div className="flex items-start">
                      <div className="bg-green-500/20 p-3 rounded-full mr-4 flex-shrink-0">
                        <span className="text-green-500 text-xl">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bebas text-xl mb-2">STRUCTURED CURRICULUM</h4>
                        <p className="font-montserrat text-white/80">
                          Learn through our step-by-step introduction to BJJ fundamentals, designed specifically for beginners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                  
                
                {/* Cost and additional info */}
                <div className="bg-zinc-800/50 p-6 border border-zinc-700 mb-8">
                  <div className="text-center mb-4">
                    <h4 className="font-bebas text-2xl mb-2">ONLY</h4>
                    <p className="font-montserrat font-bold text-2xl text-white">$310 — everything included.</p>
                  </div>
                  <p className="font-montserrat text-white/80 text-center">
                    This is the fastest, most beginner-friendly way to get started — and we keep the group small so you&apos;ll get plenty of personal attention.
                  </p>
                </div>
                
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="font-bebas text-4xl mb-4 tracking-wide">WHAT PEOPLE ARE SAYING</h3>
                <br />
                
                {/* Review 1 */}
                <div className="bg-zinc-800/50 p-6 border border-zinc-700">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-montserrat font-bold">Alexis Rose</h4>
                    <div className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</div>
                  </div>
                  <p className="font-montserrat text-white/80 italic">
                    &quot;100/10 Highly recommended the beginner bootcamp! Prior to clockwork I had no bjj experience, the bootcamp was the perfect way to get a feel for bjj and I had so much fun. Everyone is respectful and beyond knowledgeable. Will definitely be coming back! Shoutout to Ray and Josh for being amazing (very patient) instructors.&quot;
                  </p>
                </div>
                
                {/* Review 2 */}
                <div className="bg-zinc-800/50 p-6 border border-zinc-700">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-montserrat font-bold">Rebekah Davis</h4>
                    <div className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</div>
                  </div>
                  <p className="font-montserrat text-white/80 italic">
                    &quot;Didn&apos;t have any BJJ experience and regular classes felt a bit intimidating, so when I saw they had a bootcamp I signed up ASAP. So glad I did! What a great introduction and was so nice to have a supportive, systematic approach. The instructors are super friendly and smart, the space is great, and everyone is very welcoming. An excellent place to start your BJJ journey!&quot;
                  </p>
                </div>
                
                {/* Review 3 */}
                <div className="bg-zinc-800/50 p-6 border border-zinc-700">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-montserrat font-bold">Eric Wolfe</h4>
                    <div className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</div>
                  </div>
                  <p className="font-montserrat text-white/80 italic">
                    &quot;Clockwork is a fun place! The beginner class gives a comprehensive introduction to the foundations of BJJ in a lighthearted and learning focused way. The instructors, Ray and Esther (and one of the Anthonys), were very knowledgable, always available to answer questions, and just fun to be around. Would recommend as a place to start your BJJ journey.&quot;
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Scheduler Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider text-center">RESERVE YOUR SPOT NOW</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto mb-12 text-center">
                Spots go fast for this one, so if you&apos;re thinking about it, grab your spot now using the scheduler below.
              </p>
              
              {/* Scheduler Container */}
              <div>
                {/* Open in new tab button */}
                <div className="flex justify-center mb-4">
                  <a 
                    href="https://app.acuityscheduling.com/schedule/38266b1c/?calendarIds=8046892" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bebas bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 flex items-center transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    OPEN FORM IN NEW TAB
                  </a>
                </div>
                
                {/* Acuity Scheduling Iframe */}
                <div className="w-full border border-zinc-800">
                  {/* Loading Indicator */}
                  {!isSchedulerLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                        <p className="font-montserrat text-white/80">Loading scheduler...</p>
                      </div>
                    </div>
                  )}
                  
                  <iframe 
                    ref={iframeRef}
                    src="https://app.acuityscheduling.com/schedule/38266b1c/?calendarIds=8046892"
                    width="100%" 
                    height="700"
                    style={{ 
                      border: 0,
                      background: 'transparent'
                    }} 
                    onLoad={handleIframeLoad}
                    title="Clockwork BJJ Bootcamp Scheduler"
                    className="bg-transparent"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-20"
            >
              <h3 className="font-bebas text-2xl mb-4 tracking-wide">SEE YOU ON THE MATS</h3>
              <p className="font-montserrat text-lg mb-8">
                Questions? Contact us and we&apos;ll be happy to help.
              </p>
              <Link 
                href="/contact"
                className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
              >
                CONTACT US
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
