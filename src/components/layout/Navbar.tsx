'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reorganized nav structure with dropdowns
const navStructure = [
  { 
    name: 'ABOUT', 
    href: '/about',
    dropdown: [
      { name: 'ABOUT US', href: '/about' },
      { name: 'INSTRUCTORS', href: '/instructors' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
  { 
    name: 'CLASSES', 
    href: '/classes',
    dropdown: [
      { name: 'ADULT CLASSES', href: '/classes/adult' },
      { name: 'KIDS CLASSES', href: '/classes/kids' },
      { name: 'PRIVATE TRAINING', href: '/private-training' },
      { name: 'BOOTCAMP', href: '/bootcamp' },
    ]
  },
  { name: 'SCHEDULE', href: '/schedule' },
  { name: 'SHOP', href: 'https://www.clockwork.nyc/', external: true },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showContactBar, setShowContactBar] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect for subtle shadow
  // Throttle function to limit how often the scroll handler fires
  const throttle = <T extends (...args: unknown[]) => void>(
    callback: T,
    delay: number
  ) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return callback(...args);
    };
  };

  // Memoized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('up');
    }
    
    // Update last scroll position
    setLastScrollY(currentScrollY);
    
    // Handle scroll effects
    if (currentScrollY > 10) {
      setScrolled(true);
      
      // Show contact bar on scroll up, hide on scroll down
      if (scrollDirection === 'up') {
        setShowContactBar(true);
      } else if (scrollDirection === 'down') {
        setShowContactBar(false);
      }
    } else {
      // Always show at the top of the page
      setScrolled(false);
      setShowContactBar(true);
    }
  }, [lastScrollY, scrollDirection]);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);
  
  // Clean up any timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <>
      {/* Combined navbar container */}
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Contact bar */}
        <div 
          className={`bg-black transition-all duration-300 overflow-hidden ${showContactBar ? 'h-8' : 'h-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-full">
              {/* Left side - Location */}
              <div className="hidden sm:flex items-center space-x-6">
                <a href="https://maps.google.com/?q=252+W+26th+St,+New+York,+NY+10001" target="_blank" rel="noopener noreferrer" className="text-white text-xs hover:text-gray-300 transition-colors duration-200 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  252 W 26th St, New York, NY
                </a>
                
                {/* Free trial CTA - visible on medium screens */}
                <Link href="/free-trial" className="hidden md:flex text-xs font-medium bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 transition-colors duration-200">
                  START FREE CLASS
                </Link>
              </div>
              
              {/* Right side - Contact & Social */}
              <div className="flex items-center space-x-4">
                <a href="tel:+12126750300" className="text-white text-xs hover:text-gray-300 transition-colors duration-200 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (212) 675-0300
                </a>
                
                {/* Social Icons */}
                <div className="flex items-center space-x-2">
                  <a href="https://instagram.com/clockworkbjj" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/Clockwork.BJJ.NYC/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com/clockworkbjj" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main navbar */}
        <nav className={`bg-black transition-all duration-300 border-b border-white ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-20' : 'h-28'}`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className={`relative transition-all duration-300 ${scrolled ? 'h-12 w-24' : 'h-16 w-32'}`}>
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
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.dropdown) {
                      if (hoverTimeout) clearTimeout(hoverTimeout);
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) {
                      const timeout = setTimeout(() => setActiveDropdown(null), 300);
                      setHoverTimeout(timeout);
                    }
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button 
                        className="font-montserrat text-white hover:text-gray-300 px-2 py-2 text-sm transition-colors duration-200 flex items-center group-hover:text-white relative"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        }}
                        onMouseEnter={() => {
                          if (hoverTimeout) clearTimeout(hoverTimeout);
                          setActiveDropdown(item.name);
                        }}
                      >
                        <span className="relative inline-block">
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown menu */}
                      <div 
                        className={`absolute left-0 mt-0 w-48 bg-black border border-gray-700 shadow-lg rounded-b-md overflow-hidden transition-all duration-300 transform origin-top-left ${
                          activeDropdown === item.name ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                        }`}
                        onMouseEnter={() => {
                          if (hoverTimeout) clearTimeout(hoverTimeout);
                        }}
                      >
                        <div className="py-1 divide-y divide-gray-800">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm font-montserrat text-white hover:bg-gray-800 transition-colors duration-150 hover:pl-6"
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
                      className="font-montserrat text-white hover:text-gray-300 px-2 py-2 text-sm transition-colors duration-200 relative group"
                    >
                      <span className="relative inline-block">
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-montserrat text-white hover:text-gray-300 px-2 py-2 text-sm transition-colors duration-200 relative group"
                    >
                      <span className="relative inline-block">
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
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
      </div>
    </>
  );
}
