import React from 'react'
import MenuHeader from './MenuHeader'
import MenuFooter from './MenuFooter'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Musica from './pages/Musica'
import Equipe from './pages/Equipe'
import Contato from './pages/Contato';

import './app.css'

function App() {
  
  return (
    <BrowserRouter>
      <header>
          <MenuHeader/>
      </header>
      <main> 
      <Routes>
                  <Route path="/" element = {<Home/>} />
                  <Route path="/musica" element = {<Musica/>} />
                  <Route path="/equipe" element = {<Equipe/>} />
                  <Route path="/contato" element = {<Contato/>} />
      </Routes>
      </main>
      <footer> 
        <MenuFooter/> 
      </footer>
    </BrowserRouter>
  )
}
  
export default App