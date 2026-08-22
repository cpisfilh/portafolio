import type { ImageMetadata } from "astro";

export interface Project {
  image: ImageMetadata;
  title: string;
  description: string;
  url: string;
  private: boolean;
  technologies: string[];
  challenges: string;
}
