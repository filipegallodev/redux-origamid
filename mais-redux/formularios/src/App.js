import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adicionarDatas } from "./store/date";

function App() {
  const [nome, setNome] = useState();
  const [partida, setPartida] = useState();
  const [retorno, setRetorno] = useState();

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(adicionarDatas({ nome, partida, retorno }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
      </p>
      <p>
        <label htmlFor="partida">Partida</label>
        <input
          type="date"
          id="partida"
          value={partida}
          onChange={({ target }) => setPartida(target.value)}
        />
      </p>
      <p>
        <label htmlFor="retorno">Retorno</label>
        <input
          type="date"
          id="retorno"
          value={retorno}
          onChange={({ target }) => setRetorno(target.value)}
        />
      </p>
      <button>Buscar</button>
    </form>
  );
}

export default App;
