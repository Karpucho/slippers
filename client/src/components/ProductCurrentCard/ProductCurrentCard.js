import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addProductBasketAC }  from '../../redux/actionCreators/basketAC';
import SizeInStock from '../SizeInStock/SizeInStock';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';
import { initProductsListAC } from '../../redux/actionCreators/productsAC'
import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'
import ProductCard from '../ProductCard/ProductCard';

function ProductCurrentCard() {

  const dispatch = useDispatch();
  const params = useParams();
  const { currentProduct } = useSelector(state => state.productsReducer);
  const { products } = useSelector(state => state.productsReducer);

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

useEffect(() => {
  fetch('http://localhost:5000/products', {
    credentials: 'include',
  })
  .then(data => data.json())
  .then(data => {
    if(data.message === 'sucsess') {
      dispatch(initProductsListAC(data.products))
    } else if (data.message === 'noproducts') {
      console.log('noproducts');
    } else (console.log(data.error))})
  .catch(error => error.message)
}, [dispatch]);

// console.log(currentProduct.SizesOfProducts);

  return (
    <div>
          <div className="test">
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
            <div className="">
            <h3>Похожие товары</h3>
            <ul>
              {products
              .filter(product => product.categoryId === currentProduct.categoryId)
              .map( product =>
                  <li key={product.id} >
                    <Link to={`/products/${product.id}`}>
                    <ProductCard product={product}/>
                    </Link>
                  </li>).slice(0,3)}
            </ul>
            </div>
            <h3>Отзывы</h3>
          </div>
     </div>
  );
}

export default ProductCurrentCard;


