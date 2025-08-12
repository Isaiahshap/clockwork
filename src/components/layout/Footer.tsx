'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-4 sm:px-6 lg:px-8">
            {/* Logo and address */}
            <div>
              <div className="mb-6 w-40 h-16 relative">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Clockwork BJJ"
                  fill
                  className="object-contain filter invert"
                />
              </div>
              <div className="text-white/80 space-y-2">
                <p className="font-bebas tracking-wide text-xl text-white">CLOCKWORK BJJ</p>
                <p>650 Broadway 2nd floor</p>
                <p>New York, NY 10012</p>
                <p>Between Bond St & Bleecker St</p>
                <p className="mt-4">(212) 675-0300</p>
                <a href="mailto:info@clockworkbjj.com" className="block mt-1 hover:text-white transition-colors">
                  info@clockworkbjj.com
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="font-bebas text-xl tracking-wide mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/classes" className="text-white/80 hover:text-white transition-colors">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-white/80 hover:text-white transition-colors">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/instructors" className="text-white/80 hover:text-white transition-colors">
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link href="/free-trial" className="text-white/80 hover:text-white transition-colors">
                    Free Trial
                  </Link>
                </li>
                <li>
                  <a href="https://clockworkbjj.com/merch" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="relative h-64 overflow-hidden rounded-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5432053559837!2d-73.9977!3d40.7264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c338f691f%3A0xbf6fbd82a5d86482!2s650%20Broadway%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1653508049654!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clockwork BJJ Location"
                className="grayscale brightness-75 hover:brightness-100 hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Clockwork Jiu Jitsu. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
