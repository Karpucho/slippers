import React from 'react';
import { TextField, Box, Rating, Container, Button, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 0.5,
  1: 1,
  1.5: 1.5,
  2: 2,
  2.5: 2.5,
  3: 3,
  3.5: 3.5,
  4: 4,
  4.5: 4.5,
  5: 5,
};

function AddingReviews(props) {

    // const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
  return (

  <Container style={{marginTop: '150px'}}>
    <Typography variant='h6' style={{marginBottom: '30px'}}>
    Текст не проходит модерацию и попадает на сайт без исправлений и правок.
    </Typography>
    <Box
  sx={{
    width: 400,
    display: 'flex',
    alignItems: 'center',
  }}
>
  <Rating
  style={{marginBottom: '10px'}}
    name="hover-feedback"
    value={value}
    precision={0.5}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHover(newHover);
    }}
    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  />
  {value !== null && (
    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
  )}
</Box>
<Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <TextField
      id="outlined-textarea"
      // label="Multiline Placeholder"
      placeholder="Имя:"
      multiline
      />
      <TextField style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          placeholder="Отзыв:"
          // defaultValue="Default Value"
        />
      <Button style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Оставить отзыв</Button>
      </form>
</Box>
</Container>
  );
}

export default AddingReviews;
