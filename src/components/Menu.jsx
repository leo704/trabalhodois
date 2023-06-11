import React from "react";
import { Link } from "react-router-dom";
import "./Tudo.css";

export default function Menu() {
  return (
    <div>
      <header>
        <nav id="menuHorizontal">
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Agende-horario">Agendar Horario</Link>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
