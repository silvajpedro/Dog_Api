import React, { useState } from "react";
import * as S from "./Style.js"

export default function OutroComponente(){
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
      setTimeout(()=>{
        document.querySelector('.linha').style.display = "none"
  
      }, 9500)
      setTimeout(()=>{
        document.querySelector('.confirm').style.backgroundColor = "#37BA07"
        document.querySelector('.confirm').style.top = "1.5vh"
        document.querySelector('.confirmText').style.color = "#ffff"
      }, 9800)
      } 
    }
    return(
      <>
      <S.CaixaCadastro>
          <S.Validar className="confirm">
            <h2 className="confirmText">
              Obrigado pela sua confirmação😁,
              em breve entraremos em contato!
            </h2>
          </S.Validar>
        <S.CaixaLinha>
        <S.Linha className="linha"></S.Linha>
        </S.CaixaLinha>
      <S.Cadastro>
        <h1>Formulário de adoção</h1>
        <form onSubmit={(e) => e.preventDefault()}>
        <label for="nome">Nome Completo</label>
        <input pattern="^[^-\s][a-zA-ZÀ-ú ]*" value={fName} onChange={(e) => {setfName(e.target.value)}} type="text" id="nome" name="nome" placeholder="Seu nome Completo"  required />
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