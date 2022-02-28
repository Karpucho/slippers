import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import Rating from '@mui/material/Rating';

export default function ReviewsCard({reviews}) {


  return (
    <Grid item xs={12} md={4}>
    <Card className="motion" sx={{height: '100%',}}>
        <CardContent>
            <Typography
                variant="body1"
                component="h3"
            >
                {reviews.authorName}
            </Typography>
            <Rating name="read-only" value={reviews.rating} readOnly />
            <Typography variant="h6">{reviews.text}</Typography>
        </CardContent>
    </Card>
</Grid>

  );
}
