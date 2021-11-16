import React from "react";
const Home = () =>{
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const handleClick = (event, nombre) => {
    console.log("hola", nombre)
  }
  return(
    <>
      <h4 className="tittle">Welcome to the superhero store, here you can find your favorite heroes or villains and get their collectible cards.
      <br/>There are more than 700, can you get them all?
      <br/>Go to the store by touching our website's logo.</h4>
      <button onClick={handleClick}>fdsasaffsafasasfasf</button>
    </>
  );
};
export default Home