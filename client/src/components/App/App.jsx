import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<RegForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
