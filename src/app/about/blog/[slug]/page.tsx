'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  getPostBySlug, 
  WordPressPost, 
  getFeaturedImage, 
  getPostCategories, 
  getPostTags, 
  formatDate 
} from '@/lib/wordpress';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        setLoading(true);
        const fetchedPost = await getPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Blog post not found.');
        }
      } catch (err) {
        setError('Failed to load blog post. Please try again later.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main>
          <div className="min-h-screen flex items-center justify-center" style={{ marginTop: 'var(--navbar-height)' }}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span className="font-montserrat text-lg">Loading post...</span>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <main>
          <div className="min-h-screen flex items-center justify-center px-4" style={{ marginTop: 'var(--navbar-height)' }}>
            <motion.div
              className="text-center max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-red-900/20 border border-red-700 p-8">
                <h1 className="font-bebas text-3xl text-red-400 mb-4">Post Not Found</h1>
                <p className="font-montserrat text-red-300 mb-6">
                  {error || 'The blog post you\'re looking for doesn\'t exist.'}
                </p>
                <Link 
                  href="/about/blog" 
                  className="font-bebas inline-block bg-white text-black px-6 py-3 text-lg tracking-wider hover:bg-gray-200 transition-colors duration-200"
                >
                  Back to Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const featuredImage = getFeaturedImage(post);
  const categories = getPostCategories(post);
  const tags = getPostTags(post);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section with Featured Image */}
        <section className="relative h-[50vh] w-full overflow-hidden" style={{ marginTop: 'var(--navbar-height)' }}>
          {featuredImage ? (
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
          )}
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Categories */}
                {categories.length > 0 && (
                  <div className="mb-4">
                    {categories.map((category, index) => (
                      <motion.span 
                        key={index}
                        className="bg-white text-black px-3 py-1 text-sm font-montserrat font-semibold mr-2 inline-block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        dangerouslySetInnerHTML={{ __html: category }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Title */}
                <h1 
                  className="font-bebas text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-4 max-w-4xl"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                {/* Date */}
                <p className="font-montserrat text-lg text-white/80">
                  {formatDate(post.date)}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
              <nav className="flex items-center space-x-2 font-montserrat text-sm text-gray-400">
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About
              </Link>
              <span>/</span>
              <Link href="/about/blog" className="hover:text-white transition-colors duration-200">
                Blog
              </Link>
              <span>/</span>
              <span 
                className="text-white"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </nav>
          </motion.div>

          {/* Article Body */}
          <motion.div
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div 
              className="font-montserrat leading-relaxed text-lg
                [&>p]:mb-8 [&>p]:text-gray-100 [&>p]:leading-relaxed
                [&>p>a]:text-white [&>p>a]:underline [&>p>a]:decoration-2 [&>p>a]:underline-offset-2 [&>p>a]:decoration-white/80 [&>p>a]:transition-all [&>p>a]:duration-300 [&>p>a]:font-medium
                [&>p>a:hover]:decoration-white [&>p>a:hover]:text-gray-200 [&>p>a:hover]:decoration-3 [&>p>a:hover]:underline-offset-4
                [&>p>strong>a]:text-white [&>p>strong>a]:underline [&>p>strong>a]:decoration-2 [&>p>strong>a]:underline-offset-2 [&>p>strong>a]:decoration-white/80 [&>p>strong>a]:transition-all [&>p>strong>a]:duration-300 [&>p>strong>a]:font-semibold
                [&>p>strong>a:hover]:decoration-white [&>p>strong>a:hover]:underline-offset-4
                [&>p>b>a]:text-white [&>p>b>a]:underline [&>p>b>a]:decoration-2 [&>p>b>a]:underline-offset-2 [&>p>b>a]:decoration-white/80 [&>p>b>a]:transition-all [&>p>b>a]:duration-300 [&>p>b>a]:font-semibold
                [&>p>b>a:hover]:decoration-white [&>p>b>a:hover]:underline-offset-4
                
                [&>h1]:font-bebas [&>h1]:text-5xl [&>h1]:tracking-wide [&>h1]:mt-16 [&>h1]:mb-8 [&>h1]:text-white [&>h1]:border-b [&>h1]:border-white/20 [&>h1]:pb-4
                [&>h2]:font-bebas [&>h2]:text-4xl [&>h2]:tracking-wide [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-white [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-3
                [&>h3]:font-bebas [&>h3]:text-3xl [&>h3]:tracking-wide [&>h3]:mt-12 [&>h3]:mb-5 [&>h3]:text-white
                [&>h4]:font-bebas [&>h4]:text-2xl [&>h4]:tracking-wide [&>h4]:mt-10 [&>h4]:mb-4 [&>h4]:text-gray-200
                [&>h5]:font-montserrat [&>h5]:text-xl [&>h5]:font-bold [&>h5]:mt-8 [&>h5]:mb-3 [&>h5]:text-gray-200
                [&>h6]:font-montserrat [&>h6]:text-lg [&>h6]:font-bold [&>h6]:mt-6 [&>h6]:mb-2 [&>h6]:text-gray-300
                
                [&>h1>a]:text-white [&>h1>a]:underline [&>h1>a]:decoration-2 [&>h1>a]:underline-offset-2 [&>h1>a]:decoration-white/80 [&>h1>a]:transition-all [&>h1>a]:duration-300
                [&>h2>a]:text-white [&>h2>a]:underline [&>h2>a]:decoration-2 [&>h2>a]:underline-offset-2 [&>h2>a]:decoration-white/80 [&>h2>a]:transition-all [&>h2>a]:duration-300
                [&>h3>a]:text-white [&>h3>a]:underline [&>h3>a]:decoration-2 [&>h3>a]:underline-offset-2 [&>h3>a]:decoration-white/80 [&>h3>a]:transition-all [&>h3>a]:duration-300
                [&>h4>a]:text-gray-200 [&>h4>a]:underline [&>h4>a]:decoration-2 [&>h4>a]:underline-offset-2 [&>h4>a]:decoration-white/80 [&>h4>a]:transition-all [&>h4>a]:duration-300
                [&>h5>a]:text-gray-200 [&>h5>a]:underline [&>h5>a]:decoration-2 [&>h5>a]:underline-offset-2 [&>h5>a]:decoration-white/80 [&>h5>a]:transition-all [&>h5>a]:duration-300
                [&>h6>a]:text-gray-300 [&>h6>a]:underline [&>h6>a]:decoration-2 [&>h6>a]:underline-offset-2 [&>h6>a]:decoration-white/80 [&>h6>a]:transition-all [&>h6>a]:duration-300
                
                [&>h1>a:hover]:decoration-white [&>h1>a:hover]:underline-offset-4
                [&>h2>a:hover]:decoration-white [&>h2>a:hover]:underline-offset-4
                [&>h3>a:hover]:decoration-white [&>h3>a:hover]:underline-offset-4
                [&>h4>a:hover]:decoration-white [&>h4>a:hover]:underline-offset-4
                [&>h5>a:hover]:decoration-white [&>h5>a:hover]:underline-offset-4
                [&>h6>a:hover]:decoration-white [&>h6>a:hover]:underline-offset-4
                
                [&>a]:text-white [&>a]:underline [&>a]:decoration-2 [&>a]:underline-offset-2 [&>a]:decoration-white/80 [&>a]:transition-all [&>a]:duration-300 [&>a]:font-medium
                [&>a:hover]:decoration-white [&>a:hover]:text-gray-200 [&>a:hover]:decoration-3 [&>a:hover]:underline-offset-4
                
                [&>blockquote]:border-l-4 [&>blockquote]:border-white/30 [&>blockquote]:pl-8 [&>blockquote]:py-4 [&>blockquote]:italic [&>blockquote]:text-gray-200 [&>blockquote]:bg-black/20 [&>blockquote]:my-8 [&>blockquote]:text-xl
                
                [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:my-6 [&>ul]:space-y-3
                [&>ol]:list-decimal [&>ol]:pl-8 [&>ol]:my-6 [&>ol]:space-y-3
                [&>li]:text-gray-100 [&>li]:leading-relaxed
                
                [&>img]:rounded-lg [&>img]:border [&>img]:border-white/10 [&>img]:my-12 [&>img]:shadow-2xl [&>img]:shadow-black/50
                [&>figure]:my-12
                
                [&>strong]:text-white [&>strong]:font-semibold
                [&>em]:text-gray-300 [&>em]:italic
                
                [&>strong>a]:text-white [&>strong>a]:underline [&>strong>a]:decoration-2 [&>strong>a]:underline-offset-2 [&>strong>a]:decoration-white/80 [&>strong>a]:transition-all [&>strong>a]:duration-300 [&>strong>a]:font-semibold
                [&>strong>a:hover]:decoration-white [&>strong>a:hover]:underline-offset-4
                [&>b>a]:text-white [&>b>a]:underline [&>b>a]:decoration-2 [&>b>a]:underline-offset-2 [&>b>a]:decoration-white/80 [&>b>a]:transition-all [&>b>a]:duration-300 [&>b>a]:font-semibold
                [&>b>a:hover]:decoration-white [&>b>a:hover]:underline-offset-4
                [&>em>a]:text-gray-300 [&>em>a]:underline [&>em>a]:decoration-2 [&>em>a]:underline-offset-2 [&>em>a]:decoration-white/80 [&>em>a]:transition-all [&>em>a]:duration-300 [&>em>a]:italic
                [&>em>a:hover]:decoration-white [&>em>a:hover]:underline-offset-4
                [&>i>a]:text-gray-300 [&>i>a]:underline [&>i>a]:decoration-2 [&>i>a]:underline-offset-2 [&>i>a]:decoration-white/80 [&>i>a]:transition-all [&>i>a]:duration-300 [&>i>a]:italic
                [&>i>a:hover]:decoration-white [&>i>a:hover]:underline-offset-4
                
                [&>code]:bg-gray-800 [&>code]:text-gray-200 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-base [&>code]:font-mono
                [&>pre]:bg-gray-900 [&>pre]:border [&>pre]:border-white/10 [&>pre]:rounded-lg [&>pre]:p-6 [&>pre]:my-8 [&>pre]:overflow-x-auto
                [&>pre>code]:bg-transparent [&>pre>code]:p-0
                
                [&>table]:w-full [&>table]:my-8 [&>table]:border-collapse
                [&>th]:border [&>th]:border-white/20 [&>th]:bg-white/5 [&>th]:p-4 [&>th]:text-left [&>th]:font-bebas [&>th]:tracking-wide [&>th]:text-lg
                [&>td]:border [&>td]:border-white/10 [&>td]:p-4 [&>td]:text-gray-200
                
                [&>hr]:border-white/20 [&>hr]:my-12"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </motion.div>

          {/* Tags */}
          {tags.length > 0 && (
            <motion.div
              className="mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-bebas text-xl tracking-wide mb-4">TAGS</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="bg-black/40 border border-white/20 text-gray-300 px-3 py-1 text-sm font-montserrat hover:bg-white/10 transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    dangerouslySetInnerHTML={{ __html: tag }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href="/about/blog" 
              className="font-bebas inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200 text-lg tracking-wide"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </motion.div>
        </article>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 border-t border-white/10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="font-bebas text-3xl md:text-4xl mb-4 tracking-wider">
              Ready to Start Training?
            </h3>
            <p className="font-montserrat text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the precision, technique, and community that define Clockwork BJJ.
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
        </section>
      </main>
      <Footer />
    </>
  );
}
