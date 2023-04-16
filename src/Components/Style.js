import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import grama from "../Assets/grama.jpg"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
//Dogpage style / Catpage style
export const Bigbox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-image:url(${grama}) ;
background-position: 0px -80px;
background-size: 100%;
height: 89vh;
section{
    position: relative;
    display: flex;
    top: -2vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 85vh;
    border-radius: 20px;
    width: 40vw;
}
h1{
    text-align: center;
    position: relative;
    top: -1.8vh;
    font-family:"Satisfy", sans-serif ;
    color: black;
    background-color: #F0F0F0;
    font-size: 48px;
    border: solid;
    border-radius: 20px;
    width: 40vw;
}
h2{
    display: flex;
    justify-content: center;
    position: relative;
    top: -2.5vh;
    width: 22vw;
    height: 7.5vh;
    border: solid;
    border-radius: 30px;
    font-size: 33px;
    background-color: white;
    font-family: "Lobster", sans-serif;
    background-color: #F0F0F0;
}
div{
    display: flex;
    justify-content: space-between;
    width: 23vw;
    button{
        font-family: "Lobster", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10vw;
        height: 7vh;
        border-radius:30px;
        font-size: 25px;
        cursor: pointer;
        background-color: #F0F0F0;
        &:hover{
            transform: scale(105%);
        }
        img{
            height: 5.5vh;
        }
    }
}
`
export const NameDog = styled.p`
display: flex;
justify-content:center;
align-items: center;
width: 11vw;
font-size: "29px";
`
//Adopt  Style
export const CaixaCadastro = styled.section`
position: absolute;
top: -0.5vh;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const Cadastro = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 72vh;
width: 30vw;
border-radius: 30px;
background-color:#F0F0F0 ;
border: solid;
position:relative;
z-index: 10;
h1{
    font-size: 38px;
    font-family: "Satisfy", sans-serif;
}
form{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    height: 58vh;
    label{
        position: relative;
        left: 0.6vw;
        font-size: 25px;
        font-family: "Lobster", sans-serif;
    }
    input{
        width: 20vw;
        height: 6.8vh;
        border-radius: 5px;
        border: solid 2px;
        font-size: 21px;
        padding-left: 5px;
    }
    input::placeholder{
        position: relative;
        top: 0.3vh;
    }
    div{
        position: relative;
        top: 0.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.5vh;
        button{
            width: 9vw;
            height: 5.5vh;
            border-radius:20px;
            font-size: 26px;
            font-family:"Lobster", sans-serif;
            cursor: pointer;
            background-color: white;
            &:hover{
                transform: scale(106%);
            }
        }
    }
}
`
export const Fume = styled.div`
position: absolute;
z-index: 1;
top: 0vh;
height: 100vh;
width: 100%;
background-color: black;
opacity: 0.5;
`
export const CaixaLinha = styled.div`
position: absolute;
top: 11.6vh;
width: 100%;
height: 2vh;
z-index: 10;
`
export const Validar = styled.div`
position: absolute;
top: -1vh;
right: 37.5vw;
width: 25vw;
height: 9vh;
background-color:transparent;
z-index: 100;
border-radius: 5px;
transition: ease-in-out 1.3s;
h2{
    position: relative;
    left: 0.5vw;
    color: transparent;
    font-size: 20px;
    transition: ease-in-out 1.6s;
}
`
export const Linha = styled.span`
position: absolute;
width: 0vw;
height: 0.8vh;
background-color: #34C1FF;
transition: ease-in-out 2.5s;
`
export const X = styled.img`  
    position: absolute;
    z-index: 10;
    height: 10vh;
    top: 1vh;
    right: 2vw;
    cursor: pointer;
    `
// Routes style
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    width: 100%;
    background-color:#F0F0F0;
    img{
        position: relative;
        height: 11.07vh;
        left: 2vw;
    }
    nav{
        position: relative;
        left: 4vw;
        display: flex;
        align-items: center;
    }
    ul{
        display: flex;
        list-style: none;
        justify-content:space-between;
        align-items: center;
        width: 28vw;
        li{
        display: flex;
        align-items: center;
        font-size:41px;
        height:10vh;
        &:hover{
            transform: scale(105%);
        }
        img{
            height:8vh ;
            left: 0vw;
        }
        }
    }
    `
export const Links = styled(Link)`
    font-family: "Satisfy", sans-serif;
    font-weight: 500;
    text-decoration: none;
    color: black;
    `
export const Imagem = styled.img`
    position: relative;
    top: -2vh;
    border-radius: 100px;
    border:solid;
    outline: white solid;
    height: 46vh;
    `;