import React from 'react'
import MenuHeader from './MenuHeader'
import MenuFooter from './MenuFooter'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Musica from './pages/Musica'
import Sobre from './pages/Sobre'

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
                  <Route path="/sobre" element = {<Sobre/>} />
      </Routes>
      </main>
      <footer> 
        <MenuFooter/> 
      </footer>
    </BrowserRouter>
  )
}
  
export default App