'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const messages = [
    "🔥 FEBRUARY BOOTCAMP NOW OPEN",
    "NO EGO ZONE • ALL LEVELS WELCOME",
    "FREE TRIAL CLASS AVAILABLE",
    "650 BROADWAY • NOHO, NYC",
    "JANUARY BOOTCAMP SOLD OUT IN WEEKS",
    "COMMUNITY FIRST • RESPECT ALWAYS"
  ];

  return (
    <section className="relative overflow-hidden bg-black border-y border-white py-3">
      <div className="relative flex items-center">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...Array(20)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {messages.map((message, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center">
                  <span className="font-bebas text-xl tracking-wide text-white px-6">
                    {message}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

