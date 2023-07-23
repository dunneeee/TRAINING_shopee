export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  productId: string;
  userId: string;
}

export interface Type {
  id: string;
  name: string;
  price: number;
  description?: string;
  overview?: string;
  images?: string[];
  category: string;
  discount?: number;
  additionalInfo?: string;
  reviews?: Review[];
  badge?: string;
}

export type ShortType = Pick<
  Type,
  'id' | 'category' | 'name' | 'price' | 'discount' | 'badge'
> & {
  image: string;
};
