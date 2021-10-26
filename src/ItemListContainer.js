
const ItemListContainer = (props) => {
  const {nombre:nombre, apellido:apellido} = props 

  return (
    <div>
      <p>
        Bienvenido <br/> {nombre} {apellido} !!
      </p>
    </div>
    
  )
}

export default ItemListContainer
