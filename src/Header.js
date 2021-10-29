import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"

const Header =() => {
  return(
    <header class="main-header">
      <h1 class="tituloPrincipal">TIENDA DE AUTOS</h1>
      <Navbar/>
      <ItemListContainer nombre="Adrian" apellido="Makowski"/>
      <CartWidget/>
    </header>
  )
}

export default Header

