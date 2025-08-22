'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AdultClassesPage() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsFormLoaded(true);
  };
  
  // Handler to adjust iframe height based on content
  useEffect(() => {
    // Function to adjust iframe height
    const adjustIframeHeight = () => {
      try {
        const iframe = iframeRef.current;
        if (iframe && iframe.contentWindow && iframe.contentDocument) {
          // Set up a resize observer to continuously monitor the iframe content size
          const resizeObserver = new ResizeObserver(() => {
            try {
              // Get the full height of the form content
              const formHeight = iframe.contentDocument?.body?.scrollHeight || 1000;
              // Add minimal buffer to ensure everything is visible
              iframe.style.height = `${formHeight + 20}px`;
            } catch {
              console.log("Could not adjust iframe height");
            }
          });
          
          // Observe the iframe document body
          if (iframe.contentDocument?.body) {
            resizeObserver.observe(iframe.contentDocument.body);
          }
          
          // Also set an initial height and check periodically
          const initialCheck = () => {
            try {
              const formHeight = iframe.contentDocument?.body?.scrollHeight || 1000;
              iframe.style.height = `${formHeight + 20}px`;
            } catch {
              console.log("Could not set initial iframe height");
            }
          };
          
          // Initial check after a delay to ensure content is loaded
          setTimeout(initialCheck, 1000);
          
          // Set up periodic checks for the first minute to handle dynamic content loading
          const intervalId = setInterval(initialCheck, 3000);
          setTimeout(() => clearInterval(intervalId), 60000);
          
          // Return cleanup function
          return () => {
            resizeObserver.disconnect();
            clearInterval(intervalId);
          };
        }
      } catch (error) {
        console.log("Error setting up iframe height adjustment:", error);
      }
    };
    
    // Call the function when the iframe loads
    if (isFormLoaded) {
      const cleanup = adjustIframeHeight();
      return cleanup;
    }
    
    // Add event listener for iframe load
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }
    
    // Clean up event listener when component unmounts
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
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
            src="/images/adultclasses.webp"
            alt="Clockwork BJJ Adult Classes"
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
              ADULT CLASSES
            </motion.h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">ADULT BRAZILIAN JIU-JITSU PROGRAMS</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                Whether you typed &quot;BJJ classes near me&quot; at 2 a.m. or you&apos;re relocating to NYC and need a new gym, we have a program for every level.
              </p>
            </motion.div>

            {/* Program Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {/* White Belt Fundamentals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-zinc-900 border border-zinc-800 p-8"
              >
                <h3 className="font-bebas text-2xl mb-4 tracking-wide">WHITE BELT FUNDAMENTALS</h3>
                <p className="font-montserrat mb-6 text-white/80">
                  Build core movements, self-defense basics and conditioning in a supportive setting. Our fundamentals program is designed to help beginners develop a solid foundation in Brazilian Jiu-Jitsu.
                </p>
                <div className="aspect-video w-full overflow-hidden relative shadow-xl shadow-black/30 border border-white/10 mb-6">
                  <Image 
                    src="/images/hero-bg2.webp"
                    alt="Clockwork BJJ Fundamentals"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              
              {/* Mixed & Advanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-zinc-900 border border-zinc-800 p-8"
              >
                <h3 className="font-bebas text-2xl mb-4 tracking-wide">MIXED & ADVANCED</h3>
                <p className="font-montserrat mb-6 text-white/80">
                  Expand your game with live positional sparring, competition rounds and deep dives into guard, passing and submissions. These classes are designed for more experienced practitioners looking to refine their skills.
                </p>
                <div className="aspect-video w-full overflow-hidden relative shadow-xl shadow-black/30 border border-white/10 mb-6">
                  <Image 
                    src="/images/hero-bg3.webp"
                    alt="Clockwork BJJ Advanced Classes"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>


            {/* Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider text-center">START YOUR BJJ JOURNEY</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto mb-12 text-center">
                Fill out the form below to sign up for a free trial class and experience Clockwork BJJ firsthand.
              </p>
              
              {/* Form Container */}
              <div>
                {/* ZenPlanner Form Iframe */}
                <div className="w-full relative">
                  {/* Loading Indicator */}
                  {!isFormLoaded && (
                    <div className="h-[800px] flex items-center justify-center bg-black/50">
                      <div className="flex flex-col items-center">
                        <div className="relative w-20 h-20 mb-6">
                          <div className="absolute top-0 left-0 w-full h-full border-4 border-white/10 animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-full h-full border-t-4 border-white animate-spin"></div>
                        </div>
                        <p className="font-montserrat text-xl">Loading form...</p>
                        <p className="font-montserrat text-white/60 mt-2">Please wait while we prepare your registration</p>
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
                      minHeight: '900px',
                      width: '100%',
                      overflow: 'hidden'
                    }} 
                    onLoad={handleIframeLoad}
                    title="Clockwork BJJ Sign Up Form"
                    className={`bg-transparent ${!isFormLoaded ? 'hidden' : 'block'}`}
                    frameBorder="0"
                    scrolling="no"

                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-center"
            >
              <h3 className="font-bebas text-2xl md:text-3xl mb-4 tracking-wider">NEED MORE INFO?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/faq" 
                  className="font-montserrat bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
                >
                  VIEW FAQ
                </Link>
                <Link 
                  href="/contact" 
                  className="font-montserrat bg-white text-black px-8 py-3 hover:bg-gray-200 transition-all duration-300 text-lg font-medium"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>

            </div>
          
        </section>
      </main>
      <Footer />
    </>
  );
}
