
export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}
