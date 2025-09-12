'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  getAllPosts, 
  WordPressPost, 
  getFeaturedImage, 
  getPostCategories, 
  formatDate, 
  createExcerpt 
} from '@/lib/wordpress';

export default function BlogPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {/* Hero Background Image */}
          <Image
            src="/images/Clockwork5.webp"
            alt="Clockwork BJJ Blog"
            fill
            priority
            className="object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
                CLOCKWORK BLOG
              </h1>
              <p className="font-montserrat text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
                Insights, techniques, and stories from the mat
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {loading && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2">
                <motion.div 
                  className="rounded-full h-8 w-8 border-b-2 border-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span className="font-montserrat text-lg">Loading blog posts...</span>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-red-900/20 border border-red-700 p-8 max-w-lg mx-auto">
                <h3 className="font-bebas text-2xl text-red-400 mb-4">Error Loading Posts</h3>
                <p className="font-montserrat text-red-300">{error}</p>
              </div>
            </motion.div>
          )}

          {!loading && !error && posts.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bebas text-3xl mb-4">No Posts Yet</h3>
              <p className="font-montserrat text-gray-400">Check back soon for our latest insights and training tips!</p>
            </motion.div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const featuredImage = getFeaturedImage(post);
                const categories = getPostCategories(post);
                const excerpt = createExcerpt(post.excerpt.rendered || post.content.rendered, 120);

                return (
                  <motion.article
                    key={post.id}
                    className="bg-black/20 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/about/blog/${post.slug}`}>
                      <div className="cursor-pointer">
                        {/* Featured Image */}
                        <div className="relative h-48 overflow-hidden">
                          {featuredImage ? (
                            <Image
                              src={featuredImage.url}
                              alt={featuredImage.alt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                              <div className="font-bebas text-2xl text-gray-400 tracking-wider">CLOCKWORK</div>
                            </div>
                          )}
                          {/* Categories Overlay */}
                          {categories.length > 0 && (
                            <div className="absolute top-4 left-4">
                              <span 
                                className="bg-white text-black px-2 py-1 text-xs font-montserrat font-semibold"
                                dangerouslySetInnerHTML={{ __html: categories[0] }}
                              />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Date */}
                          <div className="font-montserrat text-sm text-gray-400 mb-2">
                            {formatDate(post.date)}
                          </div>

                          {/* Title */}
                          <h2 
                            className="font-bebas text-xl md:text-2xl tracking-wide mb-3 group-hover:text-gray-300 transition-colors duration-300"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />

                          {/* Excerpt */}
                          <p className="font-montserrat text-gray-300 text-sm leading-relaxed mb-4">
                            {excerpt}
                          </p>

                          {/* Read More */}
                          <div className="flex items-center font-montserrat text-sm text-white group-hover:text-gray-300 transition-colors duration-300">
                            <span className="mr-2">Read More</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          )}

          {/* CTA Section */}
          {!loading && !error && (
            <motion.div 
              className="text-center mt-20 pt-16 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="font-bebas text-3xl md:text-4xl mb-4 tracking-wider">
                Ready to Start Training?
              </h3>
              <p className="font-montserrat text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community and experience the precision, technique, and camaraderie that define Clockwork BJJ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/free-trial" 
                  className="font-bebas inline-block bg-white text-black px-8 py-4 text-xl tracking-wider hover:bg-gray-200 transition-colors duration-200"
                >
                  START FREE CLASS
                </Link>
                <Link 
                  href="/contact" 
                  className="font-bebas inline-block bg-transparent text-white border border-white px-8 py-4 text-xl tracking-wider hover:bg-white/10 transition-colors duration-200"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
