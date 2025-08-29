import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BJJ Bootcamp | Intensive Training | Clockwork BJJ NYC',
  description: 'Join our intensive Brazilian Jiu-Jitsu bootcamp at Clockwork BJJ NYC. Accelerate your skills with focused training sessions designed for rapid improvement.',
  keywords: ['bjj bootcamp nyc', 'brazilian jiu jitsu intensive training', 'clockwork bjj bootcamp', 'bjj workshop manhattan', 'intensive martial arts training nyc'],
  openGraph: {
    title: 'BJJ Bootcamp | Intensive Training | Clockwork NYC',
    description: 'Accelerate your BJJ journey with our intensive bootcamp program. Focused training for rapid skill development at NYC\'s premier academy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/hero-bg3.webp',
        width: 1200,
        height: 630,
        alt: 'BJJ Bootcamp Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BJJ Bootcamp | Clockwork NYC',
    description: 'Intensive Brazilian Jiu-Jitsu training for accelerated skill development. Join our bootcamp program.',
    images: ['/images/hero-bg3.webp']
  },
  alternates: {
    canonical: 'https://www.clockworkbjj.com/bootcamp'
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

export default function BootcampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Event/Workshop */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Brazilian Jiu-Jitsu Bootcamp",
            "description": "Intensive Brazilian Jiu-Jitsu training program designed for accelerated skill development",
            "organizer": {
              "@type": "Organization",
              "name": "Clockwork Brazilian Jiu-Jitsu"
            },
            "location": {
              "@type": "Place",
              "name": "Clockwork BJJ",
              "address": "650 Broadway, 2nd Floor\nNew York City, NY 10012\nUSA"
            },
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "audience": {
              "@type": "Audience",
              "audienceType": "BJJ practitioners seeking intensive training"
            },
            "about": "Brazilian Jiu-Jitsu intensive training workshop",
            "teaches": "Advanced BJJ techniques, strategy, conditioning, competition preparation"
          })
        }}
      />
      {children}
    </>
  );
}
