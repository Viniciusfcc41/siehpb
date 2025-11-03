import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Programacao } from './pages/programacao'
import {Convidados} from './pages/convidados'
import {Trabalhos} from './pages/trabalhos'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Programacao/>}/>
        <Route path="/convidados" element={<Convidados/>}/>
        <Route path="/trabalhos" element={<Trabalhos/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
