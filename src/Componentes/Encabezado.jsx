import React from 'react'
import { Link } from "react-router-dom";

import "../Css/Encabezado.css";

export const Encabezado = () => {
  return (
    <header className="navbar">
        <a href="/" className="logo">Demo Streaming</a>
        <div className="nav-buttons">
        <Link to="/Login">
          <button className="btn-login">Inicio Sesión</button>
        </Link>
          <button className="btn-trial">Empieza la prueba gratuita</button>
        </div>
      </header>
  )
}
