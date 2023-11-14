// src/interfaces/Product.ts

export interface Product {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

export interface ProductsInterface {
  products: Product[];
  count: number;
}
export interface CartSidebarProps extends ProductsInterface {
  cart: Product[];
  removeFromCart: (product: Product) => void;
}