'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" style={{ paddingTop: 'calc(var(--navbar-height) + 6rem)' }}>
        <div className="max-w-4xl mx-auto text-center pb-20">
          
          {/* Clean 404 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="font-bebas text-8xl md:text-9xl lg:text-[12rem] text-white tracking-wider mb-6">404</h1>
            <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wide">
              PAGE NOT FOUND
            </h2>
            <p className="font-montserrat text-xl text-white/80">
              This page must be rolling somewhere else.
            </p>
          </motion.div>

          {/* BJJ Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-2xl mx-auto aspect-video mb-12 overflow-hidden border border-white/20 shadow-2xl"
          >
            <Image
              src="/images/Clockwork12.webp"
              alt="BJJ Training at Clockwork"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Simple message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <p className="font-montserrat text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist. But don&apos;t worry - 
              there&apos;s plenty of other great content to explore.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200 w-full sm:w-auto text-center"
            >
              GO HOME
            </Link>
            <Link
              href="/free-trial"
              className="font-bebas inline-block border border-white px-8 py-4 text-xl tracking-wider hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto text-center"
            >
              FREE TRIAL
            </Link>
            <Link
              href="/contact"
              className="font-bebas inline-block border border-white px-8 py-4 text-xl tracking-wider hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto text-center"
            >
              CONTACT US
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
