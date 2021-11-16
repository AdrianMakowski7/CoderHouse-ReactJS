import { useCart } from "./context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {getQuantity} = useCart()


  return (
    <div className="cartWidget">
      <Link to="cart" className="material-icons shopping_cart">
          shopping_cart
      </Link>
      {getQuantity()}
    </div>
  )
}

export default CartWidget


