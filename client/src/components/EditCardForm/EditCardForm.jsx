import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

function EditCardForm(props) {

  const inputName = useRef();
  const inputGender = useRef();
  const inputCategory = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();



  const { id } = useParams();
  const navigate = useNavigate();

  const { products } = useSelector(state => state.productsReducer);
  console.log(products);

  const currentProduct = products.find(el => el.id === id);
  console.log(currentProduct);


  const editPorduct = (e) => {
    e.preventDefault();

    const
  }

  return (
    <>
<form>
  <h3>Имя: {currentProduct.name}</h3>
    <input ref={inputName} defaultValue={currentProduct.name} type="text" placeholder="Измените имя" />

      <h3>Пол: {currentProduct.gender}</h3>
        <select name="gender">
          <option ref={inputGender} value="женские">женские</option>
          <option ref={inputGender} value="мужские">мужские</option>
        </select>

        <h3>Категория: {currentProduct.Category.name}</h3>
        <select name="category">
          {currentProduct.Category.map(el => <option ref={inputCategory} value={el.id}>{el.name}</option>)}
        </select>

        <h3>Описание: {currentProduct.description}</h3>
        <input ref={inputDescription} defaultValue={currentProduct.description} type="text" placeholder="Измените описание" />

      <h3>Цена: {currentProduct.price}</h3>
    <input ref={inputPrice} defaultValue={currentProduct.price} type="number" placeholder="Измените цену" />
  <button type="submit" onClick={editProduct}>Сохранить изменения</button>
</form>
<button onClick={() => navigate(-1)}>Назад</button>
   </>
  );
};

export default EditCardForm;
