import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Cat from "./Catpage.js";
import Dog from "./Dogpage.js";
import logo2 from "../Assets/logo2.png"
import gato from "../Assets/gato.png"
import cachorro from "../Assets/cachorro.png"
import * as S from "./Style.js"
export default function Rota({Rota1, Rota2}){
    return(
        <BrowserRouter>
        <S.Header>
            <img src={logo2} alt="" />
        <nav>
            <ul>
                <li>
                 <S.Links to="/">{Rota1}</S.Links>
                <img src={cachorro} alt=""/>  
                </li>
                <li>
                 <S.Links to="/cat">{Rota2}</S.Links>
                <img src={gato}  alt=""/>
                </li>
            </ul>
        </nav>
        </S.Header>
        <Routes>
            <Route path="/" element={<Dog/>} />
            <Route path="/cat" element={<Cat/>} />
        </Routes>
        </BrowserRouter>
    )
}