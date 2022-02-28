import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard'
import { Grid, Container} from '@material-ui/core';
import Advertising from '../Advertising/Advertising';

export default function ProductList({visibility}) {
  const {products} = useSelector(state => state.productsReducer);


  return (
    <>
    <Advertising/>
    <Container
            sx={{
                mt: '1rem'
            }}
            style={{paddingTop: '7rem'}}
        >
    <Grid container spacing={2}>
    {(products?.length)? products.map(product => (
              <ProductCard  key={product.id} product={product}/>
          )) : <></>}
   </Grid>
   </Container>
   </>
  );
}

