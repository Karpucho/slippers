import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper'
import { makeStyles } from "@mui/styles"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteProductAC } from '../../redux/actionCreators/productsAC'



const useStyles = makeStyles({
  photoSize: {
    maxHeight: '140px',
  },
  flexDirection:{
    flexDirection:"column"
  },

});

export default function ActionAreaCard({product}) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const fetchDeleteProduct = () => {
    fetch(`products/${product.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => dispatch(deleteProductAC(data)))
      .catch(err => console.log(err));
  }

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Card className={classes.flexDirection} sx={{ maxWidth: 1200, maxHeight: 1000}}>
      <CardActionArea>
      <Paper variant="outlined">
        <img className={classes.photoSize} src="https://werdum-army.ru/wp-content/uploads/2018/10/tapki-armeyskie-kupit-optom-v-spb-.jpeg" />
      </Paper>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}  
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1}>
      <Chip
        label="РЕДАКТИРОВАТЬ"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="УДАЛИТЬ"
        onClick={fetchDeleteProduct}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
      </CardActionArea>
    </Card>
  );
}
