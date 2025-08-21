'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Instructors() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-bebas text-4xl md:text-5xl mb-12 tracking-wider text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          MEET OUR HEAD INSTRUCTOR
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden  shadow-xl shadow-black/30">
              <Image 
                src="/images/josh.webp"
                alt="Josh Griffiths - Head Instructor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-white">Josh Griffiths</h3>
                <p className="font-montserrat text-white/90 text-lg">4th Degree Black Belt | Head Instructor</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="font-montserrat text-white/90"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 leading-relaxed">
              Josh is a 4th Degree Black Belt in Brazilian Jiu-Jitsu and the head instructor at Clockwork Jiu Jitsu.
            </p>
            
            <p className="mb-4 leading-relaxed">
              He began training in Brazilian Jiu-Jitsu while completing his engineering degree at Stevens Institute in Hoboken, NJ.
            </p>
            
            <p className="mb-4 leading-relaxed">
              After a few months he started training more regularly and watching competition footage. Jiu-Jitsu quickly became an obsession and something that Josh would do almost everyday and some times twice a day.
            </p>
            
            <p className="mb-4 leading-relaxed">
              Soon after this Josh started to compete; medaling in his first 2 tournaments and taking the gold in his third (submitting all 4 of his opponents).
            </p>
            
            <p className="mb-4 leading-relaxed">
              Since then Josh has trained with some of the best in the sport and won some of the most prestigious titles in Jiu-Jitsu including the Pan American Championship, The North American Abu Dhabi Pro Trials, and multiple Grappler&apos;s Quest and Copa Atlantica championship titles.
            </p>
            
            <p className="mb-4 leading-relaxed">
              In 2007 Josh received his black belt from UFC star Kenny Florian. Currently Josh is focusing fulltime on instructing his students at Clockwork BJJ at 650 Broadway btw Bond Street and Bleeker Street in New York&apos;s Noho/Soho neighborhood.
            </p>
          </motion.div>
        </div>
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/instructors"
              className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
            >
              MEET OUR TEAM
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
