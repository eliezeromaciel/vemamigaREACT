import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
import AutoCadastro from '../pages/autocadastro'
import Clientes from '../pages/clientes'
import NotFound from '../pages/notfound'


const Rotas = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'>
          <Route index element={<Dashboard/>}/>
          {/* acrescento abqaixo, caso tenha hierarquias de rotas */}
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/clientes' element={<Clientes/>} />
        <Route path='/notfound' element={<NotFound/>} />
        <Route path='/autocadastro' element={<AutoCadastro/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas