import { useUser } from "./context/UserContext"

const ItemListContainer = (props) => {

const {userName} = useUser();

  const {nombre:nombre, apellido:apellido} = props 

  return (
    <div>
      <p>
        Bienvenido <br/> {userName} {apellido} !!
      </p>
    </div>
    
  )
}

export default ItemListContainer