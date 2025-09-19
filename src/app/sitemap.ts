import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/wordpress'

// Base URL - update this to your production domain
const baseUrl = 'https://www.clockworkbjj.com'

// Static pages configuration
const staticPages = [
  {
    url: '',
    priority: 1.0,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/about',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/contact',
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/free-trial',
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/adults',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/kids-classes',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/private-training',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/schedule',
    priority: 0.7,
    changeFrequency: 'daily' as const,
  },
  {
    url: '/faq',
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/bootcamp',
    priority: 0.7,
    changeFrequency: 'weekly' as const,
  },
  {
    url: '/instructors',
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    url: '/privacy-policy',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    url: '/terms',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    url: '/accessibility',
    priority: 0.3,
    changeFrequency: 'yearly' as const,
  },
  {
    url: '/about/blog',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString()
  
  // Generate static pages with current timestamp
  const staticSitemapEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Fetch blog post slugs dynamically
  let blogPostEntries: MetadataRoute.Sitemap = []
  try {
    const postSlugs = await getAllPostSlugs()
    blogPostEntries = postSlugs.map((slug) => ({
      url: `${baseUrl}/about/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    // Continue without blog posts if there's an error
  }

  return [...staticSitemapEntries, ...blogPostEntries]
}
