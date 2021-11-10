import {useState} from "react"

const Counter = () => {
  const[counter , setCounter]=useState(0)

  const handleMinusClick =() =>{
    setCounter((prevState) => prevState -1);
  }
  const handlePlusClick =() =>{
    setCounter((prevState) => prevState +1);
  }

  return(
    <>
      <div className="contador">
        <button className="material-icons restaContador" onClick={handleMinusClick} >remove</button>
        <input type="text" placeholder={counter} disabled/>
        <button className="material-icons sumaContador" onClick={handlePlusClick} >add</button>
        <br />
        <button>Add to cart</button>
      </div>
    </>
  )
}
export default Counter

