import React from "react";
import "./Agendehorario.css";
import imgInsta from '../assets/img/instagram.png'
import imgWpp from '../assets/img/whatsapp.png'

export default function Agendehorario() {
  return (
      <section>
          <div id="Conteudo">
            <div className='blocoRedeSocial'>
                <img className='conteudoImg' src={imgInsta} alt="Logo instagram"/>
                <a href="https://www.instagram.com/rosemartins.espacobeleza/" target="_blank" rel="noopener noreferrer"><button>Visite nossa página</button></a>
            </div>
            <div className="blocoRedeSocial">
                <img className='conteudoImg' src={imgWpp} alt="Logo WhatsApp"/>
                <a href="https://wa.me/5531989773190" target="_blank" rel="noopener noreferrer"><button>Agende um horário</button></a>
            </div>
            <h5>Rua 123, nº 45 / Itabira-MG </h5>
          </div>
          
      </section>
  );
}
