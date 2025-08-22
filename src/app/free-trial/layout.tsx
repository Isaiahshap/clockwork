import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Trial Class | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'Start your Brazilian Jiu-Jitsu journey with a FREE trial class at Clockwork BJJ NYC. No experience needed. Book your complimentary adult or kids BJJ class today.',
  keywords: ['free bjj trial nyc', 'free brazilian jiu jitsu class', 'bjj trial class manhattan', 'free martial arts trial nyc', 'clockwork bjj free trial'],
  openGraph: {
    title: 'Free BJJ Trial Class | Clockwork Brazilian Jiu-Jitsu NYC',
    description: 'Experience world-class Brazilian Jiu-Jitsu training for FREE! Book your complimentary trial class at Clockwork BJJ in Manhattan. All skill levels welcome.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'BJJ Training at Clockwork'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free BJJ Trial Class | Clockwork NYC',
    description: 'Try Brazilian Jiu-Jitsu for FREE at NYC\'s premier BJJ academy. Book your complimentary class today!',
    images: ['/images/hero-bg.webp']
  },
  alternates: {
    canonical: 'https://clockworkbjj.com/free-trial'
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

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Course/Event */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Free Brazilian Jiu-Jitsu Trial Class",
            "description": "Complimentary Brazilian Jiu-Jitsu trial class for beginners and experienced practitioners",
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
            "teaches": "Brazilian Jiu-Jitsu fundamentals, self-defense, martial arts techniques",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "category": "Free Trial"
            },
            "isAccessibleForFree": true,
            "inLanguage": "en-US"
          })
        }}
      />
      {children}
    </>
  );
}
