'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  {
    name: 'Miles Morrow',
    text: 'Amazing instructors and such cool people. 10/10 Would definitely recommend to anyone looking to start jiu-jitsu.🤙'
  },
  {
    name: 'Zen Ulloa',
    text: "Love the space, the community, and the curriculum! Josh & Ray are amazing professors. If you're a girl looking for a community and to learn about Bjj in the city; this is where it's at. Met so many amazing women here, the guys definitely will make you work your game however are incredibly respectful and know how to roll with smaller sized people. I love the place here. It's clean. It's fun. It's educational. Super excited to hit the mats here again. 🤎🥋🤼"
  },
  {
    name: 'Dylan Chilchik',
    text: 'Came in for the week from London, great coaches and awesome gym! Cant wait to come back and train again'
  },
  {
    name: 'Benjamin Thys',
    text: 'Could not recommend enough. Ray is a fabulous guide and the kids respond to him very well. Fun, discipline, and positive values are their north star. I hope to continue with clockwork for years.'
  },
  {
    name: 'Katherine Schultz',
    text: 'Super handsome and courteous instructor Ray 🥰 very friendly even for blue belt girlies! Super respectful, clean, and accommodating! Clean showers and bathrooms. Great instruction and games! Nice big beautiful mat space. I will definitely be back next time I visit! Xoxo'
  },
  {
    name: 'Irine Shiyan',
    text: "I have 3 kids 4-8 years old enrolled. Great experience!!! Everyone has been very patient and disciplined with all 3. One of my kiddos has some issues following the rules in school and has some big feeling when losing, Ray has been incredible with how he's adapted his approach to develop those skills and reactions. All three kids have made incredible strides in their skill level, ability to deal with losing AND dis up line in general. Great experience!!! Thank you!!"
  },
  {
    name: 'Luke',
    text: 'I dropped in from out of town and trained at both the 7am class with Vic and the evening class with Josh and Ray. The gym is fantastic—clean, welcoming, and focused. The instructors are incredible: knowledgeable, approachable, and no-nonsense. Just real, high-quality jiu jitsu with zero fluff. Could not recommend Clockwork BJJ on Broadway more highly.'
  },
  {
    name: 'Josh Sherry',
    text: "Joining Clockwork Jiu Jitsu has been the most transformative experience of my life. When I first moved to New York, I didn't know anyone and signed up here simply as a way to exercise and maybe meet a few people. What I found went far beyond that. The coaches are world-class teachers who create an environment that's both challenging and welcoming, and the training partners here are some of the most genuine, supportive people I've ever met. Through training at Clockwork, I've not only grown stronger and more confident, but I've also built friendships that I know will last a lifetime. It's rare to find a place in a big city that feels like family, but that's exactly what this gym is. Whether you're brand new to jiu jitsu or have years of experience, you'll feel at home here from day one. If you're looking for a place to train, learn, and be part of a truly special community, I can't recommend Clockwork enough."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            OVER 290 5 STAR REVIEWS ON GOOGLE
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-8 h-8 md:w-10 md:h-10 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Review Card */}
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900 border border-white/10 p-6 md:p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-montserrat text-base md:text-lg leading-relaxed text-gray-100 mb-6">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>

                {/* Reviewer Name */}
                <p className="font-bebas text-xl md:text-2xl tracking-wide text-white">
                  — {reviews[currentIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevReview}
              className="p-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              aria-label="Next review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Google Link */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://g.page/r/CckcuTRhONc2EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bebas text-lg tracking-wider text-white hover:text-gray-300 transition-colors duration-200 border-b-2 border-white/20 hover:border-white/40 pb-1"
            >
              <Image src="/images/google.png" alt="Google" width={24} height={24} className="w-6 h-6" />
              REVIEW US ON GOOGLE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

