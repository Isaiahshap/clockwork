'use client';

import { motion } from 'framer-motion';

export default function Style() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">OUR STYLE</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -left-4 top-0 h-full w-1 bg-white/20"></div>
            <div className="pl-8">
              <h3 className="font-bebas text-2xl tracking-wide mb-6 text-white">RESPECT FIRST</h3>
              <p className="font-montserrat text-white/80 leading-relaxed mb-4">
                At Clockwork we believe you deserve to be treated with respect. 
                We understand that sometimes the hardest part of any journey is 
                walking through the door on that first day. That&apos;s why we 
                offer a free trial class so you can see if this is a good fit.
              </p>
              
              <div className="mt-8 mb-4">
                <span className="font-bebas text-xl tracking-wide inline-block border-b-2 border-white pb-1">OUR APPROACH</span>
              </div>
              <ul className="space-y-3 font-montserrat text-white/80">
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                  <span>Respectful and welcoming environment</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                  <span>Free trial class for new students</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                  <span>Focus on making you comfortable</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -left-4 top-0 h-full w-1 bg-white/20"></div>
            <div className="pl-8">
              <h3 className="font-bebas text-2xl tracking-wide mb-6 text-white">STRONG FOUNDATIONS</h3>
              <p className="font-montserrat text-white/80 leading-relaxed mb-4">
                Our approach to building a well-developed curriculum is based on 
                the fundamentals of Jiu Jitsu. We believe that a strong foundation 
                reinforces the core of your game with much thought and 
                consideration.
              </p>
              <p className="font-montserrat text-white/80 leading-relaxed mb-4">
                We&apos;ve developed a curriculum that balances both 
                efficiency and experience factors building on it, refining and 
                improving techniques down the essential details.
              </p>
              
              <div className="mt-8 mb-4">
                <span className="font-bebas text-xl tracking-wide inline-block border-b-2 border-white pb-1">CURRICULUM FOCUS</span>
              </div>
              <ul className="space-y-3 font-montserrat text-white/80">
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                  <span>Fundamental techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                  <span>Balance of efficiency and experience</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                  <span>Refined techniques with essential details</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="/free-trial" 
            className="font-bebas inline-block bg-white text-gray-900 px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
          >
            TRY A FREE CLASS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
