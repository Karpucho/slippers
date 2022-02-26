import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import ProductCurrentCard from '../../components/ProductCurrentCard/ProductCurrentCard'
import Profile from "../Profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>


      <NavBar/>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/api/products" element={<ProductList />} />
          <Route path="/signup" element={<RegForm />} />
          <Route path="/products/:id" element={<ProductCurrentCard />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
