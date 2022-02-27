import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import ProductCurrentCard from '../../components/ProductCurrentCard/ProductCurrentCard'
import Profile from "../Profile/Profile";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import EditCardForm from "../EditCardForm/EditCardForm";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
      
        <div style={{ marginTop: '4%' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/signup" element={<RegForm />} />
          <Route path="/products/:id" element={<ProductCurrentCard />} />
          <Route path="/products/edit/:id" element={<EditCardForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
