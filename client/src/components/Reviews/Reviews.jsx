import React from 'react';
import { Grid, Container, Card, CardContent, Typography, CardMedia } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%"
  }
}))

function Reviews(props) {
  const cards = [1,2,3,4,5,6,7,8,9,10]

  const classes = useStyles();

  return (
    <div>
      <h1>reviews</h1>
      <Container className={"classes.cardGrid"} maxWidth={"md"}>
        <Grid container spacing={4}>
          {cards.map((el) => (
            <Grid  item key={el} xs={12} sm={6} md={4}>
              <Card className={"classes.card"}>
                <CardMedia 
                className={classes.cardMedia}
                image="http://source.unsplash.com/random"
                title="Image Title"
                />
                <CardContent className={"classes.cardContent"}>
                  <Typography variant="h5" gutterBottom>
                    Post
                  </Typography>
                  <Typography>
                    Post, Tapcomania TapcomaniaPost, Tapcomania TapcomaniaPost, Tapcomania Tapcomania
                  </Typography> 
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Reviews;
