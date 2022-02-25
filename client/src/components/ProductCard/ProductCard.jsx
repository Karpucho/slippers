import { useRef, useState } from 'react';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';


export default function ProductCard({product}) {

  const [visibility, setVisibility ] = useState(false);


  return (
    <><div onClick={() => setVisibility(true)}>
          <div>
            {/* <img src={currentProduct.photo}/> */}
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          </div>
          {visibility && <div>
            <button>Закрыть</button>
            <div>
            {/* <img src={currentProduct.photo}/> */}
          </div>
          <div>
            <h3>{product.name}</h3>
            <div>{product.discription}</div>
            <p>{product.price}</p>
            <button>В корзину</button>
            <button>В избрвнное</button>
          </div>
          </div>}
    </>
  );
}
