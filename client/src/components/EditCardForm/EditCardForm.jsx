import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'
import { updateProductCardAC} from '../../redux/actionCreators/productsAC'
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
      gender: inputName.current.value,
      category: inputCategory.current.value,
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



    
  //   dispatch({ type: 'FETCH_UPDATE_PRODUCT', payload: updatedProduct });
  //   // goToProductList();
  // }
 
  return (
    <>
<form>
  <h3>Имя: 
    {currentProduct.name}
    </h3>
    <input ref={inputName} 
    defaultValue={currentProduct.name} 
    type="text" placeholder="Измените имя" />
      <h3>Пол: 
        {currentProduct.gender}
        </h3>
        <select ref={inputCategory} name="gender">
          <option value="женские">женские</option>
          <option value="мужские">мужские</option>
        </select>
        <h3>Категория: 
          {/* {currentProduct.Category.name} */}
          </h3>
        <select name="category">
          <option value="1">шлепки</option>
          <option value="2">сандалии</option>
          <option value="3">тапки</option>
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
  <button type="submit" onClick={editProduct}>Сохранить изменения</button>
</form>
<button onClick={() => navigate(-1)}>Назад</button>
   </>
  );
};
export default EditCardForm;
