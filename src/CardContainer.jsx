import {useState, useEffect} from 'react'

import Card from "./component/Card/Card"
import Counter from "./Counter";

const CardContainer = () => {
  const [superhero, setSuperhero] = useState([]);
  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then((response) => {
      if(response.ok){
      return response.json();
      }else{
      throw response
      }
    })
    .then((data)=> setSuperhero(data))
    .catch((error)=> console.log("Error 404"))
  }, []);

  return(
      <div className="row">
      {superhero.map((e)=> {
        return(
            <Card
              key={e.id}
              cardId={e.id}
              name={e.name}
              images={e.images.lg}
              />
        );  
    })}
      </div>
    );
};
  

export default CardContainer
