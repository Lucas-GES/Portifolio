import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './Component/List.js';
import Home from './Component/Home.js';
import Contato from './Component/Contato.js';
import Sobre from './Component/Sobre.js';
import Projetos from './Component/Projetos.js';
import Estagio from './Component/Projetos/Estagio.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <List/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/projetos/estagio' element={<Estagio />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
