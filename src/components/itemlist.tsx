import React from 'react';
import { Product } from '../interface/products-interface';
import Products from './products';

interface ItemListProps {
  products: Product[];
  onProductSelected: (selectedProduct: Product) => void;
}

const ItemList: React.FC<ItemListProps> = ({ products, onProductSelected }) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.map(product => (
        <Products key={product.id} product={product} onProductSelected={onProductSelected} />
      ))}
    </div>
  );
};

export default ItemList;
