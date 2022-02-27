import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";
import Cart from '../Cart/Cart'
import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import ProductCurrentCard from '../ProductCurrentCard/ProductCurrentCard'
import Profile from "../Profile/Profile";
import {useState} from 'react'
import Snack from '../Snack/Snack'

function App() {

  const { cartProducts } = useSelector(state => state.cartReducer);

  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(cartProducts);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
      if (!e.target.value) {
          setProducts(cartProducts);
          setSearch('');
          return;
      }

      setSearch(e.target.value);
      setProducts(
          products.filter((cartProducts) =>
          cartProducts.name.toLowerCase().includes(e.target.value.toLowerCase())
          ))
  };

  // const addToOrder = (product) => {
  //     let quantity = 1;

  //     const indexInOrder = order.findIndex(
  //         (item) => item.id === product.id
  //     );

  //     if (indexInOrder > -1) {
  //         quantity = order[indexInOrder].quantity + 1;

  //         setOrder(order.map((item) => {
  //                 if (item.id !== product.id) return item;

  //                 return {
  //                     id: item.id,
  //                     name: item.name,
  //                     price: item.price,
  //                     // quantity,
  //                 };
  //             }),
  //         );
  //     } else {
  //         setOrder([
  //                 ...order,
  //                 {
  //                     id: product.id,
  //                     name: product.name,
  //                     price: product.price,
  //                     // quantity,
  //                 },
  //             ],
  //         );
  //     }

  //     setSnackOpen(true);
  // };

  const removeFromOrder = (product) => {
      setOrder(order.filter((item) => item.id !== product));
  };

  return (
    <Provider store={store}>
      <BrowserRouter>


      <NavBar
      handleCart={() => setCartOpen(true)}
      orderLen={order.length}
      // value={search}
      // onChange={handleChange}
      />
      <Cart 
      order={order}
      removeFromOrder={removeFromOrder}
      cartOpen={isCartOpen}
      closeCart={() => setCartOpen(false)}
      />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/signup" element={<RegForm />} />
          <Route path="/products/:id" element={<ProductCurrentCard />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
        <Snack
            isOpen={isSnackOpen}
            handleClose={() => setSnackOpen(false)}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
