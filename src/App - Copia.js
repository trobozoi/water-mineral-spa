import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	    <h1>Água Mineral</h1>
		<p>Conheça os benefícios, origem, tipos e importância para a saúde.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="Benefits">
        <h2>Benefícios da Água Mineral</h2>
        <ul>
          <li>Mantém o corpo hidratado</li>
          <li>Fornece minerais essenciais</li>
          <li>Auxilia na digestão</li>
          <li>Promove a saúde da pele</li>
        </ul>
      </section>
      <section className="Origin">
        <h2>Origem da Água Mineral</h2>
        <p>A água mineral é proveniente de fontes naturais...</p>
      </section>
      <section className="Types">
        <h2>Tipos de Água Mineral</h2>
        <p>Existem diferentes tipos de água mineral...</p>
      </section>
      <section className="Importance">
        <h2>Importância para a Saúde</h2>
        <p>A água mineral desempenha um papel crucial na saúde...</p>
      </section>
    </div>
  );
}

export default App;