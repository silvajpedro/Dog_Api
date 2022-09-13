import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";
import Cat from "./Catpage.js";
import Dog from "./Dogpage.js";
import logo from "../Assets/logo_big.png"
import * as S from "./Style.js"
export default function Rota({Rota1, Rota2}){
    return(
        <BrowserRouter>
        <S.Header>
            <img src={logo} alt="" />
        <nav>
            <ul>
                <li>
                    <S.Links to="/">{Rota1}</S.Links>
                </li>
                <li>
                    <S.Links to="/cat">{Rota2}</S.Links>
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