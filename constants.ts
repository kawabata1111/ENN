import { Destination, Plan } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'shibuya',
    name: 'SHIBUYA',
    description: 'The heartbeat of modern youth culture. Neon chaos, hidden bars, and the rhythm of the crossing.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1988&auto=format&fit=crop'
  },
  {
    id: 'ginza',
    name: 'GINZA',
    description: 'Timeless elegance. Where minimalist architecture meets centuries of luxury tradition.',
    image: 'https://images.unsplash.com/photo-1599923588289-46297349911e?q=80&w=2187&auto=format&fit=crop'
  },
  {
    id: 'asakusa',
    name: 'ASAKUSA',
    description: 'The spiritual soul. Incense smoke, old wooden facades, and the silence behind the lantern.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'akihabara',
    name: 'AKIHABARA',
    description: 'Electric dreams. A cyber-punk reality of subculture, components, and neon innovation.',
    image: 'https://images.unsplash.com/photo-1574516856570-34827038161f?q=80&w=2071&auto=format&fit=crop'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'plan-a',
    code: 'PLAN A',
    name: 'Standard',
    price: '$300',
    description: 'A focused 4-hour immersion into a single district.',
    features: ['4 Hours', '1 Area', 'Walking Tour', 'Photography']
  },
  {
    id: 'plan-b',
    code: 'PLAN B',
    name: 'Dual Perspective',
    price: '$500',
    description: 'Contrast the old and new. Two distinct sides of the metropolis.',
    features: ['6 Hours', '2 Areas', 'Private Car', 'Dinner Reservation']
  },
  {
    id: 'plan-c',
    code: 'PLAN C',
    name: 'Omakase',
    price: '$800',
    description: 'A culinary journey culminating in an exclusive sushi counter experience.',
    features: ['5 Hours', 'Ginza Market', 'Sake Tasting', 'Michelin Sushi']
  },
  {
    id: 'plan-f',
    code: 'PLAN F',
    name: 'The ENN VIP',
    price: 'Custom',
    description: 'Unrestricted access. Helicopters, private ateliers, and hidden doors.',
    features: ['Full Day', 'All Access', 'Limousine', 'Professional Shoot']
  }
];