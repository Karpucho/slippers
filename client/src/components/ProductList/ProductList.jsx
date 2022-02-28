import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initProductsListAC, filterProductsListAC } from '../../redux/actionCreators/productsAC'
import ProductCard from '../ProductCard/ProductCard'
import { Grid, Container} from '@material-ui/core';
import Advertising from '../Advertising/Advertising';

export default function ProductList({visibility}) {

  const {productsFilter} = useSelector(state => state.productsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('http://localhost:5000/products', {
        credentials: 'include',
      })
      .then(data => data.json())
      .then(data => {
        if(data.message === 'sucsess') {
          dispatch(initProductsListAC(data.products))
        } else if (data.message === 'noproducts') {
          console.log('noproducts');
        } else (console.log(data.error))})
      .catch(error => error.message)
  }, [dispatch]);



  return (
    <>


    <Advertising/>
    <Container
            sx={{
                mt: '1rem'
            }}
            style={{paddingTop: '7rem'}}
        >
        <select onChange={(event) => dispatch(filterProductsListAC(event.target.value))}> 
          <option value='male'> мужское</option>
          <option value='female'> женское</option>
        </select>
    <Grid container spacing={2}>
    {(productsFilter?.length)? productsFilter.map(product => (
              <ProductCard  key={product.id} product={product}/>
          )) : <></>}
   </Grid>
   </Container>
   </>
  );
}

