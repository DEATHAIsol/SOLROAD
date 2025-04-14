export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  slug: string;
  subcategories: SubCategory[];
  isExpanded?: boolean;
}

export interface MarketItem {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  subcategory?: string;
  signature?: string;
}

export interface UserInfo {
  messages: number;
  orders: number;
  balance: number;
  currency: string;
} 