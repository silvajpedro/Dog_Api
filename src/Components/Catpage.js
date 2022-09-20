import React, {useState}  from "react";
import { InfoCats} from "./Infos/InfoCats";
import gatinho from "../Assets/gatinho.jpg"
import * as S from "./Style.js"
import patas from "../Assets/pegada.png"
import OutroComponente from "./Adopt";
import X from "../Assets/X.png"

export default function CatPage(){
  const [open, setOpen] = useState(false)
  const [catsImg, setCatsImg] = useState(gatinho)
  const [i, setI] = useState(0)
  const [a, setA] = useState(1) // indice que informará as idades
  const [age] = useState([1,2,3,4,5,6,7,8,9]) // idades para os cachorros
  
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
  <main>
    <S.GlobalStyle/>
    <S.Bigbox>
    { open && <S.X src={X} alt="" onClick={() => {setOpen(open !== true ? true:false)}} /> }
      <section>
    <h1>Gatos para adoção</h1>
   <S.Imagem src={catsImg} alt='oi'/>
   <h2>{InfoCats[i].nome} - {age[a]} {age[a] > 1 ? 'anos' : 'ano'}  </h2>
      <div>
      <button onClick={() => {setOpen(open !== true ? true:false)}}>Adotar<img src={patas} alt="" /></button>
        <button onClick={() => { CatApi() }}>Próximo <img src={patas} alt="" /></button>
      </div>
      </section>
    </S.Bigbox>
   {open && <OutroComponente/>}
  </main>
  )
}
