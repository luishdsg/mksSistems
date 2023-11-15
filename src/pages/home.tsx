import React, { useEffect, useState } from 'react';
import Products from '../components/products';
import NavBar from '../components/shared/navbar';
import { Product, ProductWithQuantity, ProductsInterface } from '../interface/products-interface';
import { getProductsData } from '../services/getProductsData';
import ItemList from '../components/itemlist';
import Sidebar from '../components/shared/sidebar';

const Home: React.FC = () => {
  const [productsData, setProductsData] = useState<ProductsInterface | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<ProductWithQuantity[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsData({
          page: 1,
          rows: 8,
          sortBy: 'id',
          orderBy: 'DESC',
        });
        setProductsData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setProductsData]);

  const handleProductSelected = (product: Product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      handleQuantityChange(product.id, existingProduct.quantity + 1);
      console.warn('Produto já adicionado!');
    } else {
      setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, { ...product, quantity: 1 }]);
    }

  };
  const handleProductDeleted = (productId: number) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== productId)
    );
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };
  return (
    <div>
      {productsData ? (
        <>
          <NavBar />

          <ItemList products={productsData.products} onProductSelected={handleProductSelected} />
          <Sidebar selectedProducts={selectedProducts} onProductDeleted={handleProductDeleted} onQuantityChange={handleQuantityChange}/>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}

export default Home;