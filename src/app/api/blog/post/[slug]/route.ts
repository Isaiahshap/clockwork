import { NextResponse } from 'next/server';

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://yeshayas3.sg-host.com/wp-json/wp/v2';
const WORDPRESS_USERNAME = process.env.WORDPRESS_USERNAME;
const WORDPRESS_APP_PASSWORD = process.env.WORDPRESS_APP_PASSWORD;

function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (WORDPRESS_USERNAME && WORDPRESS_APP_PASSWORD) {
    try {
      const credentials = Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APP_PASSWORD}`).toString('base64');
      headers['Authorization'] = `Basic ${credentials}`;
    } catch (error) {
      console.warn('Failed to create WordPress authentication headers:', error);
    }
  }

  return headers;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    const url = new URL(`${WORDPRESS_API_URL}/posts`);
    url.searchParams.append('slug', slug);
    url.searchParams.append('_embed', '1');
    url.searchParams.append('status', 'publish');

    console.log('Server-side fetching post by slug:', url.toString());

    const response = await fetch(url.toString(), {
      headers: getAuthHeaders(),
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('WordPress API Error:', errorText);
      return NextResponse.json(
        { error: `Failed to fetch post: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Server-side fetched post:', data.length > 0 ? data[0].title.rendered : 'No post found');

    if (data.length === 0) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Error in blog post API route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
