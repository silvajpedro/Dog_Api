import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfoDogs } from "./Infos/InfoDogs";
import * as S from "./Style.js";
import doguinho from "../Assets/doguinho.jpg";
import patas from "../Assets/pegada.png";
import X from "../Assets/X.png";
import OutroComponente from "./Adopt.js";

function Nomes({ contador }) {

  let API = `https://api.invertexto.com/v1/faker?token=3222|p1qrEJyBjNQSq2u4XhoMkY6PFkVDakv6&fields=name,cpf&locale=pt_BR`;
  const [doguinho, setDoguinho] = useState("");
 
  const ChamarNome = () => {
    axios
      .get(API)
      .then((nomes) => {
        console.log(nomes);
        setDoguinho(nomes.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    ChamarNome();
  }, [contador]);

  return (
    <S.NameDog>
        {doguinho[0] === "D" || doguinho[0] === "S"
          ? doguinho[3] === "." | doguinho[4] === "."
            ? doguinho.substring(5, 14)
            : doguinho.substring(4, 14)
          : doguinho.substring(0, 7)}
    </S.NameDog>
  );
}

export default function DogPage() {
  const [open, setOpen] = useState(false);
  const [dogsImg, setdogsImg] = useState(doguinho);
  const [i, setI] = useState(0);
  const [a, setA] = useState(1); // indice que informará as idades
  const [age] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // idades para os cachorros
  let API = "https://dog.ceo/api/breeds/image/random";
  console.log(a + "indice array");
  console.log(age[a] + "numero array");
  const [contagem, setContagem] = useState(0);

  const DogsApi = () => {
    axios
      .get(API)
      .then((res) => {
        setdogsImg(res.data.message);
        setTimeout(() => {
          if (
            i === Math.floor(Math.random() * 231) ||
            Math.floor(Math.random() * 231) ||
            Math.floor(Math.random() * 231) ||
            Math.floor(Math.random() * 231 || 0)
          ) {
            setI(Math.floor(Math.random() * 231));
            setA(Math.floor(Math.random() * 10));
          } else {
            setI(Math.floor(Math.random() * 231));
            setA(Math.floor(Math.random() * 10));
          }
        }, 200);
        setContagem(contagem + 1);
      })
      .catch((error) => {
        console.log("Desculpe vocÊ não conseguiu realizar a requisição", error);
      });
  };
  return (
    <main>
      <S.GlobalStyle />
      <S.Bigbox>
        {open && (
          <S.X
            src={X}
            alt="icone de fechar página"
            onClick={() => {
              setOpen(open !== true ? true : false);
            }} />
        )}
        <section>
          <h1>Cachorros para adoção</h1>
          <S.Imagem src={dogsImg} alt="imagem dos cachorros para adoção" />
          <h2>
            {/*{InfoDogs[i].nome}*/} {<Nomes contador={contagem} />} - {age[a]}{" "}
            {age[a] > 1 ? "anos" : "ano"}{" "}
          </h2>
          <div>
            <button
              title="Botão de adotar animal"
              onClick={() => {
                setOpen(open !== true ? true : false);
              }}
            >
              {" "}
              Adotar
              <img src={patas} alt="icone de patinhas de cachorro" />
            </button>
            <button
              title="Botão próximo cachorro"
              onClick={() => {
                DogsApi();
              }}
            >
              Próximo
              <img src={patas} alt="icone de patinhas de cachorro" />
            </button>
          </div>
        </section>
      </S.Bigbox>
      {open && <OutroComponente animal={"Nome do Cachorro"} />}
    </main>
  );
}
