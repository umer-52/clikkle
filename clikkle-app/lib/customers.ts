import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const customersDirectory = path.join(process.cwd(), 'content', 'customers');

export interface CustomerStoryData {
  title: string;
  description: string;
  date: string;
  cover: string;
  timeToRead: number;
  author: string;
  category: string;
  featured: boolean;
  callToAction: boolean;
}

export function getCustomerStorySlugs() {
  if (!fs.existsSync(customersDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(customersDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.markdoc'))
    .map((fileName) => fileName.replace(/\.markdoc$/, ''));
}

export function getCustomerStoryBySlug(slug: string) {
  const fullPath = path.join(customersDirectory, `${slug}.markdoc`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as CustomerStoryData),
  };
}
