import React, { useEffect } from 'react';
import { Grid, Container,  Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { initRewiewsListAC } from '../../redux/actionCreators/reviewsAC';
import ReviewsCard from '../Reviews/ReviewsCard';
import { useNavigate } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';


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

function TestSveta(props) {


  const [dialogOpen, setDialogOpen] = React.useState(false);

  const dialogClickOpen = () => {
    setDialogOpen(true);
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }
  const classes = useStyles();

  const {comment} = useSelector(state => state.reviewsReducer);

  console.log('Смотри сюда',comment);

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
    <ProductList />
    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>
   <Box mr={3}>
    <Dialog style={{align:"center"}} open={dialogOpen} onClose={dialogClickClose}  >
        <DialogContent  align="center">
          <DialogTitle>
           Чтобы сделать заказ,
        <br />
        автоизируйтесь или зарегистрируйтесь
          </DialogTitle>
      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
       
        <Button style={{marginTop: '30px'}} onClick={dialogClickClose}  color="inherit" variant="outlined">Войти или создать аккаунт</Button>
      </DialogContentText>
        </DialogContent>
     </Dialog>
    </Box>
   </Container>
</>
  );
}

export default TestSveta;
