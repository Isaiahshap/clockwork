'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    '/images/hero-bg.webp',
    '/images/hero-bg2.webp',
    '/images/hero-bg3.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image carousel with overlay */}
      {backgroundImages.map((image, index) => (
        <div 
          key={image}
          className="absolute inset-0 z-0 transition-opacity duration-2000 ease-in-out"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-1"></div>

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
              className="filter invert drop-shadow-[0_0_16px_rgba(255,255,255,0.5)]"
            />
          </div>
        </motion.div>
        
        <motion.p 
          className="font-montserrat text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide text-white/90"
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
