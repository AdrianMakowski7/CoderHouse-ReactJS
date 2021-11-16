import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom"
import { useCart } from '../context/CartContext';


const CardsDetail = () => {
  const [superhero, setSuperhero] = useState({});
  const {id} = useParams();
  const [ loading, setLoading ] = useState(false);
  const { addItem } = useCart();
    
  const addToCart = () => {
    addItem(superhero, counter)
  }

  const[counter , setCounter]=useState(1)
  
  const handleMinusClick =() =>{
    if(counter > 1)
    setCounter((prevState) => prevState -1);
  }
  const handlePlusClick =() =>{
    setCounter((prevState) => prevState +1);
  }

  useEffect(()=> {
    setLoading(true)
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => setSuperhero(data))
    .catch((e) => console.log("Corran!!"))
    .finally(() => setLoading(false))
  }, [id])

  
  if (loading){
    return <p className="loading">Cargando......</p>
  }else{
  return (
    <div>
      <div className="mb-1 bg-dark card-detail">
        <div className="row no-gutters">
        <div className="col-md-8">
          <div className="card-body text-center">
            <h5 className="card-title-detail title">{superhero?.name}</h5>
            <div className="row">
              <div className="col-md-6 biography" >
                <h6 className="card-text-detail title2">Biography</h6>
                <p className="card-text-detail">Full Name: <span>{superhero.biography?.fullName}</span>  
                                                <br/>Alter Egos: <span>{superhero.biography?.alterEgos}</span>
                                                <br/>Work: <span>{superhero.work?.occupation}</span>
                                                <br/>Place Of Birth: <span>{superhero.biography?.placeOfBirth}</span>
                                                <br/>First Appearance: <span>{superhero.biography?.firstAppearance}</span>
                                                <br/>Publisher: <span>{superhero.biography?.publisher}</span>
                </p>
              </div>
              <div className="col-md-6 appearance">
                <h6 className="card-text-detail title2">Appearance</h6>
                <p className="card-text-detail">Gender: <span>{superhero.appearance?.gender}</span>
                                                <br/>Race: <span>{superhero.appearance?.race}</span>
                                                <br/>Eye Color: <span>{superhero.appearance?.eyeColor}</span>
                                                <br/>Hair Color: <span>{superhero.appearance?.hairColor}</span>
                                                <br/>Height: <span>{superhero.appearance?.height[1]}</span>
                                                <br/>Weight: <span>{superhero.appearance?.weight[1]}</span>
                </p>
              </div>
            </div>
            <div>
              <h6 className="card-text-detail">Stats</h6>
              <table className="table table-info">
                <tbody>
                  <tr>
                    <th>Intelligence</th>
                    <td>{superhero.powerstats?.intelligence}</td>
                    <th>Strength</th>
                    <td>{superhero.powerstats?.strength}</td>
                  </tr>
                  <tr>
                    <th >Speed</th>
                    <td>{superhero.powerstats?.speed}</td>
                    <th>Durability</th>
                    <td>{superhero.powerstats?.durability}</td>
                  </tr>
                  <tr>
                    <th>Power</th>
                    <td>{superhero.powerstats?.power}</td>
                    <th>Combat</th>
                    <td>{superhero.powerstats?.combat}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contador">
              <button className="material-icons restaContador" onClick={handleMinusClick}>remove</button>
              <input type="text" placeholder={counter} disabled onChange={(e)=>setCounter(e.target.placeholder)}/>
              <button className="material-icons sumaContador" onClick={handlePlusClick}>add</button>
              <br />
              <button onClick={addToCart}>Add to Card</button>
            </div>
              <Link to={"/CardContainer"}>
                <button className="goback material-icons" >arrow_circle_left</button>  
              </Link>
          </div>
        </div>
        <div className="col-md-4">
            <img src={superhero.images?.lg} className="card-img"/>
        </div>
      </div>
    </div>
    </div>
  )
}
}
export default CardsDetail