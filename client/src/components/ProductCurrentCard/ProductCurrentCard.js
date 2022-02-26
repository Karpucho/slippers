import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addProductBasketAC }  from '../../redux/actionCreators/basketAC';
import SizeInStock from '../SizeInStock/SizeInStock';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';

import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'

function ProductCurrentCard() {

  const dispatch = useDispatch();
  const params = useParams();
  const { currentProduct } = useSelector(state => state.productsReducer);



  // const { basketProducts } = useSelector(state => state.basketReducer);
  const addProductBacket = () => {
    dispatch(addProductBasketAC());
   
  };

  // useEffect(() => {
  //   localStorage.setItem('basket', JSON.stringify(basketProducts));
  // }, [basketProducts]);

  useEffect(() => {
    const id = Number(params.id);
    fetch(`http://localhost:5000/products/${id}`, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initCurrentProductCardAC(data.currentProduct))
      } else if (data.message === 'noCurrent') {
        console.log('noCurrent');
      } else (console.log(data.error))})
    .catch(error => error.message)
}, [dispatch, params.id]);

console.log(currentProduct.SizesOfProducts);

  return (
    
    <div>
          <div>
          <Link to='/products/'><button>закрыть</button></Link>
          <div>
            {/* <img src={currentProduct.photo}/> */}
          </div>
            <h3>{currentProduct.name}</h3>
            <h3>Описание товара</h3>
            <div>{currentProduct.description}</div>
             {<p>{currentProduct.price}</p>}

            <p>В наличии</p>
            
            {currentProduct.SizesOfProducts?.length && 
            currentProduct.SizesOfProducts.map(el => <SizeInStock key={uuidv4()} size={el.sizeNumber} count={el.itemsLeft}/>)
            }
            <br />
            {currentProduct.rating ? <p>Рейтинг {currentProduct.rating}</p> : <p>Пока что никто не оставил отзыв на данный товар</p>}
            <button onClick={addProductBacket}>В корзину</button>
            <button>В избрaнное</button>
            <h3>Похожие товары</h3>
            <h3>Отзывы</h3>
          </div>
     </div>
  );
}

export default ProductCurrentCard;


