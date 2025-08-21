'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'General Inquiry'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'General Inquiry'
    });
    // Show success message (would be implemented with state in a real app)
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section - 40vh with large text */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/hero-bg3.webp"
            alt="Clockwork BJJ Contact"
            fill
            priority
            className="object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CONTACT US
            </motion.h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Contact Info and Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider">GET IN TOUCH</h2>
                
                {/* Contact Details */}
                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="font-bebas text-2xl mb-4 tracking-wide">LOCATION</h3>
                    <div className="font-montserrat space-y-2">
                      <p className="flex items-start">
                        <span className="mr-3 mt-1 w-5 text-center flex-shrink-0">📍</span>
                        <span>650 Broadway 2nd floor<br />New York, NY 10012<br />Between Bond St & Bleecker St</span>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bebas text-2xl mb-4 tracking-wide">CONTACT</h3>
                    <div className="font-montserrat space-y-2">
                      <p className="flex items-start">
                        <span className="mr-3 mt-1 w-5 text-center flex-shrink-0">📞</span>
                        <span>(212) 675-0300</span>
                      </p>
                      <p className="flex items-start">
                        <span className="mr-3 mt-1 w-5 text-center flex-shrink-0">✉️</span>
                        <a href="mailto:info@clockworkbjj.com" className="hover:text-gray-300 transition-colors">
                          info@clockworkbjj.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bebas text-2xl mb-4 tracking-wide">HOURS</h3>
                    <div className="grid grid-cols-2 gap-2">
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
                  </div>
                </div>
                
                {/* Map */}
                <div className="h-80 bg-black relative overflow-hidden shadow-xl shadow-black/30 mb-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5432053559837!2d-73.9977!3d40.7264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c338f691f%3A0xbf6fbd82a5d86482!2s650%20Broadway%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1653508049654!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clockwork BJJ Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
                
                {/* Social Media */}
                <div>
                  <h3 className="font-bebas text-2xl mb-4 tracking-wide">FOLLOW US</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/clockworkbjj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/Clockwork.BJJ.NYC/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://youtube.com/clockworkbjj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-bebas text-3xl md:text-4xl mb-8 tracking-wider">SEND US A MESSAGE</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-montserrat mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 font-montserrat text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-montserrat mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 font-montserrat text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-montserrat mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 font-montserrat text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block font-montserrat mb-2">I&apos;m interested in</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 font-montserrat text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Free Trial">Free Trial</option>
                      <option value="Adult Classes">Adult Classes</option>
                      <option value="Kids Classes">Kids Classes</option>
                      <option value="Private Training">Private Training</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-montserrat mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 font-montserrat text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="font-bebas bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200 w-full md:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    SEND MESSAGE
                  </motion.button>
                </form>
                
                <div className="mt-12 p-6 bg-white/5 border border-white/20">
                  <h3 className="font-bebas text-2xl mb-4 tracking-wide">WANT TO TRY A CLASS?</h3>
                  <p className="font-montserrat mb-6">
                    Your first class is on us! Experience Clockwork BJJ firsthand with a free trial class.
                  </p>
                  <Link href="/free-trial" className="font-bebas inline-block bg-white text-black px-6 py-3 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200">
                    START FREE CLASS
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
