import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Card, CardActions, CardContent, Grid, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  photoSize: {
    maxHeight: '300px',
    minWidth: '250px',
    margin: '10px',
  },
});

export default function SimilarProductCard({product}) {

  const classes = useStyles();

  return (

    <Grid item xs={10} md={10}>
    <Link className="noDecoration"to={`/products/${product.id}`}>
    <Card className={classes.photoSize} >
        <CardMedia
            image={product.photo}
            component="img"
            alt={product.name}
            title={product.name}
            style={{ height: '15vh' }}
        />
        <CardContent>
            <Typography
                variant="h6"
                component="h3"
            >
                {product.name}
            </Typography>
            <Typography variant="body1">Цена: {product.price} руб.</Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="text"
                // onClick={() =>
                //     setOrder({
                //         id: product.id,
                //         name: product.name,
                //         price: product.price,
                //     })
                // }
            >
                В избранное
            </Button>
        </CardActions>
    </Card>
    </Link>
</Grid>
  );
}
