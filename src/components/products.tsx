import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { ProductsInterface } from '../interface/products-interface';
import { productsData } from '../services/getProductsData';
import { Montserrat, MontserratSmall, buyBtn, cardProduct, colProducts, imgProduct, priceButton } from './styles/styles';
import { GoArchive } from "react-icons/go";
function Products() {
    const [productData, setProducts] = useState<ProductsInterface | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await productsData({
                    page: 1,
                    rows: 8,
                    sortBy: 'id',
                    orderBy: 'DESC',
                });
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="container">
            <Box sx={{ colProducts }}>
                <div className="row">
                    {productData?.products?.map((product) => (
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
                                    <Button sx={buyBtn} className="d-flex align-items-center" variant="contained">
                                        <GoArchive className="mr-3 mt-2 h6" />COMPRAR</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>

            </Box>
        </section>

    )
}
export default Products;
