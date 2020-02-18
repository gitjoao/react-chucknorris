import React, { useState } from 'react';
import api from './service/api';
import './style.css';

import Loading from './component/Loading';
import Content from './component/Content';

function App() {
  const [frase, setFrase] = useState("Frase do chucknorris.");

  const [load, setLoad] = useState(false)
  async function handleClick () {
    setLoad(true)
    const response = await api.get('/jokes/random')
    setFrase(response.data.value)
    setLoad(false)
  }

  return (
    <div className="App">
      <div className="conteudo">
        <button onClick={handleClick} className="btn-buscar"> Buscar </button>
      </div>
      {load ? <Loading /> : <Content frase={frase} /> }
    </div>
  );
}

export default App;
