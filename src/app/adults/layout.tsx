import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adult BJJ Classes | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'Join adult Brazilian Jiu-Jitsu classes at Clockwork BJJ NYC. All skill levels welcome - from beginner to advanced. Learn self-defense, get fit, and build confidence.',
  keywords: ['adult bjj classes nyc', 'brazilian jiu jitsu adults manhattan', 'bjj classes for adults', 'adult martial arts nyc', 'clockwork bjj adult classes'],
  openGraph: {
    title: 'Adult Brazilian Jiu-Jitsu Classes | Clockwork BJJ NYC',
    description: 'Transform your fitness and mindset with adult BJJ classes at Clockwork. Expert instruction for all levels in Manhattan\'s premier martial arts academy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/adultclasses.webp',
        width: 1200,
        height: 630,
        alt: 'Adult BJJ Training at Clockwork'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adult BJJ Classes | Clockwork NYC',
    description: 'Elite Brazilian Jiu-Jitsu training for adults. All skill levels welcome at NYC\'s top BJJ academy.',
    images: ['/images/adultclasses.webp']
  },
  alternates: {
    canonical: 'https://clockworkbjj.com/adults'
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

export default function AdultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Course/Program */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Adult Brazilian Jiu-Jitsu Classes",
            "description": "Comprehensive Brazilian Jiu-Jitsu program for adults of all skill levels",
            "provider": {
              "@type": "Organization",
              "name": "Clockwork Brazilian Jiu-Jitsu",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "650 Broadway 2nd floor",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10012",
                "addressCountry": "US"
              }
            },
            "courseMode": "onsite",
            "educationalLevel": ["Beginner", "Intermediate", "Advanced"],
            "teaches": "Brazilian Jiu-Jitsu techniques, self-defense, grappling, martial arts philosophy",
            "audience": {
              "@type": "Audience",
              "audienceType": "Adults",
              "suggestedMinAge": 16
            },
            "courseSchedule": {
              "@type": "Schedule",
              "repeatFrequency": "P1D",
              "duration": "PT60M"
            },
            "offers": {
              "@type": "AggregateOffer",
              "category": "Martial Arts Training",
              "availability": "https://schema.org/InStock"
            },
            "inLanguage": "en-US"
          })
        }}
      />
      {children}
    </>
  );
}
