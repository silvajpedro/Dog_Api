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
export const Bigbox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
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
    font-size: 32px;
    background-color: white;
    font-family: "Lobster", sans-serif;
    background-color: #F0F0F0;
}
div{
    position: relative;
    z-index: 10;
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
background-repeat: no-repeat;
background-image:url(${grama}) ;
background-position: 0px -80px;
background-size: 100%;
height: 89vh;
`
// Rotas
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
transition: ease-in-out;
&:hover{

}
`
export const Imagem = styled.img`
position: relative;
top: -2vh;
border-radius: 100px;
border:solid;
outline: white solid;
height: 46vh;
`;

export const CaixaCadastro = styled.section`
position: absolute;
top: 0vh;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const Cadastro = styled.div`
display: flex;
justify-content: center;
height: 72vh;
width: 30vw;
border-radius: 30px;
background-color:#F0F0F0 ;
border: solid;
position:relative;
z-index: 10;
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