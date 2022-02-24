import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ProductList from '../ProductList/ProductList'
import { store } from "../../redux/store"; 

function App() {
  return (
    <Provider store={store} >
    <BrowserRouter >

<div className="App">
    <h1>Test!</h1>
    </div>
    <ProductList />
    <Routes>

    </Routes>
    
    </BrowserRouter >
    </Provider>
  );
}

export default App;
