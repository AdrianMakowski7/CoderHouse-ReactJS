import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router'



const CardsDetail = () => {
  const [superhero, setSuperhero] = useState({});
  const {id} = useParams();
  
  useEffect(()=> {
      fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then((response) => response.json())
      .then((data) => setSuperhero(data))
      .catch((e) => console.log("Corran!!"))

      console.log(id)
  }, [id])
  
  return (
    <div>
       <h1>Cards Id Way not</h1>
    </div>
  )
}

export default CardsDetail
