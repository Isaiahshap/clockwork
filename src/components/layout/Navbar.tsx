'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reorganized nav structure with dropdowns
const navStructure = [
  { 
    name: 'ABOUT', 
    href: '/about',
    dropdown: [
      { name: 'ABOUT CWBJJ', href: '/about' },
      { name: 'PRICING', href: '/pricing' },
      { name: 'PRIVATE TRAINING', href: '/private-training' },
      { name: 'CONTACT', href: '/contact' },
    ]
  },
  { name: 'CLASSES', href: '/classes' },
  { name: 'SCHEDULE', href: '/schedule' },
  { name: 'INSTRUCTORS', href: '/instructors' },
  { name: 'SHOP', href: 'https://clockworkbjj.com/merch', external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black transition-shadow duration-300 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-24 relative">
                <Image 
                  src="/images/clockwork-logo.png" 
                  alt="Clockwork BJJ Logo" 
                  layout="fill"
                  objectFit="contain"
                  className="filter invert"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navStructure.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button 
                        className="font-montserrat text-white hover:text-gray-300 px-2 py-2 text-sm transition-colors duration-200 flex items-center"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                      >
                        {item.name}
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown menu */}
                      <div 
                        className={`absolute left-0 mt-0 w-48 bg-black border border-gray-700 shadow-lg rounded-b-md overflow-hidden transition-all duration-200 origin-top-left ${
                          activeDropdown === item.name ? 'block' : 'hidden'
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm font-montserrat text-white hover:bg-gray-800 transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-montserrat text-white hover:text-gray-300 px-2 py-2 text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-white"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-montserrat text-white hover:text-gray-300 px-2 py-2 text-sm transition-colors duration-200 border-b-2 border-transparent hover:border-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                href="/free-trial" 
                className="font-bebas bg-white text-black px-5 py-2 hover:bg-gray-200 transition-colors duration-200 tracking-wider text-lg ml-4"
              >
                FREE TRIAL
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
          {navStructure.map((item) => (
            <div key={item.name} className="py-1">
              {item.dropdown ? (
                <>
                  <div className="flex items-center justify-between px-3 py-2 font-montserrat font-medium text-white">
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="p-1 rounded-full hover:bg-gray-800"
                    >
                      <svg className={`h-5 w-5 transition-transform ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Mobile dropdown items */}
                  <motion.div 
                    className={`pl-6 ${activeDropdown === item.name ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: activeDropdown === item.name ? 1 : 0,
                      height: activeDropdown === item.name ? 'auto' : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm font-montserrat text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                </>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 font-montserrat text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 font-montserrat text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link 
              href="/free-trial" 
              className="font-bebas bg-white text-black block px-3 py-2 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              FREE TRIAL
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
