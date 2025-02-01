import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../Css/Inicio.css";

import { Encabezado } from "../Componentes/Encabezado";
import { PiePaguina } from "../Componentes/PiePaguina";

const Inicio = () => {
  const user = useSelector((state) => state.user)

  return (
    <div className="inicio-container">

      <Encabezado />

      <main className="main-content">
        <h1>Bienvenid@ {user.name } a Demo Streaming</h1>
        <p>Eliga una categoría para disfrutar</p>
        <div className="cards-container">
          <Link to="/Series" className="card">Series</Link>
          <Link to="/Peliculas" className="card">Peliculas</Link>
        </div>
      </main>

      <PiePaguina />

    </div>
  );
};

export default Inicio;

