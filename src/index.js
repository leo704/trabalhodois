import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tudo from "./components/Tudo";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agendehorario from "./components/Agendehorario";
import Feedback from "./components/Feedback";
import CrudAvaliacao from "./components/CrudAvaliacao";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Tudo />} />
      <Route path="Agende-horario" element={<Agendehorario />} />
      <Route path="feedbacks" element={<Feedback/>} />
      <Route path="editar" element={<CrudAvaliacao/>} />
    </Routes>
  </BrowserRouter>
);
