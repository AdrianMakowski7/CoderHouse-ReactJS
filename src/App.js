import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import Navbar from "./component/NavBar/Navbar";
import CardContainer from "./CardContainer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CardsDetail from './pages/CardDetail';
import Cart from './pages/Cart';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';

const App =() => {
  return(
    <BrowserRouter>
      <UserProvider>
      <CartProvider>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="Cart" element={<Cart/>} />
          <Route path="CardContainer" element={<CardContainer/>} />
          <Route path="/" element={<Home/>} />
          <Route path="CardsDetail/:id" element={<CardsDetail/>} />
        </Routes>
      </CartProvider>
      </UserProvider>
    </BrowserRouter>
  )
}
 
  export default App