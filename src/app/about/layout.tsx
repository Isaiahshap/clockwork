import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'Learn about Clockwork BJJ, NYC\'s premier Brazilian Jiu-Jitsu academy. Meet our expert instructors and discover our philosophy of technical excellence and community.',
  keywords: ['about clockwork bjj', 'brazilian jiu jitsu academy nyc', 'bjj instructors manhattan', 'clockwork bjj story', 'bjj gym philosophy nyc'],
  openGraph: {
    title: 'About Clockwork BJJ | Brazilian Jiu-Jitsu Academy NYC',
    description: 'Discover the story behind NYC\'s premier BJJ academy. Expert instruction, welcoming community, and a commitment to technical excellence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/gym-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Clockwork BJJ Academy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Clockwork BJJ | NYC Academy',
    description: 'The story of NYC\'s premier Brazilian Jiu-Jitsu academy. Expert instruction and welcoming community.',
    images: ['/images/gym-building.jpg']
  },
  alternates: {
    canonical: 'https://www.clockworkbjj.com/about'
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
