import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Product, ProductsInterface } from '../interface/products-interface';
import { getProductsData } from '../services/getProductsData';
import { Montserrat, MontserratSmall, buyBtn, cardProduct, colProducts, imgProduct, priceButton } from './styles/styles';
import { GoArchive } from "react-icons/go";
import Sidebar from './shared/sidebar';


interface ItemComponentProps {
    product: Product;
    onProductSelected: (selectedProduct: Product) => void;
  }

const Products: React.FC<ItemComponentProps> = ({product, onProductSelected }) => {
    return (
        <section className="container">
            <Box sx={{ colProducts }}>
                <div className="row">
                        <div className="col-lg-3 mt-4" key={product.id}>
                            <Card className="px-2" sx={cardProduct}>
                                <CardMedia
                                    sx={imgProduct}
                                    component="img"
                                    alt={product.name}
                                    image={product.photo}
                                />
                                <CardContent className="d-flex m-0 py-0 px-2 w-100 align-items-center justify-content-between">
                                    <Typography sx={Montserrat} variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography sx={{
                                        ...priceButton,
                                        fontWeight: 'bold'
                                    }} variant="h6" className="p-1" component="div">R${Math.floor(product.price)}</Typography>
                                </CardContent>
                                <CardContent className="d-flex m-0 py-0 px-2 w-100 align-items-center justify-content-between">
                                    <Typography sx={MontserratSmall} className="p-0" variant="h6" component="div">
                                        <h6 className="d-inline-block max-200 text-truncate" >{product.description}</h6>
                                    </Typography>
                                </CardContent>

                                <CardActions className="p-0">
                                    <Button sx={buyBtn} onClick={() => onProductSelected(product)} className="d-flex align-items-center" variant="contained">
                                        <GoArchive className="mr-3 mt-2 h6" />COMPRAR</Button>
                                </CardActions>
                            </Card>
                        </div>
                </div>
            </Box>
        </section>

    )
}
export default Products;
