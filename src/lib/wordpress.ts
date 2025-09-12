const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://yeshayas3.sg-host.com/wp-json/wp/v2';
const WORDPRESS_USERNAME = process.env.WORDPRESS_USERNAME;
const WORDPRESS_APP_PASSWORD = process.env.WORDPRESS_APP_PASSWORD;

/**
 * Get authentication headers for WordPress API
 */
function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (WORDPRESS_USERNAME && WORDPRESS_APP_PASSWORD) {
    const credentials = Buffer.from(`${WORDPRESS_USERNAME}:${WORDPRESS_APP_PASSWORD}`).toString('base64');
    headers['Authorization'] = `Basic ${credentials}`;
  }

  return headers;
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, unknown>;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
        sizes: {
          [key: string]: {
            file: string;
            width: number;
            height: number;
            source_url: string;
          };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    author?: Array<{
      id: number;
      name: string;
      slug: string;
      description: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
  };
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WordPressTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

/**
 * Fetch all blog posts with embedded data
 */
export async function getAllPosts(limit?: number): Promise<WordPressPost[]> {
  try {
    const url = new URL(`${WORDPRESS_API_URL}/posts`);
    url.searchParams.append('_embed', '1');
    url.searchParams.append('status', 'publish');
    if (limit) {
      url.searchParams.append('per_page', limit.toString());
    }

    const response = await fetch(url.toString(), {
      headers: getAuthHeaders(),
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const url = new URL(`${WORDPRESS_API_URL}/posts`);
    url.searchParams.append('slug', slug);
    url.searchParams.append('_embed', '1');
    url.searchParams.append('status', 'publish');

    const response = await fetch(url.toString(), {
      headers: getAuthHeaders(),
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const url = new URL(`${WORDPRESS_API_URL}/posts`);
    url.searchParams.append('per_page', '100'); // Adjust as needed
    url.searchParams.append('status', 'publish');

    const response = await fetch(url.toString(), {
      headers: getAuthHeaders(),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post slugs: ${response.status}`);
    }

    const posts = await response.json();
    return posts.map((post: WordPressPost) => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

/**
 * Get categories for a post
 */
export function getPostCategories(post: WordPressPost): string[] {
  if (!post._embedded?.['wp:term']?.[0]) return [];
  return post._embedded['wp:term'][0]
    .filter(term => term.taxonomy === 'category')
    .map(category => category.name);
}

/**
 * Get tags for a post
 */
export function getPostTags(post: WordPressPost): string[] {
  if (!post._embedded?.['wp:term']?.[1]) return [];
  return post._embedded['wp:term'][1]
    .filter(term => term.taxonomy === 'post_tag')
    .map(tag => tag.name);
}

/**
 * Get featured image URL for a post
 */
export function getFeaturedImage(post: WordPressPost): {
  url: string;
  alt: string;
  width: number;
  height: number;
} | null {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  if (!featuredMedia) return null;

  return {
    url: featuredMedia.source_url,
    alt: featuredMedia.alt_text || post.title.rendered,
    width: featuredMedia.media_details.width,
    height: featuredMedia.media_details.height,
  };
}

/**
 * Format WordPress date to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Strip HTML tags and create excerpt
 */
export function createExcerpt(content: string, maxLength: number = 150): string {
  const stripped = content.replace(/<[^>]*>/g, '');
  if (stripped.length <= maxLength) return stripped;
  return stripped.substring(0, maxLength).trim() + '...';
}
