import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import ProductCurrentCard from '../../components/ProductCurrentCard/ProductCurrentCard'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>

      <ProductList />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<RegForm />} />
          <Route path="/home/:id" element={<ProductCurrentCard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
