import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8080/wp-json/wp/v2';

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  link: string;
  excerpt: {
    rendered: string;
  };
}

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  link: string;
}

/**
 * Obtener todas las páginas de WordPress
 */
export async function getPages(): Promise<WordPressPage[]> {
  try {
    const response = await axios.get(`${API_URL}/pages?per_page=100`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

/**
 * Obtener una página por slug
 */
export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await axios.get(`${API_URL}/pages?slug=${slug}`);
    return response.data[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

/**
 * Obtener todas las entradas del blog
 */
export async function getPosts(limit = 10): Promise<WordPressPost[]> {
  try {
    const response = await axios.get(`${API_URL}/posts?per_page=${limit}&_embed`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Obtener una entrada por slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await axios.get(`${API_URL}/posts?slug=${slug}`);
    return response.data[0] || null;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}
