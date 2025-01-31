import React from 'react'
import "../Css/Encabezado.css";

export const Encabezado = () => {
  return (
    <header className="navbar">
        <a href="/" className="logo">Demo Streaming</a>
        <div className="nav-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-trial">Empieza la prueba gratuita</button>
        </div>
      </header>
  )
}
