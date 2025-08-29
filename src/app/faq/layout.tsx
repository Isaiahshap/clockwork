import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Clockwork BJJ NYC',
  description: 'Get answers to common questions about Brazilian Jiu-Jitsu training at Clockwork BJJ NYC. Learn about classes, pricing, what to expect, and more.',
  keywords: ['bjj faq nyc', 'brazilian jiu jitsu questions', 'clockwork bjj faq', 'bjj beginner questions', 'martial arts faq manhattan'],
  openGraph: {
    title: 'BJJ FAQ | Clockwork Brazilian Jiu-Jitsu NYC',
    description: 'Find answers to your Brazilian Jiu-Jitsu questions. Everything you need to know about training at Clockwork BJJ in Manhattan.',
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
    title: 'BJJ FAQ | Clockwork NYC',
    description: 'Get answers to your Brazilian Jiu-Jitsu questions. Everything about training at NYC\'s premier BJJ academy.',
    images: ['/images/clockwork-logo.png']
  },
  alternates: {
    canonical: 'https://www.clockworkbjj.com/faq'
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

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for FAQ Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What should I bring to my first BJJ class?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For your first class, just bring yourself! We provide loaner gis for beginners. Wear comfortable athletic clothes and bring water. We'll help you get started with everything else."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need experience to start Brazilian Jiu-Jitsu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No experience is required! Our beginner-friendly classes are designed to teach you everything from basic positions to fundamental techniques. Our instructors will guide you every step of the way."
                }
              },
              {
                "@type": "Question",
                "name": "How much do BJJ classes cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer various membership options to fit different budgets and training goals. Contact us for current pricing and membership packages. We also offer a free trial class for new students."
                }
              },
              {
                "@type": "Question",
                "name": "What ages do you teach?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We teach students of all ages! Our kids program starts at age 4, and we have separate adult classes for ages 16 and up. We also offer private training for all ages."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
