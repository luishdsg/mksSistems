// src/components/CartSidebar.tsx
import React from 'react';
import { ProductWithQuantity } from '../interface/products-interface';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { IoIosRemoveCircleOutline, IoMdCloseCircle } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { MontserratSmall, imgProd } from '../styles/styles';
interface SideBarProps {
    selectedProducts: ProductWithQuantity[];
    onProductDeleted: (productId: number) => void;
    onQuantityChange: (productId: number, newQuantity: number) => void;
    onCloseList: () => void;
}
const Sidebar: React.FC<SideBarProps> = ({ selectedProducts, onProductDeleted, onQuantityChange, onCloseList }) => {

    const handleDelete = (productId: number) => {
        onProductDeleted(productId);
    };
    const handleQuantityChange = (productId: number, newQuantity: number) => {
        onQuantityChange(productId, newQuantity);
    };
    const calculateTotalValue = () => {
        return selectedProducts.reduce((total, product) => {
            return total + product.price * (product.quantity || 1);
        }, 0);
    };
    return (
        <Drawer anchor="right" open={true} >
            <Box onKeyDown={onCloseList} role="presentation" className="w-100 h-100">
                <div className="d-flex justify-content-between p-4 align-items-center">
                    <Typography className="text-light cartBuy text-left">Carrinho <br /> de compras</Typography>
                    <Button onClick={onCloseList} sx={{ position: 'absolute', top: '20px', right: '20px' }}>
                        <IoMdCloseCircle className='text-light fs-1' />
                    </Button>
                </div>
                <List sx={{ marginTop: '2rem' }} className="px-3 overflow-y-scroll">
                    {selectedProducts.map((product) => (
                        <ListItem key={product.id} disablePadding>
                            <ListItemButton className="bg-light mt-4 text-dark rounded" sx={{}}>
                                <Box sx={{ ...imgProd }}
                                    component="img"
                                    src={product.photo} />
                                <Typography className="w-100" sx={MontserratSmall}>{product.name}</Typography>
                                <Box className="border me-2 scale border-secondary rounded-3 d-flex align-items-center" component="div">
                                    <Button className="btnCard p-0" onClick={() => handleQuantityChange(product.id, Math.max((product.quantity || 1) - 1, 1))}>
                                        <IoIosRemoveCircleOutline className='text-black fs-5 ' />
                                    </Button>
                                    <ListItemText className="border-start px-2 border-end" primary={product.quantity || 1} />
                                    <Button className="btnCard p-0" onClick={() => handleQuantityChange(product.id, (product.quantity || 1) + 1)}>
                                        <IoAddCircleOutline className='text-black fs-5' />
                                    </Button>
                                </Box>
                                <Typography className="MontserratSmallBold text-nowrap">{`R$ ${parseFloat(Number(product.price).toFixed(0))}`}</Typography>
                                <Button sx={{ top: -10, right: -25 }} className="position-absolute">
                                    <IoMdCloseCircle onClick={() => handleDelete(product.id)} className='text-black fs-5' />
                                </Button>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <div className="d-flex w-100 justify-content-between p-4 position-absolute bottom-20 align-items-center">
                    <Typography className="text-light cartBuy text-left">Total:</Typography>
                    <Typography className="text-light cartBuy text-left">{`R$ ${parseFloat(calculateTotalValue().toFixed(2))}`}</Typography>
                </div>
                <Button variant="contained" sx={{ height: '77px' }} className="w-100 cartBuy bg-black position-absolute text-center bottom-0">Finalizar Compra</Button>
            </Box>
        </Drawer>
    );
};
export default Sidebar;