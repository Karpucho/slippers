import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'
import { updateProductCardAC} from '../../redux/actionCreators/productsAC'

import { TextField, Box, Container, Button, Typography } from '@mui/material';



function EditCardForm() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const {currentProduct} = useSelector(state => state.productsReducer)
  const inputName = useRef();
  const inputGender = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();
  const inputPhoto = useRef();


  const input35 = useRef()
  const input36 = useRef()
  const input37 = useRef()
  const input38 = useRef()
  const input39 = useRef()
  const input40 = useRef()
  const input41 = useRef()
  const input42 = useRef()
  const input43 = useRef()



  const [img, setImg ] = React.useState(null);
  const [photo, setPhoto ] = React.useState(null);

  useEffect(() => {
    const id = Number(params.id);
    fetch(`http://localhost:5000/products/edit/${id}`)
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initCurrentProductCardAC(data.currentProduct))
        console.log(data.currentProduct)
      } else if (data.message === 'noCurrent') {
      } else (console.log(data.error))})
    .catch(error => error.message)
}, [dispatch, params.id]);

  const editProduct = (e) => {
    // e.preventDefault();
    
    const id = Number(params.id);

    const updatedProduct = {
      name: inputName.current.value,
      gender: inputGender.current.value,
      photo: inputPhoto.current.value,
      description: inputDescription.current.value,
      price: inputPrice.current.value,
    }

    const sizes = [
      {35:input35.current.value},
      {36:input36.current.value},
      {37:input37.current.value},
      {38:input38.current.value},
      {39:input39.current.value},
      {40:input40.current.value},
      {41:input41.current.value},
      {42:input42.current.value} ,
      {43:input43.current.value},
     ]

    fetch(`/products/edit/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ updatedProduct, sizes }),
    })
      .then(res => res.json())
      .then(data => dispatch(updateProductCardAC(data)))
      .catch(err => console.log(err));
  }


  const sendFile = React.useCallback( async () => {
    try {
      const data = new FormData();
      data.append('productPhoto', img);

      fetch('http://localhost:5000/addProduct/photo', {
        method: 'POST',
        body: data,
    })
    .then(res => res.json())
    .then(res => setPhoto(res.data.path))
    .catch(error => console.log(error));

    } catch (error) {
      
    }
  }, [img])
    
 
  return (
    <>
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
      defaultValue={currentProduct.name}
      multiline
      />

      <TextField inputRef={inputPrice} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-number"  
      label="Цена"
      type="number"
      defaultValue={currentProduct.price}
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
      defaultValue={currentProduct.gender}
      />
      
      <TextField inputRef={inputDescription} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-multiline-static"
          label="Описание"
          multiline
          defaultValue={currentProduct.description}
          rows={4}
        />

      <Typography variant='h6' style={{marginBottom: '30px'}}>
         Задайтe количество доступных пар обуви для каждого из размеров:
      </Typography>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <TextField inputRef={input35} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="35"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
      <TextField inputRef={input36} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="36"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
       <TextField inputRef={input37} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="37"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
       <TextField inputRef={input38} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="38"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
      <TextField inputRef={input39} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="39"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
       <TextField inputRef={input40} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="40"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
      <TextField inputRef={input41} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="41"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
       <TextField inputRef={input42} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="42"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
      <TextField inputRef={input43} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="43"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      />
      </div>

      <Button onClick={() => {editProduct()}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Создать</Button>
      </form>
</Box>
</Container>

    </div>







   </>
  );
};
export default EditCardForm;
