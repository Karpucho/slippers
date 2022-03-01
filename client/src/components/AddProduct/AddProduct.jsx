import React, { useRef, useEffect, useState } from 'react';
import { TextField, Box, Rating, Container, Button, Typography } from '@mui/material';


function AddProduct(props) {
  const [img, setImg ] = useState(null);
  const [photo, setPhoto ] = useState(null);

  const inputName = useRef()
  const inputPrice = useRef()
  const inputGender = useRef()
  const inputPhoto = useRef()
  const inputDescription = useRef()

  const sendFile = React.useCallback(async (event) => {
    // event.preventDefault();



    try {
      const data = new FormData();
      data.append('productPhoto', img);

      fetch('/addProduct/photo', {
        method: 'POST',
        body: data,
    })
    .then(res => res.json())
    .then(res => setPhoto(res.data.path))
    .catch(error => console.log(error));

    } catch (error) {
      
    }
  }, [img]);

  function addNewProduct(event) {

    const newProduct = {
      name: inputName.current.value,
      price: inputPrice.current.value,
      photo: inputPhoto.current.value,
      gender: inputGender.current.value,
      description: inputDescription.current.value,
    }

    
    fetch('http://localhost:5000/addProduct/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  
  return (
    <div>
      <Container style={{marginTop: '150px'}}>
    <Typography variant='h6' style={{marginBottom: '30px'}}>
    Создать новый товар:
    </Typography>
<Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <TextField inputRef={inputName} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-textarea"
      label="Имя"
      multiline
      />

      <TextField inputRef={inputPrice} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-number"  
      label="Цена"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      />

       <TextField inputRef={inputPhoto} onChange={ e => setImg(e.target.files[0])} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-number"
          type="file"
          defaultValue={photo}
        />

<Button onClick={() => {sendFile()}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Одобрить фото</Button>

      <TextField inputRef={inputGender} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-textarea"
      label="Пол"
      multiline
      />
      
      <TextField inputRef={inputDescription} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-multiline-static"
          label="Описание"
          multiline
          rows={4}
        />
      <Button onClick={() => {addNewProduct()}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Создать</Button>
      </form>
</Box>
</Container>

    </div>
  );
}

export default AddProduct;
