'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - 40vh with large text */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/Clockwork1.webp"
            alt="Clockwork BJJ Gym"
            fill
            priority
            className="object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT CLOCKWORK
            </motion.h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider">OUR STORY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="font-montserrat text-lg mb-6 leading-relaxed">
                    Founded in 2017, Clockwork BJJ has been a cornerstone of the New York City jiu-jitsu community for over 8 years. What started as a small group of dedicated practitioners has grown into one of the most respected academies in downtown Manhattan.
                  </p>
                  <p className="font-montserrat text-lg mb-6 leading-relaxed font-bold">
                    Our name &quot;Clockwork&quot; represents the precision and consistency we bring to the art of jiu-jitsu.
                  </p>
                  <p className="font-montserrat text-lg mb-6 leading-relaxed">
                    We believe in creating an environment where technical excellence meets practical application, all within a supportive community that celebrates growth and perseverance.
                  </p>
                </div>
                <div className="aspect-square w-full overflow-hidden relative shadow-xl shadow-black/30 border border-white/10">
                  <Image 
                    src="/images/hero-bg2.webp"
                    alt="Clockwork BJJ Training"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Our Philosophy */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider">OUR PHILOSOPHY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 aspect-square w-full overflow-hidden relative shadow-xl shadow-black/30 border border-white/10">
                  <Image 
                    src="/images/Clockwork3.webp"
                    alt="Clockwork BJJ Instruction"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="font-montserrat text-lg mb-6 leading-relaxed font-bold">
                    At Clockwork, we believe you deserve to be treated with respect.
                  </p>
                  <p className="font-montserrat text-lg mb-6 leading-relaxed">
                    We understand the classroom dynamics of martial arts. We use body mechanics and leverage instead of brute force. You won&apos;t get yelled at for being slow or making errors. Our instructors are patient and provide detailed and precise methods for most effective learning.
                  </p>
                  <p className="font-montserrat text-lg mb-6 leading-relaxed">
                    We emphasize technical precision, intelligent application of techniques and hard work over ego. The focus is always on pairing efficiency and aggression where beneficial, all within an inclusive environment where BJJ is accessible to everyone.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What Makes Us Different */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider">WHAT MAKES US DIFFERENT</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/20 p-6 border border-white/10">
                  <h3 className="font-bebas text-2xl mb-4 tracking-wide">EGO-FREE TRAINING</h3>
                  <p className="font-montserrat">We foster an environment where learning takes precedence over ego. Everyone, regardless of experience level, is treated with respect and given the space to grow at their own pace.</p>
                </div>
                <div className="bg-black/20 p-6 border border-white/10">
                  <h3 className="font-bebas text-2xl mb-4 tracking-wide">TECHNICAL PRECISION</h3>
                  <p className="font-montserrat">Our instructors emphasize proper technique and mechanics over brute strength. This approach ensures that practitioners of all sizes and physical abilities can effectively apply jiu-jitsu principles.</p>
                </div>
                <div className="bg-black/20 p-6 border border-white/10">
                  <h3 className="font-bebas text-2xl mb-4 tracking-wide">COMMUNITY FOCUSED</h3>
                  <p className="font-montserrat">Beyond just training, we&apos;ve built a tight-knit community of practitioners who support each other both on and off the mats. Many of our members have formed lasting friendships through their shared passion for jiu-jitsu.</p>
                </div>
              </div>
            </motion.div>

            {/* Facility */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider">OUR FACILITY</h2>
              <div className="aspect-video w-full overflow-hidden relative shadow-xl shadow-black/30 border border-white/10 mb-8">
                <Image 
                  src="/images/Clockwork10.webp"
                  alt="Clockwork BJJ Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-montserrat text-lg mb-6 leading-relaxed text-center">
                Located in the heart of NYC at 650 Broadway, 2nd Floor, New York City, NY 10012, our academy features over 2,000 square feet of mat space, modern amenities, and a clean, welcoming environment designed to optimize your training experience.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/free-trial" className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200 mr-4">
                START FREE CLASS
              </Link>
              <Link href="/contact" className="font-bebas inline-block bg-transparent text-white border border-white px-8 py-4 text-xl tracking-wider hover:bg-white/10 transition-colors duration-200">
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
