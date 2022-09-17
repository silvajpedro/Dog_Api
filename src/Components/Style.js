import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

import patinhas3 from "../Assets/patas3jpg.jpg"

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
    top: -1.5vh;
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
    top: -2vh;
    font-family:"Satisfy", sans-serif ;
    color: black;
    background-color: white;
    font-size: 48px;
    border: solid;
    border-radius: 20px;
    width: 40vw;
}
h2{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -2vh;
    width: 20vw;
    height: 6vh;
    border: solid;
    border-radius: 30px;
    background-color: white;
}
div{
    display: flex;
    justify-content: space-between;
    width: 22vw;
    button{
        width: 9vw;
        height: 7vh;
        border-radius:30px;
        font-size: 22px;
        cursor: pointer;
        &:hover{
            transform: scale(105%);
        }
    }
}
background-repeat: no-repeat;
    background-image:url(${patinhas3}) ;
    background-position: 0px 0px;
    background-size: 100%;
height: 88vh;
`
export const Header = styled.header`
display: flex;
align-items: center;
justify-content:flex-start;
width: 100%;
background-color:#EAEDF5;

img{
    position: relative;
    height: 12vh;
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
    width: 17vw;
    li{
       font-size:35px;
    }
}
`
export const Links = styled(Link)`
font-family: "Satisfy", sans-serif;
font-weight: 500;
text-decoration: none;
color: #202B4C;
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