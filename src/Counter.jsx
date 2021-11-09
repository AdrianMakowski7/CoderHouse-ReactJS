import {useState} from "react"

const Counter = () => {
  const[contador , setContador]=useState(0)
  const contadorCero = 0
  const sumarContador = () => {
  setContador(contador + 1)
  }
  const restarContador = () => {
    setContador(contador - 1)
  }

  return(
    <>
      <div className="contador">
        <div className="contador1">
          <button className="material-icons restaContador" onClick={restarContador} >remove</button>
          <input type="text" placeholder={contador} disabled/>
          <button className="material-icons sumaContador" onClick={sumarContador} >add</button>
        </div>
      </div>
    </>
  )
}
export default Counter

