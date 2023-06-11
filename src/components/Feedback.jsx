import React, { useEffect, useState } from "react";
import "./Agendehorario.css";

export default function Feedback() {
  /*
  <div id="caixaComentario">
              <p>Nome • Procedimento</p>
              <p>
                "
                <i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem natus quibusdam, minima sint vero eveniet sed hic et!
                  Vitae distinctio deleniti optio nam corporis cum ullam ducimus
                  quasi dignissimos corrupti.
                </i>
                "
              </p>
              <p>Nota:</p>
            </div>
*/
  const [avaliacao, setAvaliacao] = useState([]);
  const url = "https://apidois-leo704.vercel.app/avaliacao";

  useEffect(() => {
    //console.log("Requisitando json dados da API");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setAvaliacao(resp))
      .catch((err) => console.log(err));
  }, [url]);

  const semDescricao = avaliacao.filter((item) => item.descricao != null);
  const comDescricao = avaliacao.filter((item) => item.descricao == null);


  return (
    <div>
      <section id='souSection'>
        <div id="Conteudo">
          {semDescricao.map((item) => {
            return (
              <div key={item.id} id="caixaComentario">
                <p>
                {item.nome} • {item.procedimento}
                </p>
                <p>
                  "<i>{item.descricao}</i>"
                </p>
                <p id="notaComDes">nota: {item.nota}</p>
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
