import React from 'react';
import { Product } from '../../interface/products-interface';

interface ItemComponentProps {
  product: Product;
  onProductSelected: (selectedProduct: Product) => void;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ product, onProductSelected }) => {
  return (
    <div onClick={() => onProductSelected(product)}>
      <img src={product.photo} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ItemComponent;
