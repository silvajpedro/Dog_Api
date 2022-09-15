import React, {useState, useEffect}  from "react";
import axios from "axios";
import { InfoDogs} from "./Info.js";
import * as S from "./Style.js"

export default function CatPage(){
  const [catsImg, setCatsImg] = useState()
  const [h, setH] = useState(0)
  const CatApi = () =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data)=> {
       setCatsImg(data[0].url)
    })
  }
useEffect(()=>{
  if(h === 0){
    CatApi()
    setH(h + 1)
  }
})
  return(
  <>
    <S.GlobalStyle/>
    <S.Bigbox>
    <h1>Gatos para adoção</h1>
   {/* <S.Imagem src={data} alt='oi'/>
   <h2>{InfoDogs[i].nome} - <span style={age === 0 ? {display:'none'}:{display:'initial'}}> {age} {age > 1 ? 'anos': 'ano'}</span> {age=== 0 ? '9 meses': ''}  </h2> */}
   <S.Imagem src={catsImg} alt="" />
   <button onClick={()=> {CatApi()}}>teste</button>
    </S.Bigbox>
  </>
  )
}