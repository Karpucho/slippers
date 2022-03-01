import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

// import RegForm from "../RegForm/RegForm";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import Home from "../Home/Home";
import ProductCurrentCard from '../../components/ProductCurrentCard/ProductCurrentCard'
import Profile from "../Profile/Profile";
import TestSveta from '../TestSveta/TestSveta'
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";



import AddingReviews from "../AddingReviews/AddingReviews";


import Slider from "../Slider/Slider";
import EditCardForm from '../EditCardForm/EditCardForm'
import Wholesale from "../Wholesale/Wholesale";
import Admin from "../Admin/Admin";
import Signin from "../Signin/Signin"
import Signup from "../Signup/Signup";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>


      <Slider/>

        <div style={{ marginTop: '4%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products/:id" element={<ProductCurrentCard />} />
          <Route path="/products/edit/:id" element={<EditCardForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reviews" element={<Reviews />} />


          <Route path="/info" element={<Info/>} />


          <Route path="/addreviews" element={<AddingReviews/>} />
          <Route path="/test" element={<TestSveta/>} />
          <Route path="/wholesale" element={<Wholesale/>} />

          <Route path="/admin" element={<Admin/>} />
          <Route path="/info" element={<Info/>} />

        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
