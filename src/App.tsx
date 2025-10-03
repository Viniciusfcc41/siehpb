import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Programacao } from './pages/programacao'
import {Convidados} from './pages/convidados'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Programacao/>}/>
        <Route path="/convidados" element={<Convidados/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
