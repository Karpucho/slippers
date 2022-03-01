import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initProductsListAC } from '../../redux/actionCreators/productsAC'
import AdminCard from '../AdminCard/AdminCard.jsx';
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  }

});

function AdminProductList(props) {
  const { products } = useSelector(state => state.productsReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    fetch('/products', {
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
    <Grid>
      <h3>Все товары</h3>
        {products?.length && products.map(product => (
          <Grid item xs={11} className={classes.gridContainer}>
            <div key={product.id} >
              <AdminCard key={product.id} product={product}/>
            </div>
            </Grid>  
          ))}
    </Grid>
  );
}

export default AdminProductList;
