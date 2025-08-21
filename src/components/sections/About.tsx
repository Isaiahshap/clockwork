'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bebas text-4xl md:text-5xl mb-8 tracking-wider text-center">ABOUT CLOCKWORK</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12 md:-mx-12 lg:-mx-20 xl:-mx-32 px-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-auto h-full w-full overflow-hidden relative shadow-xl shadow-black/30 border border-white/10"
            >
              <Image 
                src="/images/hero-bg1.jpg"
                alt="Clockwork BJJ Training"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-montserrat text-lg mb-6 leading-relaxed font-bold">
                At Clockwork Jiu Jitsu, we offer an ego-free training environment in downtown NYC where all levels are welcome.
              </p>
              <p className="font-montserrat text-lg mb-6 leading-relaxed">
                People usually reach out to us because they&apos;re curious about Jiu Jitsu. Inevitably we see this curiosity grow into passion. As our new students get more engaged in training, something even more remarkable happens.
              </p>
              <p className="font-montserrat text-lg mb-6 leading-relaxed font-bold">
                They become sharper because they&apos;re inspired. 
                </p>
                <p className="font-montserrat text-lg mb-6 leading-relaxed">
                They get in the best shape of their lives, not through monotonous workouts, but by doing something they love. They become even better versions of themselves. 
              </p>
            </motion.div>
          </div>

          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="/about"
              className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              MORE ABOUT OUR COMMUNITY
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
