import { Room, PackOption } from '@/lib/types';

// Constantes de style
export const BRAND_COLOR = '#FE6022';
export const BRAND_BG_COLOR = '#FEEDEC';

// Configuration des animations
export const DEFAULT_ANIMATION_CONFIG = {
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic',
};

// Configuration des sections
export const SECTION_PADDING = 'py-16 sm:py-20 lg:py-24';
export const SECTION_CONTAINER = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
export const SECTION_HEADING = 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight';

// Configuration des espacements
export const PAGE_PADDING = {
  top: 'pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
};

// Configuration des transitions
export const TRANSITIONS = {
  all: 'transition-all duration-200',
  transform: 'transition-transform duration-500',
  colors: 'transition-colors duration-300',
};

// Configuration des hover effects
export const HOVER_EFFECTS = {
  scale: 'hover:scale-105',
  shadow: 'hover:shadow-md',
  opacity: 'hover:opacity-90',
};