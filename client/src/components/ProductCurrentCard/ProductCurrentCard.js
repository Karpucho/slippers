import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addProductBasketAC }  from '../../redux/actionCreators/basketAC';
import SizeInStock from '../SizeInStock/SizeInStock';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function ProductCurrentCard(product) {

  const dispatch = useDispatch();

  // const { basketProducts } = useSelector(state => state.basketReducer);
  const addProductBacket = () => {
    dispatch(addProductBasketAC(product));
   
  };

  // useEffect(() => {
  //   localStorage.setItem('basket', JSON.stringify(basketProducts));
  // }, [basketProducts]);

  return (
    <div>
    <Link to={`/home/${product.id}`}>
          <div className="test">
          <div>
            {/* <img src={currentProduct.photo}/> */}
          </div>
             <h3>{product.name}</h3>
             <h3>Описание товара</h3>
             <div>{product.description}
             </div>
             {<p>{product.price}</p>}

            <p>В наличии</p>
            
            {product.SizesOfProducts?.length && 
            product.SizesOfProducts.map(el => <SizeInStock key={uuidv4()} size={el.sizeNumber} count={el.itemsLeft}/>)
            }
            <br />
            {product.rating ? <p>Рейтинг {product.rating}</p> : <p>Пока что никто не оставил отзыв на данный товар</p>}
            <button onClick={addProductBacket}>В корзину</button>
            <button>В избрaнное</button>
            <h3>Похожие товары</h3>
            <h3>Отзывы</h3>
            </div>
        
      </Link>
     </div>
  );
}

export default ProductCurrentCard;


