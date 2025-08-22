'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Quote at the top of footer */}
      <div className="py-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-montserrat text-base italic font-semibold">This environment destroys ego and increases one&apos;s sense of reality.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 py-12 px-4 sm:px-6 lg:px-8">
            {/* Logo and address */}
            <div className="text-center lg:col-span-1">
              <div className="mb-6 w-40 h-16 relative mx-auto">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Clockwork BJJ"
                  fill
                  className="object-contain filter invert"
                />
              </div>
              <div className="text-white/80 space-y-2">
                <p>650 Broadway 2nd floor</p>
                <p>New York, NY 10012</p>
                <p>Between Bond St & Bleecker St</p>
                <p className="mt-4">(212) 675-0300</p>
                <a href="mailto:info@clockworkbjj.com" className="block mt-1 hover:text-white transition-colors">
                  info@clockworkbjj.com
                </a>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 flex justify-center space-x-4">
                <a 
                  href="https://instagram.com/clockworkbjj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/Clockwork.BJJ.NYC/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/clockworkbjj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick links - All navbar links */}
            <div className="text-center lg:col-span-3">
              <h3 className="font-bebas text-2xl tracking-wide mb-8 relative inline-block">
                <span>QUICK LINKS</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8">
                {/* About Section */}
                <div className="mb-4">
                  <h4 className="font-bebas text-xl text-white mb-4 relative inline-block">
                    <span>ABOUT</span>
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto w-8 h-0.5 bg-white/50"></span>
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link href="/instructors" className="text-white/80 hover:text-white transition-colors">
                        INSTRUCTORS
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Classes Section */}
                <div className="mb-4">
                  <h4 className="font-bebas text-xl text-white mb-4 relative inline-block">
                    <span>CLASSES</span>
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto w-8 h-0.5 bg-white/50"></span>
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/adults" className="text-white/80 hover:text-white transition-colors">
                        ADULT CLASSES
                      </Link>
                    </li>
                    <li>
                      <Link href="/kids-classes" className="text-white/80 hover:text-white transition-colors">
                        KIDS CLASSES
                      </Link>
                    </li>
                    <li>
                      <Link href="/private-training" className="text-white/80 hover:text-white transition-colors">
                        PRIVATE TRAINING
                      </Link>
                    </li>
                    <li>
                      <Link href="/bootcamp" className="text-white/80 hover:text-white transition-colors">
                        BOOTCAMP
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Links Section */}
                <div className="mb-4">
                  <h4 className="font-bebas text-xl text-white mb-4 relative inline-block">
                    <span>MORE</span>
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto w-8 h-0.5 bg-white/50"></span>
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/schedule" className="text-white/80 hover:text-white transition-colors">
                        SCHEDULE
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                        CONTACT
                      </Link>
                    </li>
                    <li>
                      <Link href="/free-trial" className="text-white/80 hover:text-white transition-colors">
                        FREE TRIAL
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.clockwork.nyc/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                        SHOP
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Clockwork Jiu Jitsu. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors group inline-flex items-center">
              <span className="group-hover:underline">Privacy Policy</span>
            </Link>
            <span className="text-white/30 hidden md:inline">|</span>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors group inline-flex items-center">
              <span className="group-hover:underline">Terms of Service</span>
            </Link>
            <span className="text-white/30 hidden md:inline">|</span>
            <Link href="/accessibility" className="text-sm text-white/70 hover:text-white transition-colors group inline-flex items-center">
              <span className="group-hover:underline">Accessibility</span>
            </Link>
            <span className="text-white/30 hidden md:inline">|</span>
            <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors group inline-flex items-center">
              <span className="group-hover:underline">Contact</span>
            </Link>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-6 text-center">
          <p className="text-xs text-white/50 italic">
            Made while shrimping — by <a href="https://yeshaya.dev" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors underline-offset-2 hover:underline">Yeshaya.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}