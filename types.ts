
export enum Category {
  EQUIPMENT = 'Equipment',
  FURNITURE = 'Furniture',
  SERVICE = 'Service'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceEstimate: string;
  imageUrl: string;
}
