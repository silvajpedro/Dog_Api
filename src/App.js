import React from "react";
import Rotas from "./Components/Routes.js"
import { Helmet } from "react-helmet";
export default function App(){
  return(
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Adote um amigo!</title>
      <meta name="description" content="site de adoção de animais" />
    </Helmet>
    <Rotas Rota1="Cachorros" Rota2="Gatos" />
    </>
  )
}