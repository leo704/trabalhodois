import React, { useEffect, useState } from "react";
import estrela from "../assets/img/estrela.png";
import "./Agendehorario.css";

export default function Feedback() {
  const [avaliacao, setAvaliacao] = useState([]);
  const url = "https://apidois-leo704.vercel.app/avaliacao";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setAvaliacao(resp))
      .catch((err) => console.log(err));
  }, [url]);

  const semDescricao = avaliacao.filter((item) => item.descricao != null);
  const comDescricao = avaliacao.filter((item) => item.descricao == null);

  return (
    <div>
      <section id="souSection">
        <div id="Conteudo">
          {semDescricao.map((item) => {
            return (
              <div id='feedbackIterativo'>
                <img id="estrelaImg" src={estrela} alt="asdw" />
                <div key={item.id} id="caixaComentario">
                  <p>
                    {item.nome} • {item.procedimento}
                  </p>
                  <p>
                    "<i>{item.descricao}</i>"
                  </p>
                  <p id="notaComDes">nota: {item.nota}</p>
                </div>
                <img id="estrelaImg" src={estrela} alt="asdw" />
              </div>
            );
          })}
          {comDescricao.map((item) => {
            return (
              <div key={item.id} id="caixaComentario">
                <p>
                  {item.nome} • {item.procedimento}
                </p>
                <p id="notaSemDes">nota: {item.nota}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
