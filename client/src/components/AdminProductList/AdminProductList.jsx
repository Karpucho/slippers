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
  const classes = useStyles();


  return (
    <Grid>
      <h3>Все товары</h3>
         {products?.length && products.map(product => (
        
          <Grid item xs={4} className={classes.gridContainer}>
            <div  >
              <AdminCard product={product}/>
            </div>
             </Grid>  
          ))}
    </Grid>
  );
}

export default AdminProductList;
