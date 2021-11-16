import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"
import CardContainer from "./CardContainer"
import { Link } from "react-router-dom"
import logoimg from "./imges/Logo.png"

const Header =() => {
  return(
    <header>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="logo-header align-items-center col-md-8">
          <Link to={"/CardContainer"}>
            <img src={logoimg}/>
          </Link>
        </div>
        <div className="rest-header col-md-2">
          <ItemListContainer/>
          <CartWidget/>
        </div>
      </div>
    </header>
  )
}

export default Header

