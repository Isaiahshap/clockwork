'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const classTypes = [
  {
    title: 'ADULT CLASSES',
    description: 'Classes for all levels, from beginners to advanced practitioners. Our curriculum covers self-defense, sport jiu-jitsu, and competition preparation.',
    link: '/adults',
    image: '/images/adultclasses.webp'
  },
  {
    title: 'KIDS PROGRAM',
    description: 'Fun and engaging classes designed specifically for children, teaching discipline, confidence, and self-defense in a safe, supportive environment.',
    link: '/kids-classes',
    image: '/images/kidsclasses.webp'
  },
  {
    title: 'PRIVATE TRAINING',
    description: 'One-on-one instruction tailored to your specific goals and needs. Accelerate your progress with personalized attention from our expert coaches.',
    link: '/private-training',
    image: '/images/private.webp'
  }
];

export default function Classes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-bebas text-4xl md:text-5xl mb-12 tracking-wider text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          OUR CLASSES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classTypes.map((classType, index) => (
            <motion.div 
              key={classType.title}
              className="bg-black border border-zinc-800 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="h-60 relative">
                <div 
                  className="absolute inset-0 bg-black"
                  style={{
                    backgroundImage: `url("${classType.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bebas text-2xl mb-4 tracking-wide">{classType.title}</h3>
                <p className="font-montserrat mb-6 text-gray-300">{classType.description}</p>
                <Link 
                  href={classType.link}
                  className="font-bebas inline-block border border-white px-4 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
                >
                  LEARN MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
