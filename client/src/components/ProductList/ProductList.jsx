import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initProductsListAC } from '../../redux/actionCreators/productsAC'
import ProductCard from '../ProductCard/ProductCard'
import { Grid, Container} from '@material-ui/core';


export default function ProductList({visibility}) {
  const {products} = useSelector(state => state.productsReducer);



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
    <Container
            sx={{
                mt: '1rem'
            }}
            style={{paddingTop: '7rem'}}
        >
    <Grid container spacing={2}>
    {products?.length && products.map(product => (
              <ProductCard  key={product.id} product={product}/>
          ))}
   </Grid>
   </Container>
  );
}

