import { Destination, Plan } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'shibuya',
    name: 'SHIBUYA',
    description: 'The heartbeat of modern youth culture. Neon chaos, hidden bars, and the rhythm of the crossing.',
    image: '/images/shibuya.jpg'
  },
  {
    id: 'ginza',
    name: 'GINZA',
    description: 'Timeless elegance. Where minimalist architecture meets centuries of luxury tradition.',
    image: '/images/ginza.jpg'
  },
  {
    id: 'asakusa',
    name: 'ASAKUSA',
    description: 'The spiritual soul. Incense smoke, old wooden facades, and the silence behind the lantern.',
    image: '/images/asakusa.jpg'
  },
  {
    id: 'akihabara',
    name: 'AKIHABARA',
    description: 'Electric dreams. A cyber-punk reality of subculture, components, and neon innovation.',
    image: '/images/akihabara.jpg'
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
    name: 'Sushi Experience',
    price: '$600',
    description: 'A culinary journey culminating in an exclusive sushi counter experience.',
    features: ['Sushi Making', 'Culture', 'Translation', 'Photo/Video']
  },
  {
    id: 'plan-d',
    code: 'PLAN D',
    name: '1Day Plan',
    price: 'Custom',
    description: 'Full day customized experience from morning to night.',
    features: ['12 Hours', 'Multi-Area', 'Fully Custom', 'All Inclusive Support']
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