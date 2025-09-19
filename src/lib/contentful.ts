import { createClient, Entry, Asset } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export interface ContentfulProject {
  sys: { id: string };
  fields: {
    name: string;
    description: string;
    projectUrl?: string;
    repositoryUrl?: string;
    slug: string;
    logo?: Asset;
    technologies?: string[];
    featured?: boolean;
  };
}

export interface ContentfulAbout {
  sys: { id: string };
  fields: {
    name: string;
    description: string;
    aboutMe: {
      content: any[];
      data: any;
      nodeType: string;
    };
    profileImage?: Asset;
    skills?: string[];
    experience?: string;
  };
}

export interface ContentfulService {
  sys: { id: string };
  fields: {
    title: string;
    description: string;
    icon?: string;
    features: string[];
    price?: string;
  };
}

export interface ContentfulTestimonial {
  sys: { id: string };
  fields: {
    name: string;
    company: string;
    content: string;
    avatar?: Asset;
    rating: number;
  };
}

export const getProjects = async (): Promise<ContentfulProject[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'project',
      order: ['-sys.createdAt'],
    });
    return response.items as unknown as ContentfulProject[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getAbout = async (): Promise<ContentfulAbout | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'about',
      limit: 1,
    });
    return (response.items[0] as unknown as ContentfulAbout) || null;
  } catch (error) {
    console.error('Error fetching about:', error);
    return null;
  }
};

export const getServices = async (): Promise<ContentfulService[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'service',
      order: ['sys.createdAt'],
    });
    return response.items as unknown as ContentfulService[];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const getTestimonials = async (): Promise<ContentfulTestimonial[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'testimonial',
      order: ['-sys.createdAt'],
    });
    return response.items as unknown as ContentfulTestimonial[];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

export const getAssetUrl = (asset: Asset): string => {
  return `https:${asset.fields.file?.url || ''}`;
};

export default client;
