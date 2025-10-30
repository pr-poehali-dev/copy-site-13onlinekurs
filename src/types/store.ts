export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface Size {
  id: string;
  name: string;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
}

export interface PriceRange {
  id: string;
  name: string;
  min: number;
  max: number;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  old_price: number | null;
  discount: number;
  brand: string;
  colors: string[];
  sizes: string[];
  image_url: string;
  in_stock: boolean;
  new_arrival: boolean;
  rating: number;
  reviews_count: number;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Filters {
  categories: string[];
  sizes: string[];
  colors: string[];
  brands: string[];
  priceRange: PriceRange | null;
  inStock: boolean;
  newArrivals: boolean;
}

export interface StoreData {
  store_info: {
    name: string;
    description: string;
    currency: string;
  };
  filters: {
    categories: Category[];
    sizes: Size[];
    colors: Color[];
    price_ranges: PriceRange[];
    brands: Brand[];
  };
  products: Product[];
  search_configuration: {
    searchable_fields: string[];
    sort_options: Array<{
      id: string;
      name: string;
    }>;
    items_per_page: number[];
  };
}
