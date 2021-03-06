import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
CartContext.displayName= "CartContext";

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) =>{
    const newItem = {item, quantity};
    setCart((prevState)=>[...prevState, newItem])
  };
  const removeItem = (id) => {
  }
  
  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) =>{
  }

  const getQuantity= () => {
    let quantity = 0;
    cart.forEach((superhero)=>{
      quantity += superhero.quantity;
    });
    return quantity
  };

  const value ={cart, addItem, removeItem, clear, isInCart, getQuantity}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () =>{
  const context = useContext(CartContext)
  if(!context){
    throw new Error(`useCart debe usarse desde adentro de un Cart`)
  }
  return context
}