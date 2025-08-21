'use client';

import { useState, useRef, useEffect } from 'react';
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
          // Wait for iframe content to load fully
          setTimeout(() => {
            try {
              // Get the height of the form content
              const formHeight = iframe.contentDocument?.body?.scrollHeight || 800;
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
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg"
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
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg"
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
              viewport={{ once: true }}
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
                <div className="w-full">
                  {/* Loading Indicator */}
                  {!isFormLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                        <p className="font-montserrat text-white/80">Loading form...</p>
                      </div>
                    </div>
                  )}
                  
                  <iframe 
                    ref={iframeRef}
                    src="https://eng.zenplanner.com/widget/form/zZQW4SE3tmnobQ3E92bK"
                    width="100%" 
                    height="800"
                    style={{ 
                      border: 0,
                      background: 'transparent',
                      minHeight: '800px'
                    }} 
                    onLoad={handleIframeLoad}
                    title="Clockwork BJJ Sign Up Form"
                    className="bg-transparent"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            </div>
          
        </section>
      </main>
      <Footer />
    </>
  );
}
