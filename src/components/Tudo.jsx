import React from "react";
import "./Tudo.css";
import { Link } from "react-router-dom";
import logoMarrom from "../assets/img/logoMarrom.png";
import sombraLateral from "../assets/img/sombraLateral.png";
import fotoExem1 from "../assets/img/fotoexem1.jpg";
import fotoExem2 from "../assets/img/fotoexem2.jpg";
import fotoExem3 from "../assets/img/fotoexem3.jpg";

export default function Tudo() {
  return (
    <div>
      <section id="primeira">
        <div id="primeiraContent">
          <div id="nome">
            <h1 id="nomeRose">
              <b>Rose Martins</b>
            </h1>
            <h2>Espaço de beleza</h2>
            <img src={logoMarrom} alt=".." id="logoMarrom" />
          </div>
          <div id="agende">
            <Link to="/Agende-horario">
              <button id="botaoAgendar">
                <b>Agende um horário</b>
              </button>
            </Link>
          </div>
        </div>
        <img src={sombraLateral} alt=".." id="sombraLateral" />
      </section>

      <section id="sobreNos">
        <div id="sobreNosContent" className="bordaBranca">
          <div id="textosSobreNos">
            <h2>Quem somos</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              deserunt dignissimos ex porro dolorem quam sapiente cum modi. Sed
              porro et maxime quam asperiores voluptatem totam libero quibusdam
              tenetur eaque.
            </p>
            <br />
            <h2>Nossos serviços</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              nesciunt illum, perferendis ducimus deleniti corrupti non, nihil
              expedita quia vel voluptates molestias cupiditate commodi
              dignissimos atque! Enim inventore dicta vitae. Maxime impedit
              eveniet illo iste perspiciatis similique suscipit id esse qui iure
              quod provident, voluptatem optio deserunt sed consequuntur
              accusamus. Similique deleniti nulla accusamus minus perferendis
              quibusdam inventore magnam sit!
            </p>
          </div>
          <div id="imgSobreNos">
            <img src={fotoExem1} className="imgQuadrada" alt="Imagem 1" />
          </div>
        </div>

        <div id="frame2">
          <div id="frame2Content" className="bordaBranca">
            <h2 id="aspas">"</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur quibusdam autem, magnam ab nesciunt est minima
              delectus vero minus quod quos nam assumenda voluptatibus unde
              sunt? Dolore eum cumque consectetur!
            </p>
          </div>
        </div>

        <div id="fotosSobreNos" className="bordaBranca">
          <img src={fotoExem1} alt="Imagem 1" />
          {/* <img src={fotoExem2} alt="Imagem 2" /> */}
          {/* <img src={fotoExem3} alt="Imagem 3" /> */}
        </div>
      </section>

      <section id="final">
        <a href="#primeira">Voltar ao início</a>
      </section>
    </div>
  );
}
