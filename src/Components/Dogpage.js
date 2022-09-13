import React, {useState, useEffect}  from "react";
import axios from "axios";
import { InfoDogs} from "./Info.js";
import * as S from "./Style.js"


export default function DogPage(){
  const [data,setData] = useState(null)
  const [i, setI] = useState(0)
  const [h, setH] = useState(0)
  const [age, setAge] = useState((Math.floor(Math.random() * 11)))
  let API = 'https://dog.ceo/api/breeds/image/random'
  const DogsApi = () =>{
    axios.get(API)
    .then(res =>{
      setData(res.data.message)
      setTimeout(()=>{
        if(i === Math.floor(Math.random() * 231 ) || Math.floor(Math.random() * 231 ) || Math.floor(Math.random() * 231 ) || Math.floor(Math.random() * 231 || 0 )){
          setI(Math.floor(Math.random() * 231 ))
          setAge((Math.floor(Math.random() * 11)))
        } else {
          setI(Math.floor(Math.random() * 231 ))
          setAge((Math.floor(Math.random() * 11)))
        }
      },630)
    })
    .catch(error =>{
      console.log('Desculpe vocÊ não conseguiu realizar a requisição', error)
    })
  }
  useEffect(()=>{
    if(h === 0){
      DogsApi()
      setH(h+1)
    }
  })
  return(
    <S.Bigbox>
    <h1>Dogs</h1>
   <S.Imagem src={data} alt='oi'/>
   <h2>{InfoDogs[i].nome} - {age} {age >= 1 ? 'anos': 'ano'} {age=== 0 ? '6 meses': ''} </h2>
   <button onClick={()=> {DogsApi()}}>teste</button>
    </S.Bigbox>
  )
}