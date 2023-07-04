import React from "react";
import "./Tudo.css";
import { Link } from "react-router-dom";
import logoMarrom from "../assets/img/logoMarrom.png";
import sombraLateral from "../assets/img/sombraLateral.png";
import fotoGenerica from "../assets/img/salaoGenerico.jpg";
import fotoGenerica2 from "../assets/img/salaoGenerico2.jpg";

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
              Bem-vindo ao nosso maravilhoso salão de beleza especializado em
              cachos! Aqui, acreditamos que a verdadeira beleza reside na
              aceitação e celebração de quem somos. Somos mais do que um simples
              salão de beleza, somos uma comunidade dedicada a cuidar e ensinar
              você a viver o seu cabelo natural com segurança e liberdade.
            </p>
            <br />
            <h2>Nossos serviços</h2>
            <p>
              Em nosso salão de beleza especializado em cachos, oferecemos uma
              variedade de serviços projetados para cuidar e realçar a beleza
              natural dos seus cachos. Aqui estão alguns dos serviços que temos
              disponíveis: <br />
              <br />
              <b>1.</b> Corte especializado para cachos: Nossos estilistas
              experientes são especialistas em cortes que valorizam a textura e
              forma dos seus cachos, criando um visual moderno e harmonioso.{" "}
              <br />
              <br />
              <b>2.</b>
              Hidratação profunda: Proporcionamos tratamentos de hidratação
              intensa para seus cachos, restaurando a vitalidade, suavidade e
              brilho dos fios. Usamos produtos específicos para nutrir
              profundamente e manter seus cachos hidratados e saudáveis. <br />
              <br />
              <b>3.</b>
              Definição de cachos: Através de técnicas especializadas, nossos
              profissionais são capazes de definir seus cachos de maneira
              natural e duradoura. Você sairá do salão com cachos definidos,
              soltos e cheios de vida. <br />
              <br />
              <b>4.</b> Coloração para cachos: Se você deseja adicionar um toque
              de cor aos seus cachos, oferecemos serviços de coloração
              personalizados para realçar sua beleza natural. Nossos estilistas
              irão ajudá-lo a escolher a tonalidade perfeita que complemente
              seus cachos.
            </p>
          </div>
          <div id="imgSobreNos">
            <img src={fotoGenerica2} className="imgQuadrada" alt="Imagem 1" />
          </div>
        </div>

        <div id="frame2">
          <div id="frame2Content" className="bordaBranca">
            <h2 id="aspas">"</h2>
            <p>
              Aqui, valorizamos a individualidade e reconhecemos que cada cacho
              tem sua própria história. Nossos talentosos estilistas não apenas
              dominam as técnicas mais avançadas para cuidar e realçar seus
              cachos, mas também estão aqui para ouvir suas necessidades e
              desejos.
            </p>
          </div>
        </div>

        <div id="fotosSobreNos" className="bordaBranca">
          <img src={fotoGenerica} alt="Imagem 1" />
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
