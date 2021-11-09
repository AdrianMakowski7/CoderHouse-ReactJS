import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Header from "./Header"
import Navbar from "./component/NavBar/Navbar";
import Container from "./Container"
import CardContainer from "./CardContainer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import DetailProduct from './pages/CardsDetail';


const App =() => {
  return(
  <>
  <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="CardContainer" element={<CardContainer/>} />
        <Route path="/" element={<Home/>} />
        <Route path="cards/:id" element={<DetailProduct/>} />

      </Routes>
    </BrowserRouter>
  </>
  )
}
 
  export default App