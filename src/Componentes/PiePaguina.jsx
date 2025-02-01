import React from 'react'

import { Link } from "react-router-dom";
import "../Css/PiePaguina.css";

export const PiePaguina = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <a >Inicio</a>
      </Link>
      <Link to="/">
        <a >Privacidad y políticas</a>
      </Link>
      <Link to="/">
        <a >Ayuda</a>
      </Link>
      <Link to="/">
        <a >Términos y condiciones</a>
      </Link>
      </footer>
  )
}
