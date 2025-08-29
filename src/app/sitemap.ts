import { MetadataRoute } from 'next'

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
]

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()
  
  // Generate static pages with current timestamp
  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
