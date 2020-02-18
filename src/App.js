import React, { useState } from 'react';
import api from "./service/api"
import './style.css';

function App() {
  const [frase, setFrase] = useState("Frase do chucknorris.");
  const [img, setImg] = useState("https://assets.chucknorris.host/img/avatar/chuck-norris.png");

  async function handleClick () {
    const response = await api.get('/jokes/random')
    setFrase(response.data.value)
    setImg(response.data.icon_url)
  }

  return (
    <div className="App">
      <div className="conteudo">
        <button onClick={handleClick} className="btn-buscar"> Buscar </button>
      </div>
      <div className="render">
        <img src={img} alt="chucknorris"></img>
        <span className="texto">{frase}</span>
      </div>
    </div>
  );
}

export default App;
