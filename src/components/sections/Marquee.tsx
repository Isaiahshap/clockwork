'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const messages = [
    "🔥 JANUARY BOOTCAMP NOW OPEN",
    "NO EGO ZONE • ALL LEVELS WELCOME",
    "FREE TRIAL CLASS AVAILABLE",
    "650 BROADWAY • NOHO, NYC",
    "NOVEMBER BOOTCAMP SOLD OUT IN WEEKS",
    "COMMUNITY FIRST • RESPECT ALWAYS"
  ];

  // Duplicate messages for seamless loop
  const duplicatedMessages = [...messages, ...messages];

  return (
    <section className="relative overflow-hidden bg-black border-y border-white py-3">
      <div className="relative flex items-center">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: [0, -50 + '%'],
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
          {duplicatedMessages.map((message, index) => (
            <div
              key={index}
              className="flex items-center"
            >
              <span className="font-bebas text-xl tracking-wide text-white px-6">
                {message}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

