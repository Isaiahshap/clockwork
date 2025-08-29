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
    canonical: 'https://www.clockworkbjj.com/contact'
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
      {/* Contact page inherits business schema from root layout */}
      {children}
    </>
  );
}
