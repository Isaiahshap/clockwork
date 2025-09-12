import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Clockwork Brazilian Jiu-Jitsu NYC',
  description: 'Read the latest insights, training tips, and news from Clockwork BJJ. Expert perspectives on Brazilian Jiu-Jitsu techniques, philosophy, and the NYC BJJ community.',
  keywords: [
    'clockwork bjj blog',
    'brazilian jiu jitsu articles',
    'bjj training tips nyc',
    'jiu jitsu philosophy',
    'bjj techniques',
    'manhattan bjj news',
    'clockwork bjj insights'
  ],
  openGraph: {
    title: 'Clockwork BJJ Blog | Brazilian Jiu-Jitsu Insights',
    description: 'Expert insights and training tips from NYC\'s premier BJJ academy. Read about techniques, philosophy, and the jiu-jitsu community.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Clockwork Brazilian Jiu-Jitsu',
    images: [
      {
        url: '/images/clockwork-logo.png',
        width: 1200,
        height: 630,
        alt: 'Clockwork BJJ Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clockwork BJJ Blog | BJJ Insights NYC',
    description: 'Expert insights and training tips from NYC\'s premier Brazilian Jiu-Jitsu academy.',
    images: ['/images/clockwork-logo.png']
  },
  alternates: {
    canonical: 'https://www.clockworkbjj.com/about/blog'
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

export default function BlogLayout({
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
