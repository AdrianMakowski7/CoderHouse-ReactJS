import Header from "./Header"
import {useState} from "react"

const App =() => {


  
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
      {<Header/>}
      <div className="contador">
      <button className="restaContador" onClick={restarContador} >Restar</button>
      <button className="sumaContador" onClick={sumarContador} >Sumar</button>
      <p>{contador}</p>
      <button className="resetContador" onClick={resetContador} >Reset</button> 
      </div>
    </>
  )
}



export default App