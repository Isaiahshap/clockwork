'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Style() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 text-white">

      <div className="max-w-5xl mx-auto">
        {/* Header */}
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">OUR STYLE</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
        
        {/* Main Content - Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Philosophy Card */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative h-full bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <motion.h3 
                className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                PHILOSOPHY & FOUNDATION
              </motion.h3>
              
              <motion.div 
                className="space-y-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="font-montserrat text-lg md:text-xl text-white/90 leading-relaxed">
                  At Clockwork, we believe you deserve to be treated with <span className="text-white font-semibold bg-white/10 px-2 py-1">respect</span>. 
                  We understand that sometimes the hardest part of any journey is walking through the door on that first day.
                </p>
                
                <p className="font-montserrat text-lg md:text-xl text-white/90 leading-relaxed">
                  Our approach to building a well-developed curriculum is based on the <span className="text-white font-semibold bg-white/10 px-2 py-1">fundamentals of Jiu Jitsu</span>. 
                  We believe that a strong foundation reinforces the core of your game with much thought and consideration.
                </p>
                
                <motion.div 
                  className="mt-8 p-6 bg-black/30 border-l-4 border-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="font-montserrat text-white/80 italic text-lg">
                    &ldquo;We&apos;ve developed a curriculum that balances both efficiency and experience factors, 
                    building on it, refining and improving techniques down to the essential details.&rdquo;
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Values Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5"></div>
              
              <motion.h3 
                className="font-bebas text-3xl tracking-wider text-white mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                CORE VALUES
              </motion.h3>
              
              <motion.div 
                className="space-y-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {[
                  { title: "RESPECT FIRST", desc: "Welcoming environment for all levels" },
                  { title: "STRONG FOUNDATIONS", desc: "Fundamental techniques mastery" },
                  { title: "CONTINUOUS GROWTH", desc: "Refined learning experience" },
                  { title: "COMMUNITY FOCUSED", desc: "Building lasting connections" }
                ].map((value, index) => (
                  <motion.div 
                    key={value.title}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4 p-4 border border-white/10 bg-black/20 group-hover:bg-white/10 transition-all duration-300">
                      <div className="w-2 h-2 bg-white mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bebas text-lg tracking-wide text-white mb-1">{value.title}</h4>
                        <p className="font-montserrat text-white/70 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <Link 
            href="/free-trial" 
            className="font-bebas inline-block bg-white text-black px-10 py-4 text-2xl tracking-wider hover:bg-gray-200 transition-all duration-300"
          >
            TRY A FREE CLASS
          </Link>
          
          <motion.p 
            className="font-montserrat text-white/70 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Experience our welcoming community and discover why Clockwork BJJ is the perfect place to begin or continue your journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
