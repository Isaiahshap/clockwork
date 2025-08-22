import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kids BJJ Classes | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'Fun and safe Brazilian Jiu-Jitsu classes for kids in NYC. Build confidence, discipline, and fitness while learning self-defense. Ages 4-15 welcome at Clockwork BJJ.',
  keywords: ['kids bjj classes nyc', 'children brazilian jiu jitsu manhattan', 'kids martial arts nyc', 'youth bjj classes', 'clockwork bjj kids'],
  openGraph: {
    title: 'Kids Brazilian Jiu-Jitsu Classes | Clockwork BJJ NYC',
    description: 'Give your child the gift of confidence and discipline with kids BJJ classes at Clockwork. Safe, fun, and educational martial arts for children in Manhattan.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/kidsclasses.webp',
        width: 1200,
        height: 630,
        alt: 'Kids BJJ Training at Clockwork'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kids BJJ Classes | Clockwork NYC',
    description: 'Safe, fun Brazilian Jiu-Jitsu classes for children. Build confidence and character at NYC\'s premier BJJ academy.',
    images: ['/images/kidsclasses.webp']
  },
  alternates: {
    canonical: 'https://clockworkbjj.com/kids-classes'
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

export default function KidsClassesLayout({
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
            "name": "Kids Brazilian Jiu-Jitsu Classes",
            "description": "Age-appropriate Brazilian Jiu-Jitsu program designed specifically for children",
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
            "educationalLevel": "Beginner",
            "teaches": "Brazilian Jiu-Jitsu fundamentals, discipline, respect, self-confidence, physical fitness",
            "audience": {
              "@type": "Audience",
              "audienceType": "Children",
              "suggestedMinAge": 4,
              "suggestedMaxAge": 15
            },
            "courseSchedule": {
              "@type": "Schedule",
              "repeatFrequency": "P1D",
              "duration": "PT45M"
            },
            "offers": {
              "@type": "AggregateOffer",
              "category": "Youth Martial Arts Training",
              "availability": "https://schema.org/InStock"
            },
            "inLanguage": "en-US",
            "benefits": "Character development, physical fitness, self-defense skills, discipline"
          })
        }}
      />
      {children}
    </>
  );
}
