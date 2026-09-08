export interface IceCreamFlavor {
  id: string;
  name: string;
  emoji: string;
  category: 'fruit' | 'classic' | 'special' | 'berry';
  description: string;
  color: string;
  bgGradient: string;
  textColor: string;
  tag?: string;
  image?: string;
}

export interface FoodSize {
  name: string;
  portion: string;
  badge?: string;
}

export interface MenuItem {
  title: string;
  description: string;
  sizes: string[];
  note?: string;
  ingredients?: string[];
}
