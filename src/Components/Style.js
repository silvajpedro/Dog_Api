import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";


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
background-color: white;

`
export const Header = styled.header`
display: flex;
align-items: center;
justify-content:flex-start;
width: 100%;
background-color: #d1d2d5;
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
border: solid;
height: 45vh;
`;