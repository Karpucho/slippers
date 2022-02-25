import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductBasketAC } from '../../redux/actionCreators/basketAC'
import ChooseSize from '../ChooseSize/ChooseSize'
// import { useParams } from 'react-router-dom';
import './ProductCard.css';



export default function ProductCard({product}) {

  const [visibility, setVisibility ] = useState(false);
  const dispatch = useDispatch();

  const { basketProducts } = useSelector(state => state.basketReducer);


  const addProductBacket = () => {
    dispatch(addProductBasketAC(product));
   
  };

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketProducts));
  }, [basketProducts]);


  return (
    <><div onClick={() => setVisibility(true)}>
          <div className="test2">
            {/* <img src={currentProduct.photo}/> */}
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
          </div>
          </div>
          {visibility && <div className="test">
            <button onClick={() => setVisibility(false)}>Закрыть</button>
            <div>
            {/* <img src={currentProduct.photo}/> */}
          </div>
          <div>
            <h3>{product.name}</h3>
            <div>{product.description}</div>
            <p>{product.price}</p>
            <ChooseSize /> 
            <br />
        
            <button onClick={addProductBacket}>В корзину</button>
            <button>В избрaнное</button>
          </div>
          </div>}
    </>
  );
}
