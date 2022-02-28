import { Link } from 'react-router-dom';
import { useState } from 'react'
// import { useParams } from 'react-router-dom';
import './ProductCard.css';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";




export default function ProductCard({product}) {

  

  return (

    <Grid item xs={12} md={4}>
    <Link className="noDecoration"to={`/products/${product.id}`}>
    <Card className="motion"
        sx={{
            height: '100%',
        }}
    >
        <CardMedia
            image={product.photo}
            component="img"
            alt={product.name}
            title={product.name}
            style={{ height: '35vh' }}
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
