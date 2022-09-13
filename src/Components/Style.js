import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const Bigbox = styled.div`
background-color: #F3F4F6;
border: solid yellow;
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 50vw;
border: solid;
img{
    height: 12vh;
}
nav{
    border: solid;
}
ul{
    display: flex;
    list-style: none;
    border: solid red;
    justify-content: space-evenly;
    width: 25vw;
    li{
       font-size:24px ;
    }
}
`
export const Links = styled(Link)`
text-decoration: none;
color: black;
border: solid blue;
`

export const Imagem = styled.img`
border: solid;
height: 45vh;
`;