import React, { useEffect, useState } from "react";
import imgDelete from "../assets/img/delete.png";
import imgEdit from "../assets/img/edit.png";
import imgAdd from "../assets/img/add.png";
import axios from "axios";
import "./CrudAvaliacao.css";

export default function CrudAvaliacao() {
  const [avaliacao, setAvaliacao] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [nota, setNota] = useState("");
  const [descricao, setDescricao] = useState(null);
  const [tipo, setTipo] = useState("");
  const [divVisivel, setDivVisivel] = useState(false);

  const url = "https://apidois-leo704.vercel.app/";

  useEffect(() => {
    fetch(url + "avaliacao")
      .then((response) => response.json())
      .then((data) => setAvaliacao(data))
      .catch((err) => console.log(err));
  }, [url]);

  //Será usado no botão NOVO
  function novosDados() {
    setTipo("novo");
    setDivVisivel(true);
  }

  //Será usado no botão CANCELAR
  function limparDados() {
    setId("");
    setNome("");
    setProcedimento("");
    setNota("");
    setDescricao(null);
    setTipo("");
    setDivVisivel(false);
  }

  //Será usado no momento de EDIÇÂO dos dados
  function editarDados(cod) {
    let umaAvaliacao = avaliacao.find((item) => item.id === cod);
    const { id, nome, procedimento, nota, descricao } = umaAvaliacao;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setProcedimento(procedimento);
    setNota(nota);
    setDescricao(descricao);
    setDivVisivel(true);
  }

  //Será usado APÓS a gravação dos dados EDITADOS
  function atualizarListaAvaliacaoEditado(response) {
    let { id } = response.data;
    const index = avaliacao.findIndex((item) => item.id == id);
    let avali = avaliacao;
    avali[index].nome = nome;
    avali[index].procedimento = procedimento;
    avali[index].nota = nota;
    avali[index].descricao = descricao;
    setAvaliacao(avali);
    limparDados("");
  }

  //Será usado APÓS a gravação dos dados novos
  function atualizaListaComNovaAvaliacao(response) {
    let { id, nome, procedimento, nota, descricao } = response.data[0];
    let obj = {
      id: id,
      nome: nome,
      procedimento: procedimento,
      nota: nota,
      descricao: descricao,
    };
    let avali = avaliacao;
    avali.push(obj);
    setAvaliacao(avali);
    limparDados("");
  }

  //Será usado no ícone da lixeira ao APAGAR um registro pela API
  function apagarDados(cod) {
    const confirmacao = window.confirm("Tem certeza que deseja apagar?");
    if (confirmacao) {
      apagarDadosCerteza(cod);
    }
  }

  function apagarDadosCerteza(cod) {
    axios.delete(url + "avaliacao/" + cod).then(() => {
      setAvaliacao(avaliacao.filter((item) => item.id !== cod));
    });
  }

  //Será usado ao clicar no botão GRAVAR
  function gravarDados() {
    if (nome !== "" && procedimento !== "" && nota !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "avaliacao", {
            nome: nome,
            procedimento: procedimento,
            nota: nota,
            descricao: descricao,
          })
          .then((response) => atualizaListaComNovaAvaliacao(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
        axios
          .put(url + "avaliacao/" + id, {
            id: id,
            nome: nome,
            procedimento: procedimento,
            nota: nota,
            descricao: descricao,
          })
          .then((response) => atualizarListaAvaliacaoEditado(response))
          .catch((err) => console.log(err));
      }
      limparDados("");
      setDivVisivel(false);
    } else {
      window.alert("Preencha os campos");
    }
  }

  function imprimeDescricao(item) {
    if (item.descricao) {
      return <p>"{item.descricao}"</p>;
    } else {
      return (
        <p className="p-menor">
          <i>*sem descrição*</i>
        </p>
      );
    }
  }

  return (
    <div id="limite">
      <div id="infos">
        {/* <button type="button" onClick={novosDados}>Novo</button> */}
        <img
          alt="Novo registro"
          src={imgAdd}
          height={40}
          width={40}
          onClick={(e) => novosDados()}
        />
        {divVisivel && (
          <div>
            <div id="divVisivelInputs">
              <input
                placeholder="Nome*"
                type="text"
                name="txtNome"
                required
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
              <div id="procedimentoNota">
                <input
                  placeholder="Procedimento*"
                  type="text"
                  name="txtProcedimento"
                  value={procedimento}
                  onChange={(e) => {
                    setProcedimento(e.target.value);
                  }}
                />
                <select
                  value={nota}
                  onChange={(e) => {
                    setNota(e.target.value);
                  }}
                  name="txtNota"
                >
                  <option value="">Nota*</option>
                  <option value="10">10</option>
                  <option value="9">9</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
              <input
                placeholder="Descrição (opcional)"
                type="text"
                name="txtDescricao"
                value={descricao}
                onChange={(e) => {
                  setDescricao(e.target.value);
                }}
              />
            <div id="divVisivelBotao">
              <button type="button" onClick={limparDados}>
                Cancelar
              </button>
              <button type="button" onClick={gravarDados}>
                Salvar
              </button>
            </div>
            </div>
          </div>
        )}

        {avaliacao
          ? avaliacao.map((item) => {
              return (
                <div key={item.id} id="resultados">
                  <div id="resultadosTexto">
                    {item.nome} - {item.procedimento} - {item.nota}
                    {imprimeDescricao(item)}
                  </div>
                  <div id="resultadosImagens">
                    <img
                      alt="Editar"
                      src={imgEdit}
                      id={item.id}
                      height={20}
                      width={20}
                      onClick={(e) => editarDados(item.id)}
                    />
                    <img
                      alt="Apagar"
                      src={imgDelete}
                      id={item.id}
                      height={20}
                      width={20}
                      onClick={(e) => apagarDados(item.id)}
                    />
                  </div>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
}
