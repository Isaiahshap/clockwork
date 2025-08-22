import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'Get in touch with Clockwork BJJ in New York City. Call, email, or message us on social media for questions about Brazilian Jiu-Jitsu classes, training, and memberships.',
  keywords: ['contact bjj nyc', 'brazilian jiu jitsu contact', 'clockwork bjj contact', 'bjj gym nyc contact', 'martial arts contact nyc'],
  openGraph: {
    title: 'Contact Clockwork BJJ | Brazilian Jiu-Jitsu NYC',
    description: 'Ready to start your BJJ journey? Contact Clockwork Brazilian Jiu-Jitsu in NYC. Multiple ways to reach us - call, email, or DM us on social media.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/clockwork-logo.png',
        width: 1200,
        height: 630,
        alt: 'Clockwork BJJ Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Clockwork BJJ | Brazilian Jiu-Jitsu NYC',
    description: 'Get in touch with NYC\'s premier BJJ gym. Call, email, or message us about classes and training.',
    images: ['/images/clockwork-logo.png']
  },
  alternates: {
    canonical: 'https://clockworkbjj.com/contact'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "Clockwork Brazilian Jiu-Jitsu",
            "description": "Premier Brazilian Jiu-Jitsu academy in New York City offering classes for all skill levels",
            "telephone": "+1-212-675-0300",
            "email": "info@clockworkbjj.com",
            "url": "https://clockworkbjj.com",
            "address": {
              "@type": "PostalAddress",
                              "streetAddress": "650 Broadway 2nd floor",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10012",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.7266",
              "longitude": "-73.9961"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "06:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "15:00"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-212-675-0300",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            ],
            "sameAs": [
              "https://instagram.com/clockworkbjj",
              "https://www.facebook.com/Clockwork.BJJ.NYC/",
              "https://youtube.com/clockworkbjj"
            ]
          })
        }}
      />
      {children}
    </>
  );
}
