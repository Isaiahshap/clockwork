'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="find-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider mb-4">FIND US</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 bg-black relative overflow-hidden shadow-xl shadow-black/30"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5432053559837!2d-73.9977!3d40.7264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c338f691f%3A0xbf6fbd82a5d86482!2s650%20Broadway%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1653508049654!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clockwork BJJ Location"
              className="grayscale-[100%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-bebas text-3xl mb-6 tracking-wide">CLOCKWORK JIU JITSU</h3>
            <div className="font-montserrat space-y-4 mb-8">
              <p className="flex items-start">
                <span className="mr-3 mt-1 w-5 text-center flex-shrink-0">📍</span>
                <span>650 Broadway 2nd floor, New York, NY 10012</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 mt-1 w-5 text-center flex-shrink-0">📞</span>
                <span>(212) 675-0300</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 mt-1 w-5 text-center flex-shrink-0">✉️</span>
                <span>info@clockworkbjj.com</span>
              </p>
            </div>
            
            <h4 className="font-bebas text-2xl mb-4 mt-8 tracking-wide">HOURS</h4>
            <div className="grid grid-cols-2 gap-2 mb-8">
              <div className="font-montserrat">
                <p className="font-bold">Monday</p>
                <p>7 AM–8:30 PM</p>
              </div>
              <div className="font-montserrat">
                <p className="font-bold">Tuesday</p>
                <p>8 AM–9 PM</p>
              </div>
              <div className="font-montserrat">
                <p className="font-bold">Wednesday</p>
                <p>8 AM–8:30 PM</p>
              </div>
              <div className="font-montserrat">
                <p className="font-bold">Thursday</p>
                <p>11 AM–9 PM</p>
              </div>
              <div className="font-montserrat">
                <p className="font-bold">Friday</p>
                <p>7 AM–7 PM</p>
              </div>
              <div className="font-montserrat">
                <p className="font-bold">Saturday</p>
                <p>8 AM–2:30 PM</p>
              </div>
              <div className="font-montserrat">
                <p className="font-bold">Sunday</p>
                <p>11:30 AM–2:30 PM</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="font-bebas inline-block border border-white px-8 py-4 text-xl tracking-wider hover:bg-white hover:text-black transition-colors duration-200 text-center w-full sm:w-auto"
              >
                CONTACT US
              </Link>
              <Link 
                href="/free-trial"
                className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200 text-center w-full sm:w-auto"
              >
                FREE TRIAL
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
