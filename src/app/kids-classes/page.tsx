'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function KidsClassesPage() {
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
        {/* Hero Section with animated text */}
        <section className="relative h-[50vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/Clockwork13.webp"
            alt="Clockwork BJJ Kids Classes"
            fill
            priority
            className="object-cover"
          />
          
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.h1 
                className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white tracking-wider text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                KIDS CLASSES
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4"
              >
                <span className="px-4 py-2 bg-white text-black font-bebas text-xl md:text-2xl tracking-wider inline-block transform -rotate-2">
                  LEARN • GROW • HAVE FUN
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Introduction with fun border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 border-4 border-white/10 shadow-xl"
            >
              <div className="relative">

                <p className="font-montserrat text-lg mb-6">
                  The Jiu Jitsu Children&apos;s program at Clockwork Jiu Jitsu focuses on teaching Self Defense, Physical Education, and Personal Development. This is accomplished by using yoga, calisthenics, and skill building games to improve focus, strength, flexibility, coordination, and determination.
                </p>
                <p className="font-montserrat text-lg mb-6">
                  Our Kids Jiu Jitsu classes are designed for children ages 4-14. The ultimate goal of the children&apos;s BJJ program is to facilitate children in their personal development through the art of Jiu Jitsu.
                </p>
                <p className="font-montserrat text-lg mb-6">
                  Classes are held Monday thru Friday at 4:15pm and on Saturday at 10:30am. Our students have seen dramatic improvements academically, socially, and within the home. The best part is that your child will love Jiu Jitsu because it&apos;s so much fun. We are sure your child will love learning Martial Arts at Clockwork Jiu Jitsu. Sign up today for your free Children&apos;s Jiu Jitsu class.
                </p>
              </div>
            </motion.div>



            {/* Age-Specific Programs with fun cards */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bebas text-4xl md:text-5xl mb-10 tracking-wider text-center"
            >
              OUR PROGRAMS
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* 4-6 Program */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotateY: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden shadow-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-500/20 flex items-center justify-center mb-6 mx-auto">
                    <span className="font-bebas text-3xl text-blue-400">4-6</span>
                  </div>
                  <h3 className="font-bebas text-3xl mb-4 tracking-wide text-center">KIDS 4-6 PROGRAM</h3>
                  <p className="font-montserrat mb-6 text-white/80 text-sm">
                    THIS IS OUR YOUNGEST AGE GROUP AND A GREAT TIME TO START YOUR CHILDREN ON THEIR JIU JITSU JOURNEY. THE CURRICULUM IN THIS PROGRAM IS CENTERED AROUND EXERCISES AND GAMES THAT WILL INTRODUCE OUR YOUNGEST STUDENTS TO THE BASIC MOVEMENTS AND CORE VALUES OF JIU JITSU.
                  </p>
                  <h4 className="font-bebas text-xl mb-3 tracking-wide text-blue-400">PROGRAM GOALS:</h4>
                  <ul className="font-montserrat text-white/80 mb-6 space-y-3">
                    {[
                      "PROMOTE GOOD BEHAVIOR AND ABILITY TO FOLLOW INSTRUCTIONS",
                      "IMPROVE ABILITY TO FOCUS IN A GROUP SETTING",
                      "BUILD CONFIDENCE AND COMMUNICATION SKILLS",
                      "DEVELOP AND IMPROVE BODY COORDINATION AND BALANCE",
                      "INTRODUCE BASIC JIU JITSU POSITIONS AND TECHNIQUES"
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              {/* 6-9 Program */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotateY: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden shadow-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-4 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-purple-500/20 flex items-center justify-center mb-6 mx-auto">
                    <span className="font-bebas text-3xl text-purple-400">6-9</span>
                  </div>
                  <h3 className="font-bebas text-3xl mb-4 tracking-wide text-center">KIDS 6-9 PROGRAM</h3>
                  <p className="font-montserrat mb-6 text-white/80 text-sm">
                    THE 6-9 KIDS PROGRAM WILL BUILD ON ALL OF THE GOALS OF THE 4-6 AGE GROUP AND ALSO BEGIN TO INCORPORATE A MORE DIVERSE SET OF JIU JITSU TECHNIQUES AND SKILLS. STUDENTS WILL DEVELOP A BETTER UNDERSTANDING OF SPARRING AND HOW TO APPLY THE TECHNIQUES.
                  </p>
                  <h4 className="font-bebas text-xl mb-3 tracking-wide text-purple-400">PROGRAM GOALS:</h4>
                  <ul className="font-montserrat text-white/80 mb-6 space-y-3">
                    {[
                      "INSTILL SELF-DISCIPLINE AND PERSONAL RESPONSIBILITY",
                      "DEVELOP PHYSICAL AWARENESS AND COORDINATION",
                      "BUILD STRENGTH, SPEED AND BALANCE THROUGH SPORT SPECIFIC EXERCISES",
                      "INCREASE THE SITUATIONAL AND POSITIONAL SPARRING"
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* 9-13 Program */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotateY: 10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden shadow-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-4 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-pink-500/20 flex items-center justify-center mb-6 mx-auto">
                    <span className="font-bebas text-3xl text-pink-400">9-13</span>
                  </div>
                  <h3 className="font-bebas text-3xl mb-4 tracking-wide text-center">KIDS 9-13 PROGRAM</h3>
                  <p className="font-montserrat mb-6 text-white/80 text-sm">
                    THIS IS THE OLDEST GROUP IN OUR KIDS PROGRAM AND IS AN IMPORTANT TRANSITIONAL PHASE AS WE PREPARE THESE STUDENTS TO ENTER THE ADULT PROGRAM. IT IS OUR GOAL TO EQUIP THEM WITH THE CONFIDENCE AND SKILL SET THEY WILL NEED TO EXCELL AND CONTINUE TO GROW WITH JIU JITSU INTO ADULTHOOD.
                  </p>
                  <h4 className="font-bebas text-xl mb-3 tracking-wide text-pink-400">PROGRAM GOALS:</h4>
                  <ul className="font-montserrat text-white/80 mb-6 space-y-3">
                    {[
                      "ESTABLISH STRONG AND TECHNICAL FOUNDATION",
                      "DEVELOP SPARRING SKILLS",
                      "ENCOURAGE TEAMWORK",
                      "DEVELOP SELF-CONTROL"
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Additional Image and Info with fun elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  <div className="aspect-video w-full overflow-hidden shadow-xl relative transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image 
                      src="/images/kidsclasses.webp"
                      alt="Kids training"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-black/70 px-4 py-2 font-bebas tracking-wider text-sm">
                      CLOCKWORK BJJ KIDS
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="font-bebas text-3xl md:text-4xl mb-6 tracking-wider">
                      Kids Brazilian Jiu-Jitsu in New York City
                    </h2>
                    <p className="font-montserrat mb-6">
                      Parents searching &quot;kids martial arts near me&quot; choose Clockwork for a reason: proven curriculum, small class ratios and a fun, disciplined atmosphere.
                    </p>
                    <h3 className="font-bebas text-2xl mb-4 tracking-wide">Program Highlights</h3>
                    <ul className="font-montserrat mb-6 space-y-3">
                      {[
                        "Age-specific classes (4-6, 6-9, 9-13)",
                        "Develop coordination, strength and bully-proof confidence",
                        "Flexible after-school & weekend times"
                      ].map((highlight, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                          className="flex items-center"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p>{highlight}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sign Up Form with fun elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 relative"
            >
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
              
              <div className="relative">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    <h2 className="font-bebas text-4xl md:text-5xl mb-4 tracking-wider relative inline-block">
                      <span className="relative z-10">START YOUR CHILD&apos;S BJJ JOURNEY</span>
                      <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 -rotate-1"></div>
                    </h2>
                  </motion.div>
                  <p className="font-montserrat text-lg max-w-3xl mx-auto mb-8">
                    Fill out the form below to sign up for a free trial class and see how your child can benefit from jiu-jitsu.
                  </p>
                </div>
                
                {/* Form Container */}             
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
                        src="https://eng.zenplanner.com/widget/form/NJB5bxSCFtwtBkC9idKb"
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
                        title="Clockwork BJJ Kids Sign Up Form"
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
