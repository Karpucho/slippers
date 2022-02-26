import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import './ProductCard.css';



export default function ProductCard({product}) {

  return (
    <>
     <Link to={`/products/${product.id}`}>
          <div className="test2">
            {/* <img src={currentProduct.photo}/> */}
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
          </div>
      </Link>
    </>
  );
}
