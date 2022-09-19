import React, { useState } from "react";
import axios from "axios";
import { InfoDogs } from "./Infos/InfoDogs";
import * as S from "./Style.js"
import doguinho from "../Assets/doguinho.jpg"
import patas from "../Assets/pegada.png"
import X from "../Assets/X.png"

export default function DogPage() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(doguinho)
  const [i, setI] = useState(0)
  const [a, setA] = useState(1) // indice que informará as idades
  const [age] = useState([1,2,3,4,5,6,7,8,9,10]) // idades para os cachorros
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
    <main >
      <S.GlobalStyle/>
      <S.Bigbox>
      { open && <S.X src={X} alt="" onClick={() => {setOpen(open !== true ? true:false)}} /> }
        <section>
        <h1>Cachorros para adoção</h1>
        <S.Imagem src={data} alt='oi' />
        <h2>{InfoDogs[i].nome} -  {age[a]} {age[a] > 1 ? 'anos' : 'ano'}  </h2>
        <div>
        <button onClick={() => {setOpen(open !== true ? true: false)  }}> Adotar<img src={patas} alt="" /></button>
        <button onClick={() => { DogsApi() }}>Próximo<img src={patas} alt="" /></button>
        </div>
        </section>
      </S.Bigbox>
      { open && <OutroComponente/>}
    </main>
  )
}

function OutroComponente(){
  const [fName, setfName] = useState('')
  const [fAnimal, setfAnimal] = useState('')
  const [fTelephone, setfTelephone] = useState('')
  const [fEmail, setfEmail ] = useState('')

  const validaInput = () =>{
    if(fName !== '' && fAnimal !== '' && fTelephone !== '' && fEmail !== ""){
    setTimeout(()=>{
      document.querySelector('.linha').style.width = "30%"

    }, 1000)
    
    setTimeout(()=>{
      document.querySelector('.linha').style.width = "50%"

    }, 4000) 

    setTimeout(()=>{
      document.querySelector('.linha').style.width = "100%"

    }, 6500)
    } 
  }
  return(
    <>
    <S.CaixaCadastro>
        <S.Validar>
          <h2>Entraremos em contato</h2>
        </S.Validar>
      <S.CaixaLinha>
      <S.Linha className="linha"></S.Linha>
      </S.CaixaLinha>
    <S.Cadastro>
      <h1>Formulário de adoção</h1>
      <form onSubmit={(e) => e.preventDefault()}>
      <label for="nome">Nome Completo</label>
      <input value={fName} onChange={(e) => {setfName(e.target.value)}} type="text" id="nome" name="nome" placeholder="Seu nome Completo"  required />
      <label for="adotado">Nome do animal</label>
      <input value={fAnimal} onChange={(e) => {setfAnimal(e.target.value)}} type="text" id="adotado" name="adotado"  placeholder="Quem irá ser adotado" required /> 
      <label for="tel">Telefone/WhatsApp</label>
      <input value={fTelephone} onChange={(e) => {setfTelephone(e.target.value)}} type="tel" id="tel" name="tel" placeholder="(DDD)XXXX-XXXX" required/>
      <label for="email">E-mail</label>
      <input value={fEmail} onChange={(e) => {setfEmail(e.target.value)}} type="email" id="email" name="email" placeholder="Seu melhor e-mail" required/>
      <div>
      <button value="submit" onClick={()=> {validaInput()}}>Enviar</button>
      </div>
      </form>
    </S.Cadastro>
    </S.CaixaCadastro>
      <S.Fume className="fume">
      </S.Fume>
    </>
  )
}