'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Review {
  reviewer: {
    displayName: string;
  };
  starRating: 'FIVE' | 'FOUR' | 'THREE' | 'TWO' | 'ONE';
  comment?: string;
  createTime: string;
}

interface ReviewsData {
  reviews: Review[];
}

const StarIcon = () => (
  <svg 
    className="w-5 h-5 fill-current text-yellow-400" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const StarRating = ({ rating }: { rating: string }) => {
  const ratingMap: { [key: string]: number } = {
    'FIVE': 5,
    'FOUR': 4,
    'THREE': 3,
    'TWO': 2,
    'ONE': 1,
  };
  
  const stars = ratingMap[rating] || 5;
  
  return (
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(50);

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json())
      .then((data: ReviewsData) => {
        // Sort by date (newest first) and filter out reviews without names
        const sortedReviews = data.reviews
          .filter((review) => review?.reviewer?.displayName)
          .sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());
        setReviews(sortedReviews);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading reviews:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] w-full overflow-hidden bg-gradient-to-br from-black via-zinc-800 to-zinc-950 flex items-center justify-center" 
          style={{ marginTop: 'var(--navbar-height)' }}
        >
          <motion.h1 
            className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            STUDENT REVIEWS
          </motion.h1>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl mb-4 tracking-wider">
              SOME OF OUR REVIEWS FROM OUR AMAZING STUDENTS
            </h2>
            <p className="font-montserrat text-lg text-gray-400 max-w-3xl mx-auto">
              Read what our community has to say about their experience training at Clockwork BJJ
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-20">
              <p className="font-montserrat text-xl text-gray-400">Loading reviews...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                {reviews
                  .slice(0, displayCount)
                  .map((review, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br from-black/40 to-black/20 border border-white/10 p-6 rounded-lg hover:border-white/30 transition-all duration-300 flex flex-col ${!review.comment ? 'h-fit' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: Math.min(0.3 + index * 0.02, 1) }}
                    >
                      {/* Name */}
                      <h3 className="font-bebas text-2xl tracking-wide mb-3">
                        {review.reviewer.displayName}
                      </h3>
                      
                      {/* Stars */}
                      <div className="mb-4">
                        <StarRating rating={review.starRating} />
                      </div>
                      
                      {/* Review Text */}
                      {review.comment && (
                        <p className="font-montserrat text-sm leading-relaxed text-gray-300 mb-4">
                          {review.comment}
                        </p>
                      )}
                      
                      {/* Date */}
                      <p className="font-montserrat text-xs text-gray-500 mt-auto">
                        {new Date(review.createTime).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </motion.div>
                  ))}
              </div>
              
              {/* Load More Button */}
              {displayCount < reviews.length && (
                <motion.div 
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setDisplayCount(prev => prev + 50)}
                    className="font-bebas bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
                  >
                    LOAD MORE REVIEWS
                  </button>
                  <p className="font-montserrat text-sm text-gray-500 mt-4">
                    Showing {displayCount} of {reviews.length} reviews
                  </p>
                </motion.div>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

