export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Plan {
  id: string;
  code: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}