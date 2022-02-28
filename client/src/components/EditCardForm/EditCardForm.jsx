import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'
import { updateProductCardAC} from '../../redux/actionCreators/productsAC'
import axios from 'axios'


function EditCardForm(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const {currentProduct} = useSelector(state => state.productsReducer)
  console.log(currentProduct);
  const inputName = useRef();
  const inputGender = useRef();
  const inputCategory = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();
  const inputPhoto = useRef();

  const [img, setImg ] = React.useState(null);
  const [photo, setPhoto ] = React.useState(null);

  // useEffect(() => {
  //   dispatch({type:"FETCH_CURRENT_PRODUCT"})
  // }, [dispatch])

  useEffect(() => {
    const id = Number(params.id);
    fetch(`http://localhost:5000/products/edit/${id}`, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initCurrentProductCardAC(data.currentProduct))
      } else if (data.message === 'noCurrent') {
        // console.log('noCurrent');
      } else (console.log(data.error))})
    .catch(error => error.message)
}, [dispatch, params.id]);

  const editProduct = (e) => {
    e.preventDefault();
    
    const id = Number(params.id);

    const updatedProduct = {
      name: inputName.current.value,
      gender: inputGender.current.value,
      category: inputCategory.current.value,
      photo: inputPhoto.current.value,
      description: inputDescription.current.value,
      price: inputPrice.current.value,
    }

    fetch(`/products/edit/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(res => res.json())
      .then(data => dispatch(updateProductCardAC(data)))
      .catch(err => console.log(err));
  }


  const sendFile = React.useCallback( async () => {
    try {
      const data = new FormData();
      data.append('productPhoto', img);

      await axios.post(`/products/edit/${currentProduct.id}`, data, {
        headers: {
          'content-type': 'multipart/form-data'
        },
      })
        .then(res => setPhoto(res.data.path));
    } catch (error) {
      
    }
  }, [img])
    
  //   dispatch({ type: 'FETCH_UPDATE_PRODUCT', payload: updatedProduct });
  //   // goToProductList();
  // }
 
  return (
    <>
<form>
  <h3>Фото:</h3>
    { photo
        ? <img src={`${photo}`} />
        : <p>Загрузите фото</p>  }
    <input type="file" onChange={e => setImg(e.target.files[0])}/> 
    {/* ref={inputPhoto} */}
  <h3>Имя: 
    {currentProduct.name}
    </h3>
    <input ref={inputName} 
    defaultValue={currentProduct.name} 
    type="text" placeholder="Измените имя" />
      <h3>Пол: 
        {currentProduct.gender}
        </h3>
        <select ref={inputGender} name="gender">
          <option ref={inputGender} value="женские">женские</option>
          <option ref={inputGender} value="мужские">мужские</option>
        </select>
        <h3>Категория: 
          {/* {currentProduct.Category.name} */}
          </h3>
        <select ref={inputCategory} name="category">
          <option ref={inputCategory} value="1">шлепки</option>
          <option ref={inputCategory} value="2">сандалии</option>
          <option ref={inputCategory} value="3">тапки</option>
        </select>
        <h3>Описание: 
          {currentProduct.description}
          </h3>
        <input ref={inputDescription} 
        defaultValue={currentProduct.description} 
        type="text" placeholder="Измените описание" />
      <h3>Цена: 
        {currentProduct.price}
        </h3>
    <input ref={inputPrice} 
    defaultValue={currentProduct.price} 
    type="number" placeholder="Измените цену" />
  <button type="submit" onClick={sendFile}>Сохранить изменения</button>
</form>
<button onClick={() => navigate(-1)}>Назад</button>
   </>
  );
};
export default EditCardForm;
