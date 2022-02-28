import React, { useEffect } from 'react';
import { CardActions, ListItem, Typography, CardContent, CardMedia} from "@material-ui/core";
import { Close  } from "@mui/icons-material/";
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close';
import { addProductCartAC,  removeProductCartAC, deleteProductCartAC } from '../../redux/actionCreators/cartAC';


function CartItems({orders}) {


  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productsReducer);
  const needProduct = products.find(el => el.id === orders.product);
 console.log('products',products);
 const { cartProducts } = useSelector(state => state.cartReducer);
 console.log('cartProducts', cartProducts);

  return (
    <ListItem style={{ padding: '5px'}}>
    <Link className="noDecoration"to={`/products/${needProduct.id}`}>
    <CardMedia
            image={needProduct.photo}
            component="img"
            style={{ height: '50px', width: '100px' }}
        />
    </Link>
        <CardContent>
            <Typography
                variant="body5"
                component="h5"
            >
                {needProduct.name}
            </Typography>
            <Typography variant="body6">Размер: {orders.size} </Typography>
            <Typography variant="body6">Цена: {needProduct.price} руб.</Typography>
            <Typography variant="body6"> x {orders.numberOfItems} шт.</Typography>
        </CardContent>
       {/* <IconButton
        onClick={() => removeFromOrder(id)}>
        <Close /> */}
        <CardActions>
          
       <button><AddIcon onClick={() => dispatch(addProductCartAC(orders))}/></button>
       <button><RemoveIcon onClick={() => dispatch(removeProductCartAC(orders))}/></button>
       <button><CloseIcon onClick={() => dispatch(deleteProductCartAC(orders))}/></button>
       </CardActions>
       <CardContent style={{ padding: '5px'}}>
            <Typography
                variant="body5"
                component="h5"
            >
            </Typography>
            <Typography variant="body6">Итого: {needProduct.price * orders.numberOfItems} руб.</Typography>
        </CardContent>
</ListItem>
  );
}

export default CartItems;
