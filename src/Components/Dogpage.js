import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfoDogs } from "./Infos/InfoDogs";
import * as S from "./Style.js"
import doguinho from "../Assets/doguinho.jpg"

export default function DogPage() {
  const [data, setData] = useState(doguinho)
  const [i, setI] = useState(0)
  const [h, setH] = useState(0)
  const [a, setA] = useState(1) // indice que informará as idades
  const [age, setAge] = useState([1,2,3,4,5,6,7,8,9,10]) // idades para os cachorros
  let API = 'https://dog.ceo/api/breeds/image/random'
  console.log(a + "indice array")
  console.log(age[a]+ "numero array")
  const DogsApi = () => {
    axios.get(API)
      .then(res => {
        setData(res.data.message)
        setTimeout(() => {
          if (i === Math.floor(Math.random() * 231) || Math.floor(Math.random() * 231) || Math.floor(Math.random() * 231) || Math.floor(Math.random() * 231 || 0)) {
            setI(Math.floor(Math.random() * 231))
            setA((Math.floor(Math.random() * 10)))
          } else {
            setI(Math.floor(Math.random() * 231))
            setA((Math.floor(Math.random() * 10)))
          }
        }, 630)
      })
      .catch(error => {
        console.log('Desculpe vocÊ não conseguiu realizar a requisição', error)
      })
  }
 
  return (
    <>
      <S.GlobalStyle />
      <S.Bigbox>
        <section>
        <h1>Cachorros para adoção</h1>
        <S.Imagem src={data} alt='oi' />
        <h2>{InfoDogs[i].nome} -  {age[a]} {age[a] > 1 ? 'anos' : 'ano'}  </h2>
        <div>
        <button onClick={() => { DogsApi() }}>Adotar</button>
        <button onClick={() => { DogsApi() }}>Próximo</button>
        </div>
        </section>
      </S.Bigbox>
    </>
  )
}