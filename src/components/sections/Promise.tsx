'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Promise() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">OUR PROMISE</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {/* Left column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">COMMUNITY FIRST</h3>
                <p className="text-white/80">We are a community, not a corporation. We&apos;re a family.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">NO EGO ZONE</h3>
                <p className="text-white/80">If you do make a mistake, we&apos;ll never laugh from an ego place.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">DEDICATED INSTRUCTORS</h3>
                <p className="text-white/80">Our instructors genuinely care about students and are dedicated to your progress.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">INCLUSIVE TRAINING</h3>
                <p className="text-white/80">We include ego-less and EVERY type of roll; we will never tell you to chill.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">5</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">ROOM FOR ALL</h3>
                <p className="text-white/80">We don&apos;t subscribe to a cult-like mentality - there&apos;s room for all.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">6</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">NO PRESSURE</h3>
                <p className="text-white/80">We don&apos;t try and sell you on your first day - we want you to come back!</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">7</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">PUNCTUALITY</h3>
                <p className="text-white/80">Classes always start on time.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">8</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">CLEAN FACILITIES</h3>
                <p className="text-white/80">Clean locker rooms with showers.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">9</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">QUALITY INSTRUCTION</h3>
                <p className="text-white/80">Clean mats and top-notch instruction.</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="mr-4 mt-1">
                <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center font-bebas group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">10</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-xl tracking-wide mb-1 text-white">FRIENDLY STAFF</h3>
                <p className="text-white/80">Our staff is friendly and approachable.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Image of the gym building */}
        <motion.div
          className="mt-20 relative h-80 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src="/images/gym-building.jpg"
            alt="Clockwork BJJ Facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="font-bebas text-2xl tracking-wide text-white">650 BROADWAY, NEW YORK, NY</p>
            <p className="text-white/80">Between Bond Street and Bleecker Street</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
