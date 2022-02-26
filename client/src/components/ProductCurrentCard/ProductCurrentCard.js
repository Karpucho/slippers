import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addProductBasketAC }  from '../../redux/actionCreators/basketAC';
import SizeInStock from '../SizeInStock/SizeInStock';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';
import {Button, Card, CardActions, CardContent, Container, CardMedia, Typography } from "@material-ui/core";

import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'

function ProductCurrentCard() {

  const dispatch = useDispatch();
  const params = useParams();
  const { currentProduct } = useSelector(state => state.productsReducer);



  // const { basketProducts } = useSelector(state => state.basketReducer);
  const addProductBacket = () => {
    dispatch(addProductBasketAC());
   
  };

  // useEffect(() => {
  //   localStorage.setItem('basket', JSON.stringify(basketProducts));
  // }, [basketProducts]);

  useEffect(() => {
    const id = Number(params.id);
    fetch(`http://localhost:5000/products/${id}`, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initCurrentProductCardAC(data.currentProduct))
      } else if (data.message === 'noCurrent') {
        console.log('noCurrent');
      } else (console.log(data.error))})
    .catch(error => error.message)
}, [dispatch, params.id]);

console.log(currentProduct.SizesOfProducts);

  return (
    <Container
            style={{padding: '8rem'}}
        >
    <Card className="motion"
    style={{ height: '70vh' }}
    >
       <Button><Link to='/products/'></Link></Button>
        <CardMedia
            image={currentProduct.photo}
            component="img"
            alt={currentProduct.name}
            title={currentProduct.name}
            style={{ height: '40vh' }}
        />
        <CardContent>
            <Typography
                variant="h6"
                component="h3"
            >
                {currentProduct.name}
            </Typography>
            <Typography variant="body1">Цена: {currentProduct.price} руб.</Typography>
            <Typography variant="body1">Описание: {currentProduct.description}</Typography>
            {currentProduct.rating ? <p>Рейтинг {currentProduct.rating}</p> 
            : <p>Пока что никто не оставил отзыв на данный товар</p>}
            <div>
          <p>В наличии</p>
        {currentProduct.SizesOfProducts?.length && 
            currentProduct.SizesOfProducts
            .map(el => 
            <SizeInStock key={uuidv4()} size={el.sizeNumber} count={el.itemsLeft}/>)
             }
          </div>
        </CardContent>
        
        <CardActions>
          
            <Button
                variant="text"
                // onClick={addProductBacket}
            >
                В корзину
            </Button>
        </CardActions>
    </Card>
</Container>

  );
}

export default ProductCurrentCard;


