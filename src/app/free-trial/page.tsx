'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FreeTrialPage() {
  const [activeTab, setActiveTab] = useState<'adults' | 'kids'>('adults');
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsFormLoaded(true);
  };
  
  // Reset form loaded state when tab changes
  useEffect(() => {
    setIsFormLoaded(false);
  }, [activeTab]);
  
  // Handler to adjust iframe height based on content
  useEffect(() => {
    // Function to adjust iframe height
    const adjustIframeHeight = () => {
      try {
        const iframe = iframeRef.current;
        if (iframe && iframe.contentWindow && iframe.contentDocument) {
          // Wait for iframe content to load fully
          setTimeout(() => {
            try {
              // Get the height of the form content
              const formHeight = iframe.contentDocument?.body?.scrollHeight || 900;
              // Add some buffer to ensure everything is visible
              iframe.style.height = `${formHeight + 50}px`;
            } catch {
              console.log("Could not adjust iframe height");
            }
          }, 1000);
        }
      } catch {
        console.log("Error accessing iframe content");
      }
    };
    
    // Call the function when the iframe loads
    if (isFormLoaded) {
      adjustIframeHeight();
    }
    
    // Add event listener for iframe load
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', adjustIframeHeight);
    }
    
    // Clean up event listener when component unmounts
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', adjustIframeHeight);
      }
    };
  }, [isFormLoaded]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - 40vh with large text */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/Clockwork10.webp"
            alt="Clockwork BJJ Free Trial"
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
              FREE TRIAL SIGN UP
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">START YOUR BJJ JOURNEY</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                Whether you&apos;re completely new to martial arts or looking for a new gym, we invite you to 
                experience Clockwork BJJ with a complimentary class. Select the appropriate program below to get started.
              </p>
            </motion.div>

            {/* Program Selection Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex justify-center mb-8">
                <div className="inline-flex border border-zinc-700 overflow-hidden">
                  <button
                    onClick={() => setActiveTab('adults')}
                    className={`px-8 py-4 font-bebas text-xl tracking-wider transition-colors duration-200 ${
                      activeTab === 'adults'
                        ? 'bg-white text-black'
                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    ADULTS
                  </button>
                  <button
                    onClick={() => setActiveTab('kids')}
                    className={`px-8 py-4 font-bebas text-xl tracking-wider transition-colors duration-200 ${
                      activeTab === 'kids'
                        ? 'bg-white text-black'
                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    KIDS
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-zinc-900 border border-zinc-800 p-8">
                {/* Adults Tab Content */}
                {activeTab === 'adults' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bebas text-2xl mb-4 tracking-wide">ADULT BRAZILIAN JIU-JITSU PROGRAMS</h3>
                        <p className="font-montserrat mb-4">
                          Whether you typed &quot;BJJ classes near me&quot; at 2 a.m. or you&apos;re relocating to NYC and need a new gym, 
                          we have a program for every level.
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start">
                            <div className="bg-white/10 p-2 mr-3 flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bebas text-xl">WHITE BELT FUNDAMENTALS</h4>
                              <p className="font-montserrat text-white/80 text-sm">
                                Build core movements, self-defense basics and conditioning in a supportive setting
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-white/10 p-2 mr-3 flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bebas text-xl">MIXED & ADVANCED</h4>
                              <p className="font-montserrat text-white/80 text-sm">
                                Expand your game with live positional sparring, competition rounds and deep dives into guard, passing and submissions
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="aspect-video relative overflow-hidden">
                        <Image 
                          src="/images/adultclasses.webp"
                          alt="Clockwork BJJ Adult Classes"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Form Container */}
                    <div className="mt-8">
                      <h3 className="font-bebas text-2xl mb-6 tracking-wide text-center">SIGN UP FOR YOUR FREE TRIAL CLASS</h3>
                      
                      {/* ZenPlanner Form Iframe */}
                      <div className="w-full relative">
                        {/* Loading Indicator */}
                        {!isFormLoaded && (
                          <div className="h-[900px] flex items-center justify-center bg-black/50">
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 border-4 border-white/20 border-t-white animate-spin mb-4"></div>
                              <p className="font-montserrat text-white/80">Loading form...</p>
                            </div>
                          </div>
                        )}
                        
                        <iframe 
                          ref={iframeRef}
                          src="https://eng.zenplanner.com/widget/form/zZQW4SE3tmnobQ3E92bK"
                          width="100%" 
                          height="900"
                          style={{ 
                            border: 0,
                            background: 'transparent',
                            minHeight: '900px'
                          }} 
                          onLoad={handleIframeLoad}
                          title="Clockwork BJJ Adult Sign Up Form"
                          className={`bg-transparent ${!isFormLoaded ? 'hidden' : 'block'}`}
                          frameBorder="0"
                          scrolling="no"
                        ></iframe>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Kids Tab Content */}
                {activeTab === 'kids' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bebas text-2xl mb-4 tracking-wide">KIDS JIU-JITSU PROGRAMS</h3>
                        <p className="font-montserrat mb-4">
                          The Jiu Jitsu Children&apos;s program at Clockwork Jiu Jitsu focuses on teaching Self Defense, 
                          Physical Education, and Personal Development.
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start">
                            <div className="bg-white/10 p-2 mr-3 flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bebas text-xl">KIDS 4-6 PROGRAM</h4>
                              <p className="font-montserrat text-white/80 text-sm">
                                Our youngest age group focuses on basic movements and core values of Jiu Jitsu through fun exercises and games
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-white/10 p-2 mr-3 flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bebas text-xl">KIDS 6-9 & 9-13 PROGRAMS</h4>
                              <p className="font-montserrat text-white/80 text-sm">
                                Age-appropriate techniques, sparring skills, and personal development for older children
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="aspect-video relative overflow-hidden">
                        <Image 
                          src="/images/kidsclasses.webp"
                          alt="Clockwork BJJ Kids Classes"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Form Container */}
                    <div className="mt-8">
                      <h3 className="font-bebas text-2xl mb-6 tracking-wide text-center">SIGN UP FOR YOUR CHILD&apos;S FREE TRIAL CLASS</h3>
                      
                      {/* ZenPlanner Form Iframe */}
                      <div className="w-full relative">
                        {/* Loading Indicator */}
                        {!isFormLoaded && (
                          <div className="h-[900px] flex items-center justify-center bg-black/50">
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 border-4 border-white/20 border-t-white animate-spin mb-4"></div>
                              <p className="font-montserrat text-white/80">Loading form...</p>
                            </div>
                          </div>
                        )}
                        
                        <iframe 
                          ref={iframeRef}
                          src="https://eng.zenplanner.com/widget/form/NJB5bxSCFtwtBkC9idKb"
                          width="100%" 
                          height="900"
                          style={{ 
                            border: 0,
                            background: 'transparent',
                            minHeight: '900px'
                          }} 
                          onLoad={handleIframeLoad}
                          title="Clockwork BJJ Kids Sign Up Form"
                          className={`bg-transparent ${!isFormLoaded ? 'hidden' : 'block'}`}
                          frameBorder="0"
                          scrolling="no"
                        ></iframe>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Bootcamp Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
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
                    <h3 className="font-bebas text-2xl mb-4 tracking-wide">BEGINNERS BOOTCAMP</h3>
                    <p className="font-montserrat mb-6">
                      Looking for a structured introduction to BJJ? Our 4-week Beginners Bootcamp includes:
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
                    <div className="flex justify-center md:justify-start">
                      <Link
                        href="/bootcamp"
                        className="font-bebas inline-block bg-white text-black px-6 py-3 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200"
                      >
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                Complete the form above to book your free trial class. 
                We&apos;ll contact you to confirm your spot and answer any questions you may have.
              </p>
              <p className="font-montserrat text-white/70 mt-4">
                If you have any issues with the form, please contact us directly at <a href="mailto:info@clockworkbjj.com" className="underline">info@clockworkbjj.com</a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
