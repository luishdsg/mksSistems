// src/interfaces/Product.ts

type Product  ={
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: number;
}

type ProductWithQuantity = Product & {
  quantity: number;
};

type ProductsInterface = {
  products: Product[];
  count: number;
}
export type { ProductsInterface, Product, ProductWithQuantity  };
