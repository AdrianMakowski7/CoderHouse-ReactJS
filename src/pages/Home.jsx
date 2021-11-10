import React from "react";




const Home = () =>{
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  const handleClick = (event, nombre) =>{
    console.log("hola", nombre)
  }
  return(
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>fdsasaffsafasasfasf</button>
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <div className="tittle">Welcome to the superhero store, here you can find your favorite heroes or villains and get their collectible cards.
      <br/>There are more than 700, can you get them all?
      <br/>Go to the store touching our website's logo.</div> */}


      
    </>
  );
};
export default Home