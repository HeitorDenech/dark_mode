import React, { createContext, useState, useContext } from 'react';
import '../App.css';

const TemaContexto = createContext();

function Dark_mode() {
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema((temaAnterior) => (temaAnterior === 'claro' ? 'escuro' : 'claro'));
  }

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      <div className={`app ${tema}`}>
        <header className="app-header">
          <h1>Alternador de Tema React</h1>
          <AlternarTema />
        </header>
      </div>
    </TemaContexto.Provider>
  );
}

function AlternarTema() {
  const { tema, alternarTema } = useContext(TemaContexto);

  return (
    <button className={`botao ${tema}`} onClick={alternarTema}>
      Tema {tema === 'claro' ? 'Escuro' : 'Claro'}
    </button>
  );
}

export default Dark_mode;
