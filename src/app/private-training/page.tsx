'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PrivateTrainingPage() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsFormLoaded(true);
  };
  
  // Simplified useEffect for iframe loading
  useEffect(() => {
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
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - 40vh with large text */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/Clockwork15.webp"
            alt="Clockwork BJJ Private Training"
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
              PRIVATE TRAINING
            </motion.h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">PERSONALIZED INSTRUCTION</h2>
              <p className="font-montserrat text-lg max-w-3xl mx-auto">
                1 on 1 training sessions allow for custom-tailored lessons to enhance one&apos;s strengths and improve upon weaknesses at your pace.
              </p>
            </motion.div>

            {/* Form Section - Prominently Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 bg-zinc-900 border border-zinc-800 p-8"
            >
              <h3 className="font-bebas text-2xl mb-6 tracking-wide text-center">SCHEDULE YOUR PRIVATE TRAINING SESSION</h3>
              
              {/* Form Container */}
              <div className="relative h-[600px] border border-white/10 rounded-lg overflow-hidden">
                {/* Loading Indicator */}
                {!isFormLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                    <div className="flex flex-col items-center">
                      <div className="relative w-24 h-24 mb-8">
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-white/10 animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-white animate-spin"></div>
                      </div>
                      <p className="font-montserrat text-2xl">Loading scheduler...</p>
                      <p className="font-montserrat text-white/60 mt-3">Please wait while we prepare your booking form</p>
                    </div>
                  </div>
                )}
                
                <iframe 
                  ref={iframeRef}
                  src="https://app.acuityscheduling.com/schedule/38266b1c/appointment/59814920?appointmentTypeIds[]=59814920"
                  width="100%" 
                  height="100%"
                  style={{ 
                    border: 0,
                    background: 'transparent',
                    width: '100%',
                    height: '100%'
                  }} 
                  onLoad={handleIframeLoad}
                  title="Clockwork BJJ Private Training Scheduler"
                  className={`bg-transparent ${!isFormLoaded ? 'hidden' : 'block'}`}
                  frameBorder="0"
                  scrolling="yes"
                  allow="fullscreen"
                ></iframe>
              </div>
              
              {/* Scroll Hint */}
              <p className="text-white/60 text-sm text-center mt-4">
                Scroll within the form above to view all available options
              </p>
            </motion.div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Main Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-montserrat mb-6 text-white/90 leading-relaxed">
                  While Clockwork Jiu Jitsu is known for the high quality of its group classes and beginner classes, some people prefer to start with private training. These 1 on 1 sessions allow the instructor to teach the lessons in the order that will optimize learning and to adapt techniques to suit an individual&apos;s strengths and weaknesses.
                </p>
                
                <h3 className="font-bebas text-2xl mb-4 tracking-wide">SESSION STRUCTURE</h3>
                <ul className="space-y-4 font-montserrat text-white/90">
                  <li className="flex items-start bg-black/20 p-3 border-l border-white/20">
                    <div className="mr-3 mt-1.5 h-3 w-3 bg-white/30 flex-shrink-0"></div>
                    <span className="leading-relaxed">Private lessons begin with a warm up designed to improve strength, flexibility, and endurance.</span>
                  </li>
                  <li className="flex items-start bg-black/20 p-3 border-l border-white/20">
                    <div className="mr-3 mt-1.5 h-3 w-3 bg-white/30 flex-shrink-0"></div>
                    <span className="leading-relaxed">The warm up is followed by a review of the previous lessons techniques and introduction of new techniques.</span>
                  </li>
                  <li className="flex items-start bg-black/20 p-3 border-l border-white/20">
                    <div className="mr-3 mt-1.5 h-3 w-3 bg-white/30 flex-shrink-0"></div>
                    <span className="leading-relaxed">After the student has developed a strong understanding of the new moves through drilling, the instructor will show you how to combine them with previously learned techniques develop speed and reflexes.</span>
                  </li>
                  <li className="flex items-start bg-black/20 p-3 border-l border-white/20">
                    <div className="mr-3 mt-1.5 h-3 w-3 bg-white/30 flex-shrink-0"></div>
                    <span className="leading-relaxed">This process continues until you have mastered all the techniques in the module.</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Right Column - Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="aspect-video w-full overflow-hidden relative shadow-xl shadow-black/30 border border-zinc-800">
                  <Image 
                    src="/images/private.webp"
                    alt="Clockwork BJJ Private Training"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-video w-full overflow-hidden relative shadow-xl shadow-black/30 border border-zinc-800">
                  <Image 
                    src="/images/Clockwork16.webp"
                    alt="Clockwork BJJ Private Instruction"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="font-montserrat text-lg mb-8">
                For more information please fill out the form above or contact us directly.
              </p>
              <a 
                href="mailto:info@clockworkbjj.com"
                className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200 mx-2"
              >
                EMAIL US
              </a>
              <a 
                href="tel:+12126750300"
                className="font-bebas inline-block border border-white px-8 py-4 text-xl tracking-wider hover:bg-white hover:text-black transition-colors duration-200 mx-2"
              >
                CALL (212) 675-0300
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
