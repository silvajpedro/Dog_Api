import React, {useState, useEffect}  from "react";
import axios from "axios";
import { InfoCats} from "./Infos/InfoCats";
import gatinho from "../Assets/gatinho.jpg"
import * as S from "./Style.js"

export default function CatPage(){
  const [catsImg, setCatsImg] = useState(gatinho)
  const [i, setI] = useState(0)
  const [h, setH] = useState(0)
  const [a, setA] = useState(1) // indice que informará as idades
  const [age, setAge] = useState([1,2,3,4,5,6,7,8,9]) // idades para os cachorros
  
  const CatApi = () =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data)=> {
       setCatsImg(data[0].url)
    })
    setTimeout(()=>{
      setA((Math.floor(Math.random() * 9)))
 if (i === Math.floor(Math.random() * 231) || Math.floor(Math.random() * 231) || Math.floor(Math.random() * 231) || Math.floor(Math.random() * 231 || 0)) {
            setI(Math.floor(Math.random() * 231))
          } else {
            setI(Math.floor(Math.random() * 231))
          }
    },700)
    
  }
  return(
  <>
    <S.GlobalStyle/>
    <S.Bigbox>
      <div>
    <h1>Gatos para adoção</h1>
   <S.Imagem src={catsImg} alt='oi'/>
   <h2>{InfoCats[i].nome} - {age[a]} {age[a] > 1 ? 'anos' : 'ano'}  </h2>
   <button onClick={()=> {CatApi()}}>teste</button>
      </div>
    </S.Bigbox>
  </>
  )
}