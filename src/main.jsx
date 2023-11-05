import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contenedor from './elements/Contenedor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IniciaSesion } from './components/IniciaSesion.jsx'
import { Registro } from './components/Registro.jsx'
import { ListaDeGastos } from './components/ListaDeGastos.jsx'
import { EditarGasto } from './components/EditarGasto.jsx'
import { GastosPorCategoria } from './components/GastosPorCategoria.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Contenedor>
        <Routes>
          <Route path='/iniciar-sesion' element={<IniciaSesion />} />
          <Route path='/crear-cuenta' element={<Registro />} />
          <Route path='/categorias' element={<GastosPorCategoria />} />
          <Route path='/lista' element={<ListaDeGastos />} />
          <Route path='/editar/:id' element={<EditarGasto />} />
          <Route path='/' element={<App />} />

        </Routes>
        <App />
      </Contenedor>
    </BrowserRouter>
  </React.StrictMode>,
)
