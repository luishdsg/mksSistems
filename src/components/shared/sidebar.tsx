// src/components/CartSidebar.tsx
import React, { useState } from 'react';
import { Product, ProductWithQuantity } from '../../interface/products-interface';
import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { IoIosRemoveCircleOutline, IoMdCloseCircle } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
interface SideBarProps {
    selectedProducts: ProductWithQuantity[];
    onProductDeleted: (productId: number) => void;
    onQuantityChange: (productId: number, newQuantity: number) => void;

}
const Sidebar: React.FC<SideBarProps> = ({ selectedProducts, onProductDeleted, onQuantityChange }) => {

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

        <Box className="w-100 bg-info h-100">
            <Button sx={{ position: 'absolute', top: 0, right: 0 }}>
                <IoMdCloseCircle className='text-light fs-1' />
            </Button>
            <List className="mt-5">
                {selectedProducts.map((product) => (
                    <ListItem key={product.id} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={product.name} />
                            <ListItemText primary={product.price} />
                            <Button onClick={() => handleQuantityChange(product.id, Math.max((product.quantity || 1) - 1, 1))}>
                                <IoIosRemoveCircleOutline className='text-light fs-5' />
                            </Button>
                            <ListItemText primary={product.quantity || 1} />
                            <Button onClick={() => handleQuantityChange(product.id, (product.quantity || 1) + 1)}>
                                <IoAddCircleOutline className='text-light fs-5' />
                            </Button>
                            <Button>
                                <IoMdCloseCircle onClick={() => handleDelete(product.id)} className='text-light fs-5' />
                            </Button>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <ListItemText primary={parseFloat(calculateTotalValue().toLocaleString()).toFixed(0)} />

        </Box>
    );
};
export default Sidebar;