import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private BJJ Training | 1-on-1 Classes | Clockwork BJJ NYC',
  description: 'Accelerate your Brazilian Jiu-Jitsu progress with private 1-on-1 training at Clockwork BJJ NYC. Personalized instruction tailored to your goals and skill level.',
  keywords: ['private bjj training nyc', 'one on one bjj lessons', 'personal bjj trainer manhattan', 'private martial arts lessons nyc', 'clockwork bjj private training'],
  openGraph: {
    title: 'Private BJJ Training | 1-on-1 Lessons | Clockwork NYC',
    description: 'Take your BJJ to the next level with personalized private training. Expert 1-on-1 instruction designed for rapid skill development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/private.webp',
        width: 1200,
        height: 630,
        alt: 'Private BJJ Training at Clockwork'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private BJJ Training | Clockwork NYC',
    description: 'Personalized 1-on-1 Brazilian Jiu-Jitsu training. Accelerate your progress with expert private instruction.',
    images: ['/images/private.webp']
  },
  alternates: {
    canonical: 'https://www.clockworkbjj.com/private-training'
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

export default function PrivateTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Private Brazilian Jiu-Jitsu Training",
            "description": "One-on-one personalized Brazilian Jiu-Jitsu instruction for accelerated learning",
            "provider": {
              "@type": "Organization",
              "name": "Clockwork Brazilian Jiu-Jitsu"
            },
            "serviceType": "Personal Training",
            "areaServed": {
              "@type": "City",
              "name": "New York",
              "addressRegion": "NY"
            },
            "offers": {
              "@type": "Offer",
              "category": "Private Martial Arts Instruction",
              "availability": "https://schema.org/InStock"
            },
            "additionalType": "https://schema.org/Course",
            "audience": {
              "@type": "Audience",
              "audienceType": "All skill levels"
            },
            "teaches": "Personalized Brazilian Jiu-Jitsu techniques, competition preparation, specific skill development",
            "benefits": "Accelerated learning, personalized attention, customized curriculum, flexible scheduling"
          })
        }}
      />
      {children}
    </>
  );
}
