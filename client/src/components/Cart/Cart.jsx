import React, { useState } from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { ShoppingBasket } from "@mui/icons-material/";
import CartItems from "../CartItems/CartItems";
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Cart(props) {



  const { cartProducts } = useSelector(state => state.cartReducer);



  return (
    <Drawer
            anchor="right"
            // open={cartOpen}
            // onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />

                {!cartProducts.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                    {cartProducts.map((products) => (
                        <CartItems key={uuidv4()} 
                        // removeFromOrder={removeFromOrder} 
                        {...products} />
                    ))}
                    <Divider />
                    <ListItem>
                        {/* <Typography sx={{fontWeight: 700}}>
                            Общая стоимость:{' '}
                            {cartProducts.reduce((acc, item) => {
                            return acc + item.price * item.numberOfItems;
                            }, 0)}{' '}
                            рублей.
                        </Typography> */}
                    </ListItem>
                    </>
                )}

            </List>
        </Drawer>
  );
}

export default Cart;
