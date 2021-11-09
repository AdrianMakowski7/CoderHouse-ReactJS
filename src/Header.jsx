import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"
import CardContainer from "./CardContainer"
import { Link } from "react-router-dom"
import logoimg from "./imges/Logo.png"



const Header =() => {
  return(
    <header className="main-header">
      <div className="logo-header">
        <Link to={"/CardContainer"}>
         <img src={logoimg}/>
        </Link>
      </div>
      <div className="rest-header">
        <ItemListContainer nombre="Adrian" apellido="Makowski"/>
        <CartWidget/>
      </div>
    </header>
  )
}

export default Header

