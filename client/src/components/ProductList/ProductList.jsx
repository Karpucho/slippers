import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initProductsListAC, filterProductsListAC } from '../../redux/actionCreators/productsAC'
import ProductCard from '../ProductCard/ProductCard'
import { Grid, Container} from '@material-ui/core';
import Advertising from '../Advertising/Advertising';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Пол</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={age}
          label="Age"
          onChange={(event) => dispatch(filterProductsListAC(event.target.value))}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='male'>Мужское</MenuItem>
          <MenuItem value='female'>Женское</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>Выберите гендер</FormHelperText>
      </FormControl>

    <Grid container spacing={2}>
    {(productsFilter?.length)? productsFilter.map(product => (
              <ProductCard  key={product.id} product={product}/>
          )) : <></>}
   </Grid>
   </Container>
   </>
  );
}

