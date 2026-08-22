import type { SvgComponent } from "astro/types";

interface StackItem {
  title: string;
  logo: SvgComponent & ImageMetadata;
}

export interface Stack {
  frontend?: StackItem[];
  backend?: StackItem[];
  database?: StackItem[];
  styles?: StackItem[];
  languages?: StackItem[];
}
