import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../Nav/Nav';
import Registration from '../Registration/Registration';
import Home from '../Home/Home';
import Login from '../Login/Login';


function App() {


  
  return (
    <BrowserRouter >

     <Nav />
     
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="/login" element={<Login />} />
      </Routes>

  </BrowserRouter>
  );
}

export default App;
