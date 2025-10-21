import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Reviews | Clockwork BJJ',
  description: 'Read reviews from our amazing students at Clockwork BJJ in New York City. Discover why our members love training with us.',
  openGraph: {
    title: 'Student Reviews | Clockwork BJJ',
    description: 'Read reviews from our amazing students at Clockwork BJJ in New York City.',
    type: 'website',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

