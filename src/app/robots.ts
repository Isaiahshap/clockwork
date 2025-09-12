import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.clockworkbjj.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        
        // Environment and configuration files
        '/.env*',
        '/.env.local',
        '/.env.development',
        '/.env.production',
        '/package*.json',
        '/next.config.*',
        '/tailwind.config.*',
        '/tsconfig.*',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
