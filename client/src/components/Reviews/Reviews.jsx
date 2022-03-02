import React, { useEffect } from 'react';
import { Grid, Container, Card, CardContent, Typography, CardMedia, Box, Button, TextareaAutosize, Dialog, DialogTitle, DialogContent, DialogContentText, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { initRewiewsListAC } from '../../redux/actionCreators/reviewsAC';
import ReviewsCard from './ReviewsCard';
import { useNavigate } from 'react-router-dom'


const theme = createTheme();

const useStyles = makeStyles({
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
});

function Reviews(props) {

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const dialogClickOpen = () => {
    setDialogOpen(true);
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }
  const classes = useStyles();

  const {comment} = useSelector(state => state.reviewsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('http://localhost:5000/reviews', {
        credentials: 'include',
      })
      .then(data => data.json())
      .then(data => {console.log('reviews!', data.comment)
      dialogClickOpen();
    return data
  })
      .then(data => {
        console.log(data);
        if(data.message === 'sucsess') {
          dispatch(initRewiewsListAC(data.comment))
        } else if (data.message === 'nopComments') {
          console.log('noComments');
        } else (console.log(data.error))})
      .catch(error => error.message)
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>

              <div>

              <Container  sx={{ p: 3 }} maxWidth="sm">
                <Typography variant='h4' align="center" color="textPrimary" gutterBottom>
                  Отзывы
                </Typography>
              <Typography variant='h6' align="center" color="textSecondary" gutterBottom>
                Уважаемые покупатели, на этой страничке Вы можете оставить свой отзыв
              </Typography>
              <Typography variant='h6' align="center" color="textSecondary" gutterBottom>
                Спасибо за Ваше мнение !
              </Typography>
              <Box sx={{ '& button': { m: 1 } }}>
               <Button  variant="outlined" onClick={()=>{navigate('/addreviews')}}  color="inherit">ОСТАВИТЬ ОТЗЫВ</Button>
               <Button to variant="outlined" target="_blank" href='https://yandex.ru/maps/org/tapkomaniya_yug/66063787262/reviews/?ll=38.999504%2C45.021155&mode=search&sctx=ZAAAAAgBEAAaKAoSCVmdnKG4y0JAEUwnOCWJ2ktAEhIJAAAAAIABpT8RAHBfguZejj8iBgABAgMEBSgKOABA1QFIAWI8cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9zZXJwX2Zvcm11bGE9MC42MDpsM19mbWw4NDAwNjZfZXhwYjxyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2ZtbDg0MDA2Nl9leHBqAnJ1nQHNzEw9oAEAqAEAvQFcNFL5wgEFg%2BGUhATqAQDyAQD4AQCCAhnRgtCw0L%2FQutC%2B0LzQsNC90LjRjy3RjtCzigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=38.999504%2C45.021155&sspn=0.004403%2C0.001999&tab=reviews&text=%D1%82%D0%B0%D0%BF%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D1%8E%D0%B3&z=18.22' color="inherit">ОТЗЫВ НА ЯНДЕКС</Button>
               <Button variant="outlined" target="_blank" href="https://www.google.ru/maps/place/%D0%A2%D0%B0%D0%BF%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%AE%D0%B3/@45.021658,38.999233,15z/data=!4m5!3m4!1s0x0:0x7adb46b7ae607a25!8m2!3d45.0214375!4d38.9990577"  color="inherit">ОТЗЫВ НА GOOGLE</Button>
              </Box>
              </Container>
              </div>

                  <Box mr={3}>
    <Dialog style={{align:"center"}} open={dialogOpen} onClose={dialogClickClose}  >
        <DialogContent  align="center">
          <DialogTitle>
          Отзывы
          </DialogTitle>
      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
        Выполните авторизацию или регистрацию,
        <br />
        чтобы ставить оценки и писать отзывы.
        <br />
        <Button style={{marginTop: '30px'}} onClick={dialogClickClose}  color="inherit" variant="outlined">Войти или создать аккаунт</Button>
      </DialogContentText>
        </DialogContent>
        
     </Dialog>
    </Box>
    
    <Grid container spacing={2}>
    {(comment?.length)? comment.map(comment => (
              <ReviewsCard  key={comment.id} reviews={comment}/>
          )) : <></>}
   </Grid>
   </Container>
   
   </>
  );
}

export default Reviews;
