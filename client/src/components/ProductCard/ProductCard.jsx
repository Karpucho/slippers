import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import './ProductCard.css';



export default function ProductCard({product}) {

  return (
    <>
     <Link to={`/products/${product.id}`}>
          <div className="test2">
            <img src='https://kgrm.ru/wa-data/public/shop/products/16/29/2916/images/8028/8028.280.jpg' />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
          </div>
      </Link>
    </>
  );
}
