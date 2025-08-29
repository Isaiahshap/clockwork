import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Schedule | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'View the complete class schedule for Clockwork BJJ in NYC. Find the perfect time for your Brazilian Jiu-Jitsu training with classes throughout the week.',
  keywords: ['bjj schedule nyc', 'brazilian jiu jitsu class times', 'clockwork bjj schedule', 'bjj classes manhattan times', 'martial arts schedule nyc'],
  openGraph: {
    title: 'BJJ Class Schedule | Clockwork Brazilian Jiu-Jitsu NYC',
    description: 'Find your perfect training time with our comprehensive class schedule. Multiple BJJ classes daily at NYC\'s premier martial arts academy.',
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
    title: 'BJJ Class Schedule | Clockwork NYC',
    description: 'Find your perfect training time. Comprehensive BJJ class schedule at NYC\'s premier academy.',
    images: ['/images/clockwork-logo.png']
  },
  alternates: {
    canonical: 'https://www.clockworkbjj.com/schedule'
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

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for Schedule */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Schedule",
            "name": "Clockwork BJJ Class Schedule",
            "description": "Weekly Brazilian Jiu-Jitsu class schedule offering morning, afternoon, and evening training sessions",
            "scheduleTimezone": "America/New_York",
            "byDay": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "06:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification", 
                "dayOfWeek": "Tuesday",
                "opens": "06:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Wednesday", 
                "opens": "06:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Thursday",
                "opens": "06:00", 
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
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
            "organizer": {
              "@type": "Organization",
              "name": "Clockwork Brazilian Jiu-Jitsu"
            }
          })
        }}
      />
      {children}
    </>
  );
}
