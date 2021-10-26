import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"

const Header =() => {
  return(
    <header class="main-header">
      <h1>Buscador de Ciudades</h1>
      <ItemListContainer nombre="Adrian" apellido="Makowski"/>
      <Navbar/>
      <CartWidget/>
    </header>
  )
}

export default Header

