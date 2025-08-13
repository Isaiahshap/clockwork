'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], ['0%', '10%']);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video background with reverse parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: videoY, height: '120%', width: '100%', position: 'absolute', top: '-10%' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero.webm" type="video/webm" />
          </video>
        </motion.div>
      </div>
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          className="mb-2 md:mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 relative mx-auto">
            <Image
              src="/images/logo-transparent.png"
              alt="Clockwork BJJ"
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="filter invert"
            />
          </div>
        </motion.div>
        
        <motion.p 
          className="font-bebas text-2xl sm:text-xl md:text-3xl mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Premier Brazilian Jiu Jitsu training in the heart of New York City
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <Link 
            href="/free-trial" 
            className="font-bebas inline-block bg-white text-black px-10 py-5 text-2xl tracking-wider hover:bg-gray-200 transition-all duration-300 relative z-10 border border-transparent hover:border-white/20"
          >
            START YOUR FREE TRIAL
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
