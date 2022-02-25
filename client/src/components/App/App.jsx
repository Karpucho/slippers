import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
        <h1>Test!</h1>
        <ProductList />
        <Routes>
          <Route path="/signup" element={<RegForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
