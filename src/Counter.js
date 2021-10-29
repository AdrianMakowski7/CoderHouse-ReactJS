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
  const resetContador = () => {
    setContador(contadorCero )
  }
  return(
    <>
      <div class="contador">
        <div class="contador1">
          <button class="material-icons restaContador" onClick={restarContador} >remove</button>
          <input type="text" placeholder={contador} disabled/>
          <button class="material-icons sumaContador" onClick={sumarContador} >add</button>
        </div>
      </div>
    </>
  )
}
export default Counter

