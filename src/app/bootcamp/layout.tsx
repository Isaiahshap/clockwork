import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BJJ Bootcamp | September 8 | Clockwork BJJ NYC',
  description:
    "September Beginners Bootcamp starts September 8th at 7:30 PM at Clockwork BJJ NYC. Last month's cohort sold out in a couple of weeks — secure your spot in our 4-week intro to BJJ.",
  keywords: ['bjj bootcamp nyc', 'brazilian jiu jitsu intensive training', 'clockwork bjj bootcamp', 'bjj workshop manhattan', 'intensive martial arts training nyc'],
  openGraph: {
    title: 'BJJ Bootcamp — September 8 | Clockwork NYC',
    description:
      'September bootcamp kicks off September 8th at 7:30 PM. Last month sold out quickly — beginner-friendly 4-week course with uniform included.',
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
    title: 'BJJ Bootcamp — September 8 | Clockwork NYC',
    description:
      'September bootcamp September 8th at 7:30 PM. Last month sold out in a couple weeks — 4-week beginners course at Clockwork BJJ.',
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
            "description": "4-week Beginners Bootcamp starting September 8th at 7:30 PM — a structured introduction to Brazilian Jiu-Jitsu",
            "startDate": "2026-09-08T19:30:00-04:00",
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
