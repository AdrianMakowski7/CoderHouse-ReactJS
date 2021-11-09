import Counter from "./Counter"
import {useState, useEffect} from 'react'


const Container =()=>{
  const [autos, setAutos] = useState([]);
  useEffect(()=>{
    setTimeout(()=>{
      setAutos([
        { id:1, nombre: "Mustang", img:"https://fotos.perfil.com/2020/04/06/trim/1280/720/ford-mustang-gt-50-935793.jpg" },
        { id:2, nombre: "Camaro", img:"https://st.motortrend.com/uploads/sites/45/2015/10/2016-Chevrolet-Camaro-SS-V-8-homepage.jpg"},
        { id:3, nombre: "Challenger", img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dodge-challenger-srt-super-stock-2020-1600-03-1593769621.jpg"},
        { id:4, nombre: "Fusca", img:"https://imagenes.montevideo.com.uy/imgnoticias/201601/_H571_90/545149.jpg"},
        { id:5, nombre: "Cadillac", img:"https://media.ed.edmunds-media.com/cadillac/escalade/2021/oem/2021_cadillac_escalade_4dr-suv_premium-luxury_fq_oem_1_1280.jpg"},
        { id:6, nombre: "Cinquecento", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fiat_Cinquecento_front_20081127.jpg/1200px-Fiat_Cinquecento_front_20081127.jpg"}])
      },2000);
    }, []);
    
    if(autos.length === 0){
      return <p class="tituloContainer"> LOADING! </p>
    }else{  
      return(
        <div>
        <h3 className="tituloContainer">Disponibles!</h3>
        <div className="container row card-columns">
        
      {autos.map((e, i)=> {
        return  <div className="card" key={e.id}>
                  <img className="card-img-top" src={e.img} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{e.nombre}</h5>
                    <Counter/>
                    <button className="btn btn-primary">Detalle</button>
                    
                  </div>
                </div>
      })}
    </div>
    </div>
  );
}
}

export default Container